<template>
  <div class="swiper">
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="error">
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
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
</style>