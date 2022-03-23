<template>
  <div class="goodlist">
    <GoodsListItem
      v-for="(items, index) of goods"
      :key="index"
      @click.native="showgoods"
      :goodsitem="items" 
    > 
      <!-- <a :href="item.link" slot="img"> -->
      <img :src="items.show.img" :alt="items.title" slot="img" />
      <!-- </a> -->
      <span class="txt" slot="txt">{{ items.title }}</span>
      <span class="oriprice" slot="oriprice">{{ items.orgPrice }}</span>
      <span class="price" slot="price">{{ items.price }}</span>
      <span class="shoucang" slot="shoucang">
        <img src="~assets/img/shoucang.svg" alt="" />{{ items.cfav }}
      </span>
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  data() {
    return {
      // item: {},
    };
  },
  // computed: {
  //   showimg() {
  //     return this.goods.show.img  || (this.goods.image);
  //   },
  // },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    showgoods() {
      console.log(this.goods);
      this.item = this.goods;
    },
  },
};
</script>

<style>
.goodlist {
  width: 100%;
}
</style>