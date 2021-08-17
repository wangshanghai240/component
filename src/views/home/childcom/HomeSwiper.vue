<template>
  <div class="swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a href="">
          <img :src="item.image" alt="error" @load="imgload" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  components: { Swiper, SwiperItem },
  name: "homveswiper",
  data() {
    return {
      isload: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgload() {
      // 因为只需要加载一次即可,不需要加载四次(图片有四张)
      if (!this.isload) {
        console.log("加载完毕");
        this.$emit("offset");
        this.isload = true
      }
    },
  },
};
</script>

<style>
</style>