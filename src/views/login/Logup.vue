<template>
  <div class="logup">
    <div class='username'>
      <div class="user c">
        <label for="userid">用户名</label>
      </div>
      <div id="userid">
        <input type="text" placeholder="请输入用户名" />
      </div>
    </div>
    <div class='password'>
      <div class="pwd c">
        <label for="pwd">密码</label>
      </div>
      <div id="password">
        <input type="password" placeholder="请输入密码" />
      </div>
    </div>
    <div class="zhuce" @click.prevent='reach'>
      <span >注册</span>
    </div>
  </div>
</template>

<script>
  export default{
      name:'Logup',
      components:{},
      data(){
          return {}
      },
      methdos:{
          reach(){
              this.$router.path({
                  path:'/home',
                  params:{}
              })
          }
      }
  }
</script>

<style scoped>
.logup {
  border: 1px solid #d0d0d0;
  box-shadow:0 0 .3em .2em #d0d0d0;
  width: 80vw;
  border-radius: 0.34em;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%);
  font-size: 1.1em;
  box-sizing:border-box;
}
/* 输入框 */
.logup #userid,
.logup #password {
  display: inline-block;
  
}
.logup #userid input, #password input {
  outline: none;
  border:none;
  border-bottom:.1em solid #aaa;
  padding:.34em 0;
  background:none;
  width:50vw;
}
#userid input:focus, #password input:focus{
  border-bottom:.1em solid rgb(26, 26, 208);
}
.logup #userid input::-webkit-input-placeholder, #password input::-webkit-input-placeholder {
  color: #d0d0d0;
  font-size: 0.9em;
}
.logup .username{
    margin:.67em 0;
}
.logup .c {
  display: inline-block;
  width:19vw;
  margin:0 .33em;
}
/*  */
.zhuce{
    /* display:inline-block; */
    margin:1.3em 0 1.2em 0;
    text-align:center;
}
.zhuce span{
    padding:.23em .45em;
    border-radius:.3em;
    color:#fff;
    background:#f40;
}
</style>