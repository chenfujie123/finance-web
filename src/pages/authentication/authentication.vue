<template>
    <div class="content">
        <el-form label-width="80px" :model="form" class="e-form" :rules="rules" v-if="authenticationStatus == 1 || authenticationStatus == 4">
            <el-form-item label="姓名" prop="name" label-width="100px">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="number" label-width="100px">
                <el-input v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="身份证正面" prop="number" label-width="100px">
            </el-form-item>
            <el-upload
                class="avatar-uploader"
                action="/api/uploadimg"
                :headers="myHeadersP"
                :show-file-list="false"
                :on-success="handleAvatarSuccessP"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrlP" :src="imageUrlP" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-form-item label="身份证反面" prop="number" label-width="100px">
            </el-form-item>
            <el-upload
                class="avatar-uploader"
                action="/api/uploadimg"
                :headers="myHeadersN"
                :show-file-list="false"
                :on-success="handleAvatarSuccessN"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrlN" :src="imageUrlN" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-form-item style="margin-top: 40px; margin-left: 40px;">
                <el-button type="primary" @click="submitForm">提交</el-button>
            </el-form-item>
        </el-form>
        <div class="ing" v-else-if="authenticationStatus == 2">
            <i class="iconfontdaishenhe icondaishenhe icon-for-ing"></i>
            <p class="shen-he-text">我们将在1~2个工作日内进行审核，请耐心等待</p>
        </div>
        <div class="ing" v-else-if="authenticationStatus == 3">
            <i class="iconfontshenhetongguo iconshenhetongguo icon-for-ing"></i>
            <p class="shen-he-text">恭喜！审核通过！</p>
        </div>
    </div>
</template>
<script>
import Qs from 'qs';
export default {
   data() {
      return {
          imageUrlP:"",
          imageUrlN:"",
          form: {
              
          },
          authenticationStatus: null,
          rules: {
              name:[
                  {required: true, message:"请输入姓名", trigger: "blur"},
                  {min: 2, max: 5, message:"长度在2-5个字之间", trigger: "blur"}
              ],
              number:[
                  {required: true, message:"请输入身份证号", trigger: "blur"},
                  {min: 18, max: 5, message:"请输入18位数的身份证号"}
              ]
          },
          myHeadersP:{
              Token: sessionStorage.token_for_finance,
              Type: 1
          },
          myHeadersN:{
              Token: sessionStorage.token_for_finance,
              Type: 0
          }
      }
   },
   activated() {
   },
    watch: {
    },
    created(){
    },
    async mounted(){
        // this.extrDataForP = Qs.stringify(this.extrDataForP);
        console.log(this.$route.params.isLogin);
        var resultData;
        await this.$http.post('/realnamestatus').then(function (res) {
            resultData = res.data;
        })
        this.authenticationStatus = resultData.status;
        console.log(this.authenticationStatus);
    },
    methods:{
        //上传身份证正面的回调
        handleAvatarSuccessP(res, file) {
            this.imageUrlP = res.img_src;
        },
        //上传身份证反面的回调
        handleAvatarSuccessN(res, file) {
            this.imageUrlN = res.img_src;
        },
        //上传身份证图片前的处理函数
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG && !isPNG) {
                this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
                console.log(file.type);
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return (isJPG || isPNG) && isLt2M;
        },
        //提交表单信息
        submitForm: async function(){
            if (!this.imageUrlP || !this.imageUrlN) {
                this.$message.error('请上传身份证');
                return;
            }
            if (!this.form.name || !this.form.number) {
                this.$message.error('请完善信息');
            }
            var data = Qs.stringify(this.form);
            var resultData;
            await this.$http.post('/realnameform', data).then(function(res){
                resultData = res.data;
            });
            if (resultData.status == 1) {
                this.$message.success('提交成功');
                this.authenticationStatus = 2;
            }
        }

    }


}
</script>
<style scoped>
@import "../../assets/font/daishenhe/iconfont.css";
@import "../../assets/font/shenhetongguo/iconfont.css";
.content {
    width: 1200px;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    /* background-color: aqua; */
    overflow: hidden;
    padding-bottom: 60px;
}
.e-form {
    /* background-color: red; */
    width: 400px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
}
.avatar-uploader {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 178px;
    margin-left: auto;
    margin-right: auto;
}
.avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
.ing {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}
.icon-for-ing {
    font-size: 80px;
}
.shen-he-text {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    margin-top: 20px;
}
</style>

