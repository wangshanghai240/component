<template>
  <div class="gooditem">
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
}
</script>

<style>
@import '~assets/css/gooditem/gooditem.css';
</style>