<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {},
};
</script>

<style>
.navbar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.left,
.right {
  width: 60px;
  /* flex:1; */
}
.center {
  flex: 1;
}
</style>