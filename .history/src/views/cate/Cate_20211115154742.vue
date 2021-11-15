<template>
  <div class="cate" ref="cate">
      <navbar>
        <div slot='left' class="left" @click='back'>
          <img src="~assets/img/back.svg" alt="error">
        </div>
        <div class="center" slot='center'>
          <span>分类</span>
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
      back(){
        this.$router.back()
      },
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
}
.cate .left img{
  width:1.4em;
}
</style>