<template>
  <div class="toast">
      <div class="mes">{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  props:{
      message:{
          type:String,
          default:""
      }
  }
}
</script>

<style scoped>
.toast{
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background-color: #fff;
}
</style>