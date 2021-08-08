<template>
  <div class="tabar-item" @click='showitem'>
    <div :class="{active:isactive}"><slot name="item-icon"></slot></div>
    <!-- <div v-else :class="{active:isactive}"><slot name="item-icon-show"></slot></div> -->
    <div :class="{active:isactive}"><slot name='item-txt'></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  data(){
    return{
      
    }
  },
  props:{
    path:String
  },
  computed:{
    isactive(){
      // 判断处于活跃的路由是否有传过来的路径
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods:{
    showitem(){
      this.$router.push(this.path)
      console.log(this.$route)
    },
  }
}
</script>

<style>
@import '~assets/iconfont/iconfont.css';
.tabar-item{
  flex:1;
}
.tabar-item div{
  font-size:14px;
}
.tabar-item img{
  vertical-align: middle;
  width:23px;
}
.tabar-item i{
  font-size:22px;
}
.tabar-item .active{
  color:rgb(161, 35, 56);
}
</style>