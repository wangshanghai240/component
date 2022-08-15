<template>
  <div class="cate" ref="cate">
    <!-- 导航 -->
    <navbar>
      <div slot='left' class="left-back" @click='back'>
        <img src="~assets/img/back.svg" alt="error" class="image">
      </div>
      <div class="center" slot='center'>
        <span>分类</span>
      </div>
    </navbar>
  </div>
</template>

<script>
import navbar from 'components/common/NavBar.vue'
// import BScroll from 'better-scroll'
export default {
  components: { navbar },
  data() {
    return {
      // scroll: null
    }
  },
  // give up use the better-scrll
  // mounted() {
  //   this.scroll = new BScroll(this.$refs.cate, {
  //     probetype: 3,
  //     click: true,
  //     pullUpLoad: true
  //   })
  //   this.scroll.on('scroll', (position) => {
  //     console.log(position)
  //   })
  //   this.scroll.on('pullingUp', () => {
  //     console.log('上拉加载更多')
  //   })
  // },
  methods: {
    back() {
      this.$router.back()
    },
    // btn() {
    //   console.log('ccc')
    // }
  }
}
</script>

<style scoped>
/* 顶部tab */
.cate .navbar {
  background:#ffc0cb;
}
/* 返回按钮位置 */
.cate .left-back {
  display: flex;
  justify-content: center;
  align-items: center;
}
/* 返回按钮 */
.cate .left-back .image {
  width: 1.4em;
}
</style>