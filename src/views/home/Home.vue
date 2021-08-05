<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar";
import { getHomeMultidata } from 'network/home'
export default {
  name: "home",
  components: {
    NavBar,
  },
  data(){
    return{
      banner:[],
      recommend:[]
    }
  },
  created(){
    getHomeMultidata().then(res =>{
      // 将请求到的数据保存在data对象对应的变量中
      this.banner = res.data.data.banner.list
      this.recommend = res.data.data.recommend.list
    })
  },
  methods: {
    
  },
};
</script>

<style scoped>
.nav-bar {
  background: pink;
}
</style>