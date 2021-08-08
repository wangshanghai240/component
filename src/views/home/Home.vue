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
    <!-- 切换栏 -->
    <tab-control
      :title="['流行', '新款', '精选']"
      @tabclick="tabclick"
    ></tab-control>
    <!-- 商品列表 -->
    <goods-list :goods="showgoods"></goods-list>
    <!-- goodlist使用计算属性更好 -->
    <back-top />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import HomeRecommend from "./childcom/HomeRecommend.vue";
import HomeSwiper from "./childcom/HomeSwiper.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from 'components/content/backtop/BackTop.vue';

import { getHomeMultidata, getHomeGoods } from "network/home";


export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    TabControl,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      // 轮播图存放位置
      banner: [],
      // 推荐存放位置
      recommend: [],
      // 商品数据模型
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 给一个默认值
      currentype: "pop",
    };
  },
  computed:{
    showgoods(){
      return this.goods[this.currentype].list
    }
  },
  // 我们将网络请求封装在methods里面，然后在created函数中调用，逻辑更加清晰
  created() {
    // 请求轮播，推荐中的数据
    this.homemultidata();

    // 请求商品数据
    this.homegoods("pop");
    this.homegoods("new");
    this.homegoods("sell");
  },
  methods: {
    // 事件监听相关方法
    // 子组件传值给父组件的时候，@tabclick='tabclick'这里不能有index参数，即@tabclick='tabclick(index)'，
    tabclick(index) {
      // 传过来的参数必须写在方法名里面
      switch (index) {
        case 0:
          this.currentype = "pop";
          break;
        case 1:
          this.currentype = "new";
          break;
        case 2:
          this.currentype = "sell";
          break;
      }
    },

    // 网络请求相关方法
    homemultidata() {
      // 网路请求封装在该方法中
      getHomeMultidata().then((res) => {
        // 将请求到的数据保存在data对象对应的变量中
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      }).then(err =>{
        console.log(err)
      })
    },
    homegoods(type) {
      // 网络请求封装同上
      let page = this.goods[type].page + 1;
      getHomeGoods(page, type).then((res) => {
        // console.log(res);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
      }).then(err =>{
        console.log(err)
      })
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
.swiper {
  margin-top: 44px;
}
</style>