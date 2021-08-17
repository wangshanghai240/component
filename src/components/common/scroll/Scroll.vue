<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroll',
    data(){
        return{
            scroll:null,
        }
    },
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        // 创建better-scroll实例并传递给scroll
        this.scroll = new BScroll(this.$refs.wrapper,{
            pullUpLoad:this.pullUpLoad,
            click:true,
            // 页面无法滚动可以添加该属性
            observeDOM:true,
            probeType:this.probetype,
            observeImage:true
        })
        // 监听上拉加载更多
        this.scroll.on('pullingUp',() =>{
            // 当我们下拉到底部的时候传出去一个自定义事件，在home.vue中scroll组件接收，然后发送网络请求达到下拉加载更多的目的
            this.$emit('more')
        })
        // 监听滚动位置
        this.scroll.on('scroll',(position) =>{
            this.$emit('scrollposition',position)
        })
    },
    methods:{
        scrollTo(x,y,time = 1300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        finishPullup(){
            this.scroll && this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    }
}
</script>

<style scoped>

</style>