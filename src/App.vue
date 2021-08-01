<template>
  <div id="app">
    <main-tab-bar />
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from './components/MainTabBar.vue'
export default {
  name: "App",
  components: {
    MainTabBar
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>
