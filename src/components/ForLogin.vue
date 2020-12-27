<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.passwd" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button >重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import Qs from 'qs';
export default {
   data() {
      return {
          form:{}
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
        submitForm: async function(){
            var data = Qs.stringify(this.form);
            let resultData;
            await this.$http.post('/forlogin', data)
                .then( function(res){
                    resultData = res.data
                })
            if (resultData.status == 1) {
                this.$message({
                    type:'success',
                    message: '登录成功',
                    duration: 1000
                });
                sessionStorage.token_for_finance = resultData.token_for_finance;
                this.$emit("changeLogin", {isLogin:false, userName:this.form.name});
            }
        }
    }


}
</script>
<style>
</style>
