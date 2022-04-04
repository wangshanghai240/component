<template>
  <div class="login">
    <div class="username u">
      <div class="user c"><label for="username">用户名</label></div>
      <div class="one"><input type="text" id="username" placeholder='请输入用户名' max="12" min="6" v-model='form.username'></div>
    </div>
    <div class="pwd u">
      <div class="p c"><label for="pwd">密码</label></div>
      <div class="one"><input type="password" id="pwd" placeholder='请输入密码' max="12" min="6" v-model='form.pwd'></div>
    </div>
    <div class="btn" @click="login">
      <div class="button">登陆</div>
    </div>
    <div class="logup">
      <div class="zhuce">
        <router-link to='/logup'>还未注册?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
		// 用户登陆表单信息
		form:{
			username:'',
			pwd:''
		}
	};
  },
  methods: {
    login() {
		if(this.form.pwd === '' || this.form.username === ''){
			alert('用户名或者密码不能为空')
		}else{
			this.$router.push("./home");
		}
      
    },
  },
};
</script>

<style scoped>
/* FIXME：这里有一个问题需要解决：定位父级无法包裹子元素，导致按钮跑出去 */
.login {
  display:inline-block;
  width: 80%;
  position: absolute;
  top:40%;
  left:50%;
  transform:translate(-50%,-50%);
  border: 1px solid #d0d0d0;
  box-shadow: 0 0 4px 2px #d0d0d0;
  border-radius: 0.3em;
  box-sizing: border-box;
  padding: 0.2em 0.23em;
}
/* .login .username{
	position:absolute;
	top:0;
	left:50%;
	transform:translateX(-50%);
} */
.login .c {
  width: 22%;
  display: inline-block;
  padding: 0.12em 0.29em;
  margin-top: 0.24em;
  margin-right: 0;
}
.login .u {
  margin: 1em 0;
}
.login .one {
  display: inline-block;
}
.login .one input {
  outline: none;
  border: none;
  padding-bottom: 0.1em;
  border-bottom: 0.1em solid rgb(14, 5, 5);
}
.login .one input:focus {
  border-bottom-color: rgb(216, 45, 45);
}
.btn {
  /* display: inline-block; */
  width:30%;
  margin: 1.1em auto;
  text-align: center;
  /* position: absolute; */
  
  /* transform: translateX(-50%); */
}
.btn .button {
  border: 1px solid #335fbd;
  box-sizing: border-box;
  border-radius: 0.3em;
  padding: 0.23em 1.1em;
  background: #335fbd;
  color: #fff;
  box-shadow: 0 0 4px 2px #335fbd;
}
/* 注册 */
.login .logup{
  float:right;
}
.logup .c{
  display:inline-block
}
.logup .zhuce a{
  text-decoration:none;
  color:#f30;
  padding:.2em .8em;
}
</style>