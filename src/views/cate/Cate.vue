<template>
  <div class="cate">
    <!-- 导航栏 -->
    <cate-tab class="ct c"></cate-tab>
    <div class="list">
      <!-- 侧边栏 -->
      <sider-nav @cs="getnavindex" class="sn c"></sider-nav>
      <!-- 右侧数据 -->
      <detail-data :ppp='index' class="dd c">
        
      </detail-data>
    </div>
  </div>
</template>

<script>
import CateTab from './childCom/CateTab.vue'
import SiderNav from './childCom/SiderNav.vue'
import DetailData from './childCom/DetailData.vue'
// import GoodsList from "components/content/goods/GoodsList.vue";
export default {
  name: "Cate",
  components: { CateTab, SiderNav, DetailData },
  data() {
    return {
      index: 0
    }
  },
  methods: {
    getnavindex(c) {
      console.log(c)
      this.index = c
    },
  }
}
</script>

<style scoped>
.cate {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.cate .list {
  display: flex;
  /* height:calc(100vh - 94px); */
}

.list .dd {
  width: 78vw;
  height: calc(100vh - 98px);
  border: 1px solid black;
}
</style>