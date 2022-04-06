<template>
  <div class="goodsinfo" v-if='isimg'>
      <div class="desc">
          <span class='c'>商品描述</span>
          <p>{{goodsinfo.desc}}</p>
      </div>
      <div class="showimg">
          <!-- 因为有两个数组所以需要两个v-for -->
          <div class="effect" v-for='item of goodsinfo.detailImage' :key='item.key'>
              <div class="eff c">{{item.key}}</div>
              <div class="list" v-for='(img, index) of item.list' :key='index'>
                  <img :src="img" alt="" @load='loadimg'>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data(){
      return {

      }
  },
  computed:{
      isimg(){
          return Object.keys(this.goodsinfo).length !== 0
      }
  },
  methods:{
      loadimg(){
          this.$emit('loadallimg')
      }
  }
};
</script>

<style scoped>
.goodsinfo{
    /* margin-bottom:7vh; */
}
.goodsinfo .c{
    display:inline-block;
    border-left:.35em solid rgba(221, 31, 31, 0.867);
    padding-left:.5em;
    margin:.7em 0 ;
}
.desc > p{
    margin:.4em .5em;
    border-bottom:.1em solid rgb(52, 180, 219);
    border-top:.1em solid rgb(52, 180, 219);
    padding:.3em 0;
}
.showimg .list img{
    width:100%;
    max-width:100%;
}
</style>