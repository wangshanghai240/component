<template>
  <div class="list">
    <div class="c" v-for="item of cartlist" :key="item.count">
      <!-- 产品图片 -->
      <div class="img b">
        <img :src="item.img" alt="error" />
      </div>
      <!-- 产品描述 -->
      <div class="two">
        <div class="des">
          <span>{{ item.desc }}</span>
        </div>
        <!-- 产品价格 -->
        <div class="price a">￥{{ item.price }}</div>
        <!-- 个数 -->
        <div class="count a"><span>X</span> {{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CartList",
  data() {
    return {};
  },
  computed: mapState({
    cartlist: "cart",
  }),
  methods: {},
};
</script>

<style scoped>
.list{
    background:linear-gradient(to bottom, #dbe4e4, rgb(245, 248, 247));
    height:100vh;
    position:relative;
    /* BFC */
    overflow:auto;
}
.c {
  width: 94vw;
  border-radius: 0.5em;
  box-shadow: 0 0 0.1em 0.1em #d0d0d0;
  margin: .6em auto;
  background:#fff;
}
.c .b {
  display: inline-block;
}
.c .two{
    display:inline-block;
    width:65vw;
    margin:1.1em 0;
}
.c .two .a{
    display:inline-block;
}
.c .img {
  width: 20vw;
  margin: 0.9em 0.9em;
  border-radius: 0.4em;
  overflow: hidden;
  display: inline-block;
}
.c .img img {
  width: 100%;
  max-width: 100%;
  vertical-align: -4px;
}
.c .des{
    margin-bottom:.45em;
}
/* ...省略效果 */
.c .des span{
  overflow:hidden;
  display:-webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size:1.1em;
  font-weight: 600;
}
.c .two .price{
    font-size:1.5em;
    color:#f30;
}
.c .two .count{
    border:.05em solid rgb(111, 111, 111);
    border-radius:.32em;
    padding:.33em;
    float:right;
}
.two .count span{
    font-size:.5em;
}
</style>