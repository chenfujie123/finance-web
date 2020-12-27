<template>
    <div class="nav">
        <el-menu :default-active="activeIndex" class="el-menu-nav" mode="horizontal" @select="handleSelect" background-color="#F4F4F4">
            <el-menu-item index="1" @click="goto('/index')">首页</el-menu-item>
            <el-menu-item index="2">资讯</el-menu-item>
            <el-menu-item index="3">开放式股票基金</el-menu-item>
            <el-menu-item index="4" @click="goto('/authentication')">开户</el-menu-item>
            <el-button type="text" class="login register" @click="register" v-if="isLoginLocal">注册</el-button>
            <el-button type="text" class="login" v-if="isLoginLocal"> </el-button>
            <el-button type="text" class="login" @click="login" v-if="isLoginLocal">登录</el-button>
            <el-button type="text" class="login register" v-if="!isLoginLocal"><i class="el-icon-user-solid"></i>&nbsp;{{userNameLocal}}</el-button>
        </el-menu>
    </div>
</template>
<script>
import Qs from 'qs';
export default {
    props:['isLogin', 'userName'],
    data() {
        return {
            isLoginLocal: this.isLogin,
            userNameLocal: this.userName
        }
    },
    activated() {

    },
    watch: {
        isLogin(n, o) {
            this.isLoginLocal = n;
        },
        userName(n, o) {
            this.userNameLocal = n;
            console.log(n);
        }
    },
    async created(){
        if (sessionStorage.token_for_finance != null) {
            let data = Qs.stringify({token_for_finance: sessionStorage.token_for_finance})
            let resultData;
            await this.$http.post('/islogin', data)
                .then( function(res) {
                    console.log(res.data.status);
                    resultData = res.data;
                })
            if (resultData.status == 1){
                this.isLoginLocal = false;
                this.userNameLocal = resultData.userName;
            } else if (resultData.status == 0) {
                this.isLoginLocal = true;
            }
        }else {
            this.isLoginLocal = true;
        }
    },
    mounted(){
    },
    methods:{
        login: function (){
            this.$emit('showloginDialog', true);
        },
        goto: function(path) {
            this.$router.replace(path);
        },
        register: function() {
            this.$emit('showRegisterDialog', true);
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
