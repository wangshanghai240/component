<template>
  <div class="shopinfo">
    <div class="shoplogo">
      <img :src="shopinfo.logo" alt="" />
      <span>{{ shopinfo.name }}</span>
    </div>
    <div class="message">
      <div class="shop aaa">
        <div class="shopcount ccc">
          <div>{{ shopinfo.sells | csells}}</div>
          <span>总销量</span>
        </div>
        <div class="shoprepect ccc">
          <div>{{ shopinfo.goodsCount }}</div>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="scores aaa">
        <div class="score" v-for="(item, index) in shopinfo.score" :key="index">
          <span>{{ item.name }}</span>
          <span>{{ item.score }}</span>
        </div>
      </div>
      <div class="btnstr">
        <div class="str"><span>进店逛逛</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopinfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  // 过滤器格式化数据
  filters:{
    csells(value){
      let s = (value/10000).toFixed(2) + '万'
      return s
    }
  }
};
</script>

<style scoped>
.shopinfo {
  overflow: hidden;
  margin: 10px 0;
  box-shadow: 0 0 2px 3px #e6e4e4;
  padding: 0 5px 0 5px;
}
.shopinfo .aaa {
  display: inline-block;
  color:#464545;
}
.shopinfo .message{
    margin-bottom:10px;
}
.shoplogo {
  margin: 30px 0;
}
.shoplogo img {
  width: 13%;
  vertical-align: middle;
  border-radius: 50%;
}
.shoplogo span {
  color: #464545;
  font-size: 15px;
  margin-left: 6px;
}
.shop {
  width: 50%;
}
.shop .ccc {
  width: 48%;
  display: inline-block;
  text-align: center;
  padding: 4px 0;
}
.shop .ccc div {
  margin-bottom: 10px;
}
.shop .ccc span {
  color: 15px;
}
.scores{
    width:50%;
}
.scores .score{
    padding:4px 0 4px 40px;
}
.scores .score span{
    padding:0 5px;
}
.btnstr{
  position:relative;
  top:.3em;
  left:50%;
  transform:translateX(-50%);
  display:inline-block;
  text-align:center;
  margin:.3em 0;
  border:1px solid #d0d0d0;
  border-radius:.3em;
  box-sizing: border-box;
  background:#f0f0f0;
  padding:.23em .4em;
}
</style>