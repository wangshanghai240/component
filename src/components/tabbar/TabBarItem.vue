<template>
  <div class="tabar-item" @click='showitem'>
      <slot name="item-icon"></slot>
      <slot name='item-txt'></slot>
  </div>
</template>

<script>
export default {
  name:'tabbaritem',
  props:{
    path:String
  },
  methods:{
    showitem(){
      console.log('ccc')
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
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
</style>