<template>
  <div class="cate" ref="cate">
      <navbar>
        <div slot='left' class="left">
          <img src="~assets/img/back.svg" alt="error">
        </div>
      </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/NavBar.vue'
import BScroll from 'better-scroll'
export default {
    name:'cate',
    components:{ navbar },
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