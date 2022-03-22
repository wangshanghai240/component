<template>
  <div class="detail">
    <detail-nav-bar />
    <detail-swiper :detailswiper="topimgs" />
    <detail-base-info :goodsInfo="goodsList" />
    <!-- 评论 -->
    <comment :cominfo='comment'></comment>
    <!-- 店铺信息 -->
    <detail-shop-info :shopinfo="shop" />
    <!-- 店铺商品 -->
    <detail-goods-info :goodsinfo="detailinfo"></detail-goods-info>
    <!-- 参数信息 -->
    <detail-params :params="detailparams"></detail-params>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
// import Scroll from "components/common/scroll/Scroll.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import Comment from './childComps/Comment.vue'

import { getDetailData, Goods, Shop } from "network/detail";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    // Scroll,
    DetailGoodsInfo,
    DetailParams,
    Comment
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
      comment:{}
    };
  },
  // TODO:here is todo
  created() {
    // 将动态路由中的iid保存在data中
    this.iid = this.$route.query.iid;
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
      if(res.data.result.rate.cRate){
        this.comment = res.data.result.rate
      }
    });
  },
  methods:{}
};
</script>

<style scoped>
.detail{
  overflow:hidden;
}
.detail .content {
  overflow: hidden;
  height: calc(100% - 44px);
  margin-bottom: 44px;
}
</style>