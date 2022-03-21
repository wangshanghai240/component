<template>
  <div class="comm">
    <div class="pin">
      <span>宝贝评价</span><span>({{ cominfo.cRate }})</span>
      <div class="more" @click="moreshop">
        <span>查看更多</span><span>></span>
      </div>
    </div>
    <div class="userall" v-for="item of cominfo.list" :key="item.created">
      <div class="user">
        <!-- 用户头像 -->
        <div class="avtor one"><img :src="item.user.avatar" alt="error" /></div>
        <div class="toge one">
          <!-- 用户id -->
          <div class="uid">{{ item.user.uname }}</div>
          <!-- 评论时间 -->
          <div class="time">{{ item.created | format }}</div>
        </div>
      </div>
      <!-- 用户评论内容 -->
      <div class="com">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
import formaTime from "utils/formatTime";
export default {
  props: {
    cominfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  filters: {
    // 格式化时间
    format(t) {
      formaTime(t);
    //   console.log(formaTime(t));
    },
  },
  methods: {
    moreshop() {},
  },
};
</script>

<style scoped>
.comm {
  /* margin:.2em; */
  padding: 0.4em;
  box-shadow: 0 -0.1em 0.11em 0.1em #d0d0d0;
}
.comm .pin {
  font-weight: 600;
}
.comm .pin .more {
  float: right;
  color: rgb(240, 20, 20);
}
.comm .pin .more::after {
  clear: both;
  content: "";
  display: block;
}
/* user */
.comm .user {
  margin: 0.34em 0;
}
.comm .userall {
  margin-top: 0.7em;
}
.comm .user .one {
  display: inline-block;
}
.comm .userall .user .avtor {
  width: 9%;
  border-radius: 50%;
  overflow: hidden;
}
.user .avtor img {
  width: 100%;
  max-width: 100;
  vertical-align: middle;
}
.user .one .uid {
  color: #adadad;
  font-size: 0.78em;
}
.user .one .time{
    font-size:.78em;
}
</style>