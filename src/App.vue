<template>
  <div id="app">
    <keep-alive exclude="Detail">
     <router-view></router-view> 
    </keep-alive>
    <MainTabBar v-if='this.$route.path === "/detail" ? false : true' />
  </div>
</template>

<script>
import MainTabBar from 'components/MainTabBar.vue'
export default {
  name: "App",
  components: {
    MainTabBar
  },
};
</script>

<style>
@import '~assets/css/base.css';
</style>
