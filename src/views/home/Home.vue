<template>
  <div class="home">
    <!-- 头部组件 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontrolone"
        v-show="isfixed"
        class="fixed"
      ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scrollposition="scrollshow"
      :pull-up-load="true"
      @more="loadmore"
    >
      <!-- 轮播图组件 -->
      <home-swiper :banners="banner" class="swiper" ref="homeswiper" @offset='offsets'></home-swiper>
      <!-- 推荐组件 -->
      <home-recommend :recommend="recommend"></home-recommend>
      <!-- 切换栏 -->
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabclick="tabclick"
        ref="tabcontroltwo"
      ></tab-control>
      <!-- 商品列表 -->
      <goods-list :goods="showgoods"></goods-list>
      <!-- goodlist使用计算属性更好 -->
    </scroll>
    <back-top @click.native="backtop" v-show="isscrollposition" />
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import HomeRecommend from "./childcom/HomeRecommend.vue";
import HomeSwiper from "./childcom/HomeSwiper.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backtop/BackTop.vue";
import Scroll from "components/common/scroll/Scroll.vue";

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
    Scroll,
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
      // type给一个默认值
      currentype: "pop",
      isscrollposition: false,
      // tabcontrol的offsetTop默认值
      offset:0,
      // tabcontrol显隐
      isfixed:false
    };
  },
  computed: {
    showgoods() {
      return this.goods[this.currentype].list;
    },
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
  mounted() {
    // 监听请求的goodslistitem加载完成
    // this.$bus.$on("imgloadmore", () => {
    //   console.log('ccccc')
    //   this.$refs.scroll.refresh();
    // });
  },
  destoryed(){
    console.log('卧槽，我被销毁了')
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
      // 因为有两个tabcontrol,所以需要统一index，否则点击其中一个的tabcontrol，另外一个tabcontrol还是原来的那个index
      this.$refs.tabcontrolone.currentindex = index;
      this.$refs.tabcontroltwo.currentindex = index; 
    },
    // 回到顶部功能
    backtop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 判断滚动位置backtop图标显隐
    scrollshow(position) {
      this.isscrollposition = (-position.y) > 1000;
      // tabcontrol的显隐
      this.isfixed = (-position.y) > this.offset
    },
    // 下拉加载更多
    loadmore() {
      console.log("加载更多");
      this.homegoods(this.currentype);
      // this.$refs.scroll.refresh();
    },
    // tabcontrol的offsetTop
    offsets(){
      // 每个组件都有一个属性：$el表示当前组件的template的root元素，例如在tabcontrol组件的template的div.tabcontrol
      this.offset = (this.$refs.tabcontroltwo.$el.offsetTop - 44)
      console.log(this.offset)
      this.$refs.scroll.refresh()
    },
    // 网络请求相关方法
    homemultidata() {
      // 网路请求封装在该方法中
      getHomeMultidata()
        .then((res) => {
          // 将请求到的数据保存在data对象对应的变量中
          this.banner = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list;
        })
    },
    homegoods(type) {
      // 网络请求封装同上
      let page = this.goods[type].page + 1;
      getHomeGoods(page, type)
        .then((res) => {
          // console.log(this);
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;

          // 完成上拉加载更多
          this.$refs.scroll.finishPullup();
        })
        console.log('complete!')
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
}
.home .nav-bar {
  width: 100%;
  background: pink;
  position: fixed;
  top: 0;
  z-index: 3;
}
.home .content {
  height: calc(100% - 93px);
}
.home .fixed{
  width:100%;
  position:absolute;
  z-index:4;
}
.home .swiper{
  margin-top:44px !important ;
}
</style>