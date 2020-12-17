<template>
    <div class="head">
        <div class="logo">啄木鸟基金</div>
        <div class="search">
          <el-input placeholder="请输入内容" v-model="input" >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input> 
          <div class="tip">股票关键词词云图</div>
        </div>
        <el-card class="box-card" :body-style="{ padding: '0px' }">
          <div class="phone">400-820-8820</div>
          <div class="tip-phone"><span class="iconfontdianhua icondianhua"> &nbsp;</span>预约认购、资讯、申述</div>
        </el-card>
    </div>
</template>
<script>
export default {
   name: 'HeadFor',
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
}


}
</script>
<style scoped>
@import '../assets/font/dianhua/iconfont.css';
.head {
  width: 1200px;
  height: 80px;
  margin: 0 auto;
  /* background-color: thistle; */
}
.logo {
  width: 300px;
  height: 80px;
  letter-spacing: 1px;
  display: inline-block;
  line-height: 80px;
  font-family: KaiTi;
  font-weight: bold;
  font-size: 30px;
  color: red;
  float: left;
}
.search {
  width: 600px;
  height: 60px;
  display: inline-block;
  float: left;
  padding-top: 20px;
  /* background-color: tan; */
}
.el-input {
  width: 600px;
}
.search .tip {
  font-family: NSimSun;
  font-size: 14px;
  color: #989595;
  /* background-color: red; */
  margin-top: 4px;
}
.box-card {
  height: 60px;
  width: 200px;
  display: inline-block;
  float: left;
  margin: 10px 40px;

}
.phone {
  height: 40px;
  line-height: 40px;
  color: red;
  font-size: 24px;
  font-weight: bold;
  font-family: SimHei;
  /* background-color:teal */
}
.tip-phone {
  height: 20px;
  font-size: 16px;
  font-family: NSimSun;
  /* background-color: red; */
}
</style>
