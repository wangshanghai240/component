<template>
  <div class="goodlist">
      <GoodsListItem v-for="(item, index) in goods" :key="index">
          <a :href="item.link" slot="img">
              <img :src="item.show.img" :alt="item.title">
          </a> 
          <span class="txt" slot="txt">{{item.title}}</span>
          <span class="oriprice" slot="oriprice">{{item.orgPrice}}</span>
          <span class="price" slot="price">{{item.price}}</span>
          <span class="shoucang" slot="shoucang"><img src="~assets/img/shoucang.svg" alt="">{{item.cfav}}</span>
      </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
    name:'GoodsList',
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
    .goodlist{
        width:100%;
    }
</style>