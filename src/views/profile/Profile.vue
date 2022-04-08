<template>
  <div class="profile">
    <!-- 用户 -->
    <div class="imag">
      <div class="user c">
        <img src="~assets/img/top.png" alt="" />
      </div>
      <div class="uid c">
        <span>拖拉机</span>
      </div>

      <div class="five">
        <li>
          <img src="~assets/img/profile/shoucang.svg" alt="" /><span>收藏</span>
        </li>
        <li>
          <img src="~assets/img/profile/dingyuedianpu.svg" alt="" /><span
            >订阅店铺</span
          >
        </li>
        <li>
          <img src="~assets/img/profile/zuji.svg" alt="" /><span>足迹</span>
        </li>
        <li>
          <img src="~assets/img/profile/qianbao.svg" alt="" /><span>零钱</span
          ><span></span>
        </li>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="my">
      <span class="or">我的订单</span>
      <div class="prof">
        <li>
          <img src="~assets/img/profile/daifukuan.svg" alt="" /><span
            >待付款</span
          >
        </li>
        <li>
          <img src="~assets/img/profile/daifahuo.svg" alt="" /><span
            >待发货</span
          >
        </li>
        <li>
          <img src="~assets/img/profile/daishouhuo.svg" alt="" /><span
            >待收货</span
          >
        </li>
        <li>
          <img src="~assets/img/profile/daipingjia.svg" alt="" /><span
            >待评论</span
          >
        </li>
        <li>
          <img src="~assets/img/profile/tuikuan.svg" alt="" /><span
            >退款/售后</span
          >
        </li>
      </div>
    </div>
    <div class="more">
      <li>
        <img src="~assets/img/profile/tianmaoshiyongfuwu.svg" alt="" /><span
          >试用领取</span
        >
      </li>
      <li>
        <img src="~assets/img/profile/tiantianlingqian.svg" alt="" /><span
          >天天领钱</span
        >
      </li>
      <li>
        <img src="~assets/img/profile/dianpuhuiyuan.svg" alt="" /><span
          >店铺会员</span
        >
      </li>
      <li>
        <img src="~assets/img/profile/icon-lingjuanzhongxin.svg" alt="" /><span
          >领卷中心</span
        >
      </li>
      <li>
        <img src="~assets/img/profile/shouhuodizhi.svg" alt="" /><span
          >收货地址</span
        >
      </li>
      <li>
        <img src="~assets/img/profile/kefu.svg" alt="" /><span>客服</span>
      </li>
      <li>
        <img src="~assets/img/profile/kuaidifei.svg" alt="" /><span
          >我的快递</span
        >
      </li>
      <li>
        <img src="~assets/img/profile/wodepingjia.svg" alt="" /><span
          >我的评价</span
        >
      </li>
    </div>
    <div class="logout" @click="lg">
      <span>退出登陆</span>
    </div>
  </div>
</template>

<script>
// import { ADD } from 'store/mutations-types'
// import login from 'views/login/Login.vue'
export default {
  // components:{login},
  name: "profile",
  data() {
    return {};
  },

  methods: {
    lg() {
      sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.profile {
  /* background:linear-grand(#d1e1e2); */
  height: 100vh;
  background: linear-gradient(to bottom, #dbe4e4, rgb(245, 248, 247));
}
.imag {
  width: 94vw;
  margin: auto;
  /* border-radius:1.1em; */
  /* background:#d1e1e2; */
}
.imag .c {
  display: inline-block;
}
.imag .user {
  border-radius: 50%;
  width: 20vw;
  box-sizing: border-box;
  margin: 0.6em;
}
.imag .user img {
  width: 100%;
  max-width: 100%;
  vertical-align: bottom;
}
.imag .five {
  display: flex;
  justify-content: space-evenly;
}
.imag .five li {
  padding: 0;
  list-style: none;
  margin: 0 0 0.5em 0;
}
.imag li img {
  display: block;
  flex: 1;
  width: 8vw;
  margin: 0.3em auto;
}
.imag li span {
  color: #555555;
  font-size: 0.86em;
}
/* 退出登陆 */
.logout {
  position:fixed;
  left:50%;
  bottom:10%;
  transform:translateX(-50%);
  margin: 0.4em 0;
}
.logout span {
  padding: 0.4em 1.1em;
  background: #f50;
  color: #fff;
  border-radius: 0.9em;
  box-shadow:0 0 .16em .1em #f50;
}
/* 订单 */
.my {
  width: 95vw;
  background: #fff;
  border-radius: 1.1em;
  overflow: hidden;
  margin: auto;
}
.my .or {
  display: block;
  margin: 1.2em 0.23em;
}
.my .prof {
  display: flex;
  justify-content: space-evenly;
}
.my .prof li {
  list-style: none;
  flex: 1;
  text-align: center;
  margin: 0.9em 0;
}
.prof li img {
  width: 7vw;
  margin: auto;
  display: block;
}
.prof li span {
  font-size: 0.86em;
  margin: 0.8em 0;
}
/* other */
.more {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* 换行 */
  flex-wrap: wrap;
  border-radius: 1.1em;
  background: #fff;
  width: 94vw;
  margin: 1em auto;
}
.more li {
  width: 20vw;
  flex-grow: 1;
  list-style: none;
  /* padding:.9em; */
  text-align: center;
  margin: 0.4em 0;
}
.more li img {
  display: block;
  width: 8vw;
  color: #f40;
  margin: 0.4em auto;
}
.more li span {
  font-size: 0.86em;
}
</style>