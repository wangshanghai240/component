<template>
  <div class="cate" ref="cate">
      
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'cate',
    data(){
      return{
        scroll:null
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.cate,{
        probetype:3,
        click:true,
        pullUpLoad:true
      })
      this.scroll.on('scroll',(position) =>{
        console.log(position)
      })
      this.scroll.on('pullingUp',() =>{
        console.log('上拉加载更多')
      })
    },
    methods:{
      btn(){
        console.log('ccc')
      }
    }
}
</script>

<style>
.cate{
  height:200px;
  overflow:hidden;
  background:#d8d8d8;
}
</style>