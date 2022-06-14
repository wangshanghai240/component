<template>
  <div class="toast">
      <div class="title">
          <slot name='title'>提示</slot>
      </div>
      <div class="con">
          <slot name='content'></slot>
      </div>
      <div class="btn">
          <slot name='cancel'>取消</slot>
          <slot name='confirm'>确认</slot>
      </div>
  </div>
</template>

<script setup>
export default {
  prps: {
      title:{
          type:String,
          default:''
      },
      content:{
          type:String,
          default:""
      },
      confirmbutton:{

      }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.toast{
    position:fixed;
    width:60vw;
    height:14vh;
    left:0;
    right:0;
    top:0;
    bottom:0;
    margin:auto;
    border:.09em solid #d0d0d0;
    border-radius:.3em;
    background:#fff;
    box-shadow:0 0 .19em .19em #d0d0d0;
}
.toast .title{
    margin:.23em 0 0 .23em;
}
.toast .con{
    margin:1.4em .8em;
}
.toast .btn{
    /* border:1px solid black; */
    margin-bottom:.23em;
}
.toast .btn .one{
    border:none;
    float:right;
    border-radius:.23em;
    padding:.22em .4em;
    font-size:.89em;
}
.toast .btn .can{
    margin-right:.3em;
}
.toast .btn .com{
    margin-right:.34em;
    background:rgba(37, 49, 180, 0.752);
    color:#fff;
}
</style>