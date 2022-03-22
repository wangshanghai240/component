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
          <span>{{ item }}</span>
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
      title: ["商品", "评论", "参数", "推荐"],
      currentindex: 0,
      index: 0,
      offset:0
    };
  },
  watch:{
    'offset = window.scrollY'(){
        
      }
  },
  methods: {
    // 返回首页,有两种方式，go或者back
    back() {
      //   this.$router.go(-1);
      this.$router.back();
    },
    // 点击激活对应标签
    showindex(index) {
      // 移除监听
      window.removeEventListener("scroll", this.scr);
      this.offset = window.scrollY
      this.currentindex = index;
      // 点击标签滚动到对应的位置
      switch (index) {
        case 0:
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          break;
        case 1:
          window.scrollTo({
            top: 430,
            left: 0,
            behavior: "smooth",
          });
          break;
        case 2:
          window.scrollTo({
            top: 800,
            left: 0,
            behavior: "smooth",
          });
          break;
        case 3:
          window.scrollTo({
            top: 8700,
            left: 0,
            behavior: "smooth",
          });
          break;
      }
    },
    scr() {
      this.title.forEach((item, index) => {
        this.index = index;
      });
      if (window.scrollY < 430) {
        this.index = 0;
        this.currentindex = this.index;
      } else if (window.scrollY < 800 && window.scrollY >= 430) {
        this.index = 1;
        this.currentindex = this.index;
      } else if (window.scrollY >= 800 && window.scrollY < 8700) {
        this.index = 2;
        this.currentindex = this.index;
      } else if (window.scrollY >= 8700) {
        this.index = 3;
        this.currentindex = this.index;
      }
      console.log(window.scrollY)
      console.log(document.documentElement.clientHeight)
    }
  },
  created() {
    // 监听滚动
    window.addEventListener("scroll", this.scr, false);
    this.offset = window.scrollY
  },
  beforeDestroy() {
    window.removeEventListener();
  },
};
</script>

<style scoped>
.detail {
  overflow: hidden;
}
.detail .ccc {
  width: 100%;
  position: fixed;
  z-index: 4;
  background: #fff;
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
.active span {
  padding-bottom: 0.23em;
  border-bottom: 0.13em solid #f20;
}
</style>