<template>
  <div class="gooditem" @click="showiid">
      <slot name="img"></slot>
      <slot name="txt"></slot>
      <slot name="oriprice"></slot>
      <slot name="price"></slot>
      <slot name="shoucang"></slot>
  </div>
</template>

<script>
export default { 
  name:'GoodListItem',
  data(){
    return{
      iid:''
    }
  },
  props:{
    goodsitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    showiid(){
      this.iid = this.goodsitem.iid
      this.$router.push({
        path:'/detail',
        // 路由跳转传递参数
        query:{
          iid:this.iid
        }
      })
    }
  }
}
</script>

<style>
@import '~assets/css/gooditem/gooditem.css';
</style>