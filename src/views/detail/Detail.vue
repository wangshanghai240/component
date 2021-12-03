<template>
  <div class="detail">
    <detail-nav-bar />
    <scroll class='content'>
      <detail-swiper :detailswiper="topimgs" />
      <detail-base-info :goodsInfo="goodsList" />
      <detail-shop-info :shopinfo="shop" />
      <detail-goods-info :goodsinfo="detailinfo"></detail-goods-info>
      <detail-params :params='detailparams'></detail-params>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParams from './childComps/DetailParams.vue'

import { getDetailData, Goods, Shop } from "network/detail";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams
  },
  name: "Detail",
  data() {
    return {
      iid: null,
      topimgs: [],
      goodsList: {},
      shop: {},
      detailinfo:{},
      detailparams:{}
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
      this.detailinfo = res.data.result.detailInfo
      this.detailparams = res.data.result.itemParams
    });
  },
};
</script>

<style scoped>
.detail .content {
  overflow: hidden;
  height: calc(100% - 44px);
  margin-bottom: 44px;
}
</style>