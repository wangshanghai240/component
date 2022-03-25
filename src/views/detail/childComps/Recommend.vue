<template>
  <div class="rec">
    <div class="see">
      <span class="to">看了又看</span>
    </div>
    <div class="img">
      <div class="list" v-for="(item, index) of recommend" :key="index">
        <div class="prod">
          <img :src='item.image' alt=""  />
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="discount one"><span>￥</span>{{ item.discountPrice }}</div>
        <div class="org one" v-if="item.discount ? true : false">
          {{ item.discount | originprice }}<span>折</span>
        </div>
        <div class="price one">{{ item.price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  methods: {
    loadimg(){
      let scrolltop = document.documentElement.scrollTop || document.body.scrollTop,
          clientheight = document.documentElement.clientHeight || document.body.clientHeight,
          saveY = window.scrollY
          if(saveY - scrolltop < clientheight){
            let img = document.getElementsByTagName('img')
            img.setAttribute('src',this.loadmoreimg)
          }
    }
  },
  data() {
    return {};
  },
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  filters: {
    originprice(price) {
      return price / 100;
    },
  },
};
</script>

<style scoped>
.rec{
  background:#f0f0f0;
}
.rec .see {
  text-align: center;
}
.rec .to {
  display: inline-block;
  color: #f40;
  position: relative;
  margin: 2em 0 0.7em 0;
}
/* 制作横线 */
.rec .to::before,
.rec .to::after {
  position: absolute;
  top: 50%;
  content: "";
  width: 130%;
  transform: translateY(-50%);
  height: 0.1em;
  background: #d0d0d0;
}
.rec .to::before {
  left: -170%;
}
.rec .to::after {
  right: -170%;
}
/* 图片 */
.list{
    width:45%;
    margin:.34em 2.5%;
    display:inline-block;
    border-radius:.34em;
    box-shadow:0 0 .23em .12em #d0d0d0;
}
.rec .list .prod{
  border-radius: 0.34em;
  overflow: hidden;
}
.rec .list img {
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
}
/* 详细信息 */
.list .one {
  display: inline-block;
  margin: 0.4em 0 0.2em 0;
}
.list .price {
  color: #b9b9b9;
  text-decoration: line-through;
  margin: 0 0 0 1.8em;
}
.list .discount {
  color: #f30;
  font-size: 1.5em;
}
.list .discount span{
  font-size:.6em;
}
.list .org {
  position:absolute;
  font-size:.87em;
  color:#f10;
}
.list .title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  margin-bottom:.3em;
  padding:.12em .22em;
}
</style>