<template>
  <div class="backtop">
      <a href="#">
          <img src="~assets/img/top.png" alt="">
      </a>
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
    width:40px;
}
</style>