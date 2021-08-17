<template>
  <div class="detailswiper">
      <swiper class="item">
          <swiper-item v-for="(item, index) in detailswiper" :key="index">
              <img :src="item" alt="error">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
// import Swiper from "components/common/swiper/Swiper.vue"
// import SwiperItem from 'components/common/swiper/SwiperItem.vue'
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  components: { Swiper,SwiperItem },
    props:{
        detailswiper:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.item{
    height:300px;
    overflow:hidden;
}
.item img{
    width:100%;
    max-width:100%;
}
</style>