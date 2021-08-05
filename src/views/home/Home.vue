<template>
  <div class="home">
    <!-- 头部组件 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图组件 -->
    <home-swiper :banners="banner" class="swiper"></home-swiper>
    <!-- 推荐组件 -->
    <home-recommend :recommend="recommend"></home-recommend>
    <tab-control :title="['流行', '新款', '精选']"></tab-control>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import HomeRecommend from "./childcom/HomeRecommend.vue";
import HomeSwiper from "./childcom/HomeSwiper.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    TabControl,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      // 商品数据模型
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
    };
  },
  created() {
    // 请求轮播，推荐中的数据
    this.homemultidata();

    // 请求商品数据
    this.homegoods("pop");
    this.homegoods("new");
    this.homegoods("sell");
  },
  methods: {
    homemultidata() {
      getHomeMultidata().then((res) => {
        // 将请求到的数据保存在data对象对应的变量中
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    homegoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(page, type).then((res) => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
};
</script>

<style scoped>
.nav-bar {
  width: 100%;
  background: pink;
  position: fixed;
  top: 0;
  z-index: 3;
}
.swiper{
  margin-top:44px;
}
</style>