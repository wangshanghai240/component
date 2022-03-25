<template>
  <div class="detail">
    <detail-nav-bar @navindex="itemindex" />
    <!-- 轮播图 -->
    <detail-swiper :detailswiper="topimgs" />
    <!-- 价格等信息 -->
    <detail-base-info :goodsInfo="goodsList" />
    <!-- 评论 -->
    <comment :cominfo="comment" ref="comment"></comment>
    <!-- 店铺信息 -->
    <detail-shop-info :shopinfo="shop" />
    <!-- 店铺商品 -->
    <detail-goods-info :goodsinfo="detailinfo" ref="params" ></detail-goods-info>
    <!-- 参数信息 -->
    <detail-params :params="detailparams"></detail-params>
    <!-- 推荐 -->
    <recommend :recommend="recom" ref="recommend"></recommend>
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

import { getDetailData, getRecommend, Goods, Shop } from "network/detail";

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
      detailinfo: [],
      // 数据
      detailparams: {},
      // 评论
      comment: {},
      // 推荐
      recom: [],
      // offsetTop
      componentOffsetTop: [],
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
      this.$nextTick(() => {
        // 虽然DOM渲染出来了但是图片却没有
        // 它会导致offsetTop的值出现误差
        this.componentOffsetTop = [];
        this.componentOffsetTop.push(0);
        this.componentOffsetTop.push(this.$refs.comment.$el.offsetTop-44);
        this.componentOffsetTop.push(this.$refs.params.$el.offsetTop-44);
        this.componentOffsetTop.push(this.$refs.recommend.$el.offsetTop-44);
        console.log(this.componentOffsetTop);
      });
    });
  },
  methods: {
    itemindex(t) {
      console.log(t);
      window.scrollTo({
        left:0,
        top:this.componentOffsetTop[t],
        behavior:"smooth"
      })
    },
  },
};
</script>

<style scoped>
.detail {
  overflow: hidden;
}
.detail .content {
  overflow: hidden;
  height: calc(100% - 44px);
  margin-bottom: 44px;
}
</style>