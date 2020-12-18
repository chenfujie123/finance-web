<template>
  <div id="app">
    <HeadFor></HeadFor>
    <my-nav @showRegisterDialog="registerDialog"></my-nav>
    <router-view></router-view>
    <el-dialog title="注册" :visible.sync="dialogTableVisible" >
      <login></login>
    </el-dialog>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import HeadFor from './components/HeadFor.vue';
import MyNav from './components/MyNav.vue';
import Login from './components/Login.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HeadFor,
    MyNav,
    Login
  },
  methods: {
    registerDialog(data){
      this.dialogTableVisible = true;
    }
  },
  created(){
    this.$router.replace('/index');
    console.log(this.baseUrl());
  },
  data(){
    return {
      dialogTableVisible: false
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
