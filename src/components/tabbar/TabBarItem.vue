<template>
  <div class="tabar-item" @click='showitem'>
      <slot name="item-icon"></slot>
      <slot name='item-txt'></slot>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String
  },
  methods:{
    showitem(){
      console.log('ccc')
      this.$router.push(this.path)
    },
    clickshow(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'wangshanghai',
          age:18
        }
      })
    }
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
  width:30px;
}
.tabar-item i{
  font-size:18px;
}
</style>