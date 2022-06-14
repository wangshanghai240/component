<template>
  <div class="detail">
    <detail-nav-bar @navindex="itemindex" ref="nav" />
    <!-- 轮播图 -->
    <detail-swiper :detailswiper="topimgs" />
    <!-- 价格等信息 -->
    <detail-base-info :goodsInfo="goodsList" />
    <!-- 评论 -->
    <comment :cominfo="comment" ref="comment"></comment>
    <!-- 店铺信息 -->
    <detail-shop-info :shopinfo="shop" />
    <!-- 店铺商品 -->
    <detail-goods-info
      :goodsinfo="detailinfo"
      ref="params"
      @loadallimg="loaddetailimg"
    ></detail-goods-info>
    <!-- 参数信息 -->
    <detail-params :params="detailparams"></detail-params>
    <!-- 推荐 -->
    <recommend :recommend="recom" ref="recommend"></recommend>
    <!-- 底部工具栏 -->
    <detail-bottom-nav @addcartp="adcart"></detail-bottom-nav>
    <!-- 消息弹窗 -->
    <toast v-if="isshow">
      <template #title>
        <span>提示</span>
      </template>
      <template #content>
        <span>确认加入购物车?</span>
      </template>
      <template #cancel>
        <button class="can one" @click="cancel">取消</button>
      </template>
      <template #confirm>
        <button class="com one" @click="comfirm">确认</button>
      </template>
    </toast>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import Comment from "./childComps/Comment.vue";
import Recommend from "./childComps/Recommend.vue";
import DetailBottomNav from "./childComps/DetailBottomNav.vue";
import Toast from "plugin/Toast.vue";

import { getDetailData, getRecommend, Goods, Shop } from "network/detail";
import { debounce } from "utils/debounce";
// import { mapActions } from 'vuex'
export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    // Scroll,
    DetailGoodsInfo,
    DetailParams,
    Comment,
    Recommend,
    DetailBottomNav,
    Toast,
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      // 轮播图
      topimgs: [],
      // 商品列表
      goodsList: {},
      // 店铺
      shop: {},
      // 详细数据
      detailinfo: {},
      // 数据
      detailparams: {},
      // 评论
      comment: {},
      // 推荐
      recom: [],
      // offsetTop
      componentOffsetTop: [],
      index: 0,
      isshow: false,
    };
  },
  // TODO:here is todo
  created() {
    // 将动态路由中的iid保存在data中
    this.iid = this.$route.query.iid;
    //发起请求获取数据
    getRecommend().then((res) => {
      console.log(res);
      this.recom = res.data.data.list;
    });
    // 防抖
    this.getdebounce = debounce(() => {
      this.componentOffsetTop = [];
      this.componentOffsetTop.push(0);
      this.componentOffsetTop.push(this.$refs.comment.$el.offsetTop - 44);
      this.componentOffsetTop.push(this.$refs.params.$el.offsetTop - 44);
      this.componentOffsetTop.push(this.$refs.recommend.$el.offsetTop - 44);
      console.log(this.componentOffsetTop);
    }, 100);
    // 监听滚动，注意退出组件之后需要销毁监听事件
    this.addevent();
  },
  destroyed() {
    // 销毁组件移除事件监听
    window.removeEventListener("scroll", this.contentindex);
  },
  mounted() {
    // 根据iid请求数据
    getDetailData(this.iid).then((res) => {
      console.log(res);
      // 获取轮播图的数据
      this.topimgs = res.data.result.itemInfo.topImages;
      // 创建商品的对象
      this.goodsList = new Goods(
        res.data.result.itemInfo,
        res.data.result.columns,
        res.data.result.shopInfo.services
      );
      this.shop = new Shop(res.data.result.shopInfo);
      this.detailinfo = res.data.result.detailInfo;
      this.detailparams = res.data.result.itemParams;
      // 获取评论
      if (res.data.result.rate.cRate) {
        this.comment = res.data.result.rate;
      }
    });
  },
  methods: {
    // 等图片加载完毕
    loaddetailimg() {
      this.$nextTick(() => {
        // 虽然DOM渲染出来了但是图片却没有
        // 它会导致offsetTop的值出现误差
        this.getdebounce();
      });
    },
    itemindex(t) {
      console.log(t);
      window.scrollTo({
        left: 0,
        top: this.componentOffsetTop[t],
        behavior: "smooth",
      });
    },
    // 滚动屏幕对应tab
    contentindex() {
      // console.log(window.scrollY);
      let position = window.scrollY,
        length = this.componentOffsetTop.length;
      for (let i = 0; i < length; i++) {
        // 注意i处于边界的情况，此时position要大于该组件所处的offsetTop
        if (
          this.currentindex !== i &&
          ((i < length - 1 &&
            position >= this.componentOffsetTop[i] &&
            position < this.componentOffsetTop[i + 1]) ||
            (i === length - 1 && position >= this.componentOffsetTop[i]))
        ) {
          // console.log(i);
          this.index = i;
          this.$refs.nav.currentindex = this.index;
        }
      }
    },
    addevent() {
      window.addEventListener("scroll", this.contentindex, false);
    },
    // 添加到购物车
    adcart() {
      this.isshow = !this.isshow;
      // setTimeout(()=>{
      //   this.isshow = false
      // },2300)
    },
    cancel() {
      this.isshow = !this.isshow;
    },
    comfirm() {

      // 添加购物车所需要的信息
      let productstore = {};
      productstore.img = this.topimgs[0];
      productstore.desc = this.detailinfo.desc;
      productstore.price = this.goodsList.lowNowPrice;
      // productstore.iid = this.$route.query.iid
      productstore.iid = this.iid;
      // productstore.count = 0
      console.log(productstore.iid);
      // 提交信息
      this.$store.dispatch("cartadd", productstore);
      // console.log(productstore);
      this.cancel()
    },
  },
};
</script>

<style scoped>
.detail {
  overflow: hidden;
}
.detail::-webkit-scrollbar {
  width: none !important;
}
.detail .content {
  overflow: hidden;
  height: calc(100% -44px);
  margin-bottom: 44px;
}
</style>