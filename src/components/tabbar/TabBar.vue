<template>
  <div class="tabbar">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style scoped>
/* 导入css需要加 ~ */
    @import '~assets/css/tabbar/tabbar.css';
</style>