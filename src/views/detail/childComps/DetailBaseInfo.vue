<template>
  <div class="baseinfo" v-if="Object.keys(goodsInfo).length !== 0">
    <div class="desc">{{ goodsInfo.title }}</div>
    <div class="price">
      <span :style='{background:goodsInfo.discountBgColor}'>{{ goodsInfo.discount }}</span>
      <span>{{ goodsInfo.price }}</span>
      <span>{{ goodsInfo.oldPrice }}</span>
    </div>
    <div class="columns">
      <div v-for="(item, index) in goodsInfo.columns" :key="index">
        {{ item }}
      </div>
    </div>
    <div
      class="services"
      v-for="index in goodsInfo.services.length - 1"
      :key="index"
    >
      <img :src="goodsInfo.services[index - 1].icon" alt="" />
      <div class="name">{{ goodsInfo.services[index - 1].name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.baseinfo .desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-top: 10px;
  padding: 0px 10px;
  font-size: 18px;
}
.price {
  margin: 14px 0;
}
.price span {
  margin: 0 4px;
}
.price :nth-child(1){
    padding:2px;
    border-radius:3px;
}
.price :nth-child(2) {
  color: #f40;
  font-size: 20px;
}
.price :nth-child(3) {
  text-decoration: line-through;
  color: #c9c9c9;
  margin-left: 6px;
}
.columns {
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
}
.columns div {
  flex: 1;
  color: #a9a9a9;
  font-size: 13px;
}
.services {
  display: inline-block;
  text-align: center;
  margin: 20px 5px;
}
.services img {
  width: 14px;
  vertical-align: middle;
}
.services .name {
  display: inline-block;
  font-size: 13px;
}
</style>