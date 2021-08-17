<template>
  <div class="detail">
    <nav-bar class="ccc">
      <div class="back" slot="left" @click="back">
        <img src="~assets/img/back.svg" alt="" />
      </div>
      <div slot="center" class="center">
        <div
          class="item"
          v-for="(item, index) in title"
          :key="index"
          @click="showindex(index)"
          :class="{ active: currentindex == index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/NavBar.vue";
export default {
  components: { NavBar },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentindex: 0,
    };
  },
  methods: {
    // 返回首页,有两种方式，go或者back
    back() {
    //   this.$router.go(-1);
        this.$router.back()
    },
    // 点击激活对应标签
    showindex(index) {
      this.currentindex = index;
    },
  },
};
</script>

<style scoped>
.detail{
  overflow: hidden;
}
.detail .ccc{
    width:100%;
    position:fixed;
    z-index:4;
    background:#fff;
}
.detail .center {
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
}
.detail .center .item {
  flex: 1;
}
.detail .back img {
  width: 24px;
  vertical-align: middle;
}
.active {
  color: #f20;
}
</style>