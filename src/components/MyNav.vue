<template>
    <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu-nav" mode="horizontal" @select="handleSelect" background-color="#F4F4F4">
            <el-menu-item index="1" @click="goto('/index')">首页</el-menu-item>
            <el-menu-item index="2">资讯</el-menu-item>
            <el-menu-item index="3">开放式股票基金</el-menu-item>
            <el-menu-item index="4">开户</el-menu-item>
            <el-button type="text" class="login register">注册</el-button>
            <el-button type="text" class="login"> </el-button>
            <el-button type="text" class="login">登录</el-button>
        </el-menu>
    </div>
</template>
<script>
export default {
   data() {
      return {
          
      }
   },
   activated() {
   },
 watch: {
},
created(){
},
mounted(){
},
methods:{
    login: function (params){
        return;
    },
    goto: function(path) {
        this.$router.replace(path);
    }
}


}
</script>

<style scoped>
.nav {
    width: 1200px;
    height: 60px;
    background-color: red;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
}
.el-menu-nav {
    /* width: 500px; */
    border-bottom: none;
}
.login {
    /* display: inline-block;
    height: 40px; */
    float: right;
    margin-top: 10px;
}
.register {
    margin-right: 10px;
}
</style>
