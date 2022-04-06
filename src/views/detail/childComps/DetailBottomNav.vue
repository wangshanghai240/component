<template>
  <div class="bottom-nav">
    <div class="bar-left">
      <div class="shop c">
        <i class="shops icon"><img src="~assets/img/bottom-nav/dianpu.png" alt=""></i>
        <span class="dian">店铺</span>
      </div>
      <div class="kef c">
        <i class="kefu icon"><img src="~assets/img/bottom-nav/kefu.png" alt=""></i>
        <span class="ke">客服</span>
      </div>
      <div class="collection c">
        <i class="shou icon"><img src="~assets/img/bottom-nav/shoucang.png" alt=""></i>
        <span class="shou">收藏</span>
      </div>
    </div>
    <div class="bar-right">
        <div class="cart c">加入购物车</div>
        <div class="buy c" @click='buy'>购买</div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {}
    },
    methods:{
        buy(){
            alert('现在还不能购买哟！')
        }
    }
};
</script>

<style scoped>
.bottom-nav {
  height:7vh;
  position: fixed;
  bottom:0;
  /* z-index:999; */
  background:#f40;
  right:0;
  left:0;
  display:flex;
  justify-content: space-around;
  align-items: center;
  background:#fff;
  border-top:.09em solid #e0e0e0;
}
/* bar-left */
.bottom-nav .bar-left{
    flex:1;
    display:flex;
    justify-content: space-evenly;
    align-items: flex-end;
}
.bottom-nav .c span{
    font-size:.75em;
    color:rgb(119, 119, 119);
    margin-bottom:1.4em;
}
/* 引入图标 */
.bar-left .c .icon img{
    display:block;
    width:24px;
    max-width:100%;
    margin-bottom:.23em;
}
/* bar-right */
.bar-right{
    display:flex;
    flex:1;
    justify-content: space-evenly;
    align-items:center;
    margin-right:.7em;
}
.bar-right .c{
    width:48%;
    padding:.86em .7em; 
    font-size:.88em;
    color:#fff;
    text-align:center;
}
.bar-right .cart{
    border-top-left-radius: 1.5em;
    border-bottom-left-radius: 1.5em;
    /* 渐变色 */
    background:linear-gradient(to right,rgb(216, 128, 11),rgb(215, 70, 60));
}
.bar-right .buy{
    border-top-right-radius:1.5em;
    border-bottom-right-radius:1.5em;
    background:linear-gradient(to right,rgb(216, 63, 43),#f30);
}
</style>