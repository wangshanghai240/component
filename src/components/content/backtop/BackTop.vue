<template>
  <div class="backtop">
    <img src="~assets/img/top.png" alt="error">
  </div>
</template>

<script>
export default {
    name:'BackTop'
}
</script>

<style scoped>
.backtop{
    position:fixed;
    bottom:50px;
    right:10px;
}
.backtop img{
    width:50px;
    background:#fff;
    border-radius:50%;
}
</style>