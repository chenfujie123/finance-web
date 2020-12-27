<template>
  <div id="app">
    <HeadFor></HeadFor>
    <my-nav @showRegisterDialog="registerDialog" @showloginDialog="loginDialog" v-bind="loginData"></my-nav>
    <router-view></router-view>
    <el-dialog title="注册" :visible.sync="dialogTableVisible" >
      <login @changeLogin="changeForLogin"></login>
    </el-dialog>
    <el-dialog title="登录" :visible.sync="dialogloginVisible" >
      <for-login @changeLogin="changeForLogin"></for-login>
    </el-dialog>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HeadFor from './components/HeadFor.vue';
import MyNav from './components/MyNav.vue';
import Login from './components/Login.vue';
import ForLogin from './components/ForLogin.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeadFor,
    MyNav,
    Login,
    ForLogin
  },
  methods: {
    registerDialog(data){
      this.dialogTableVisible = true;
    },
    loginDialog(data){
      this.dialogloginVisible = true;
    },
    changeForLogin(data) {
      this.loginData = data;
      this.dialogTableVisible = false;
      this.dialogloginVisible = false;
    }
  },
  created(){
    this.$router.replace('/index');
    console.log(this.baseUrl());
  },
  data(){
    return {
      dialogTableVisible: false,
      dialogloginVisible: false,
      loginData: {isLogin: true, userName: ''},
    }
  }
}
</script>

<style>
@import './assets/css/font.css';
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


</style>
