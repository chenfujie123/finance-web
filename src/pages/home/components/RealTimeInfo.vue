<template>
    <div class="content">
      <el-card :body-style="{ padding: '10px' }" class="left">
         <div class="title-info"><span>资讯</span>研判</div>
      </el-card>
      <el-card :body-style="{ padding: '10px' }" class="right">

      </el-card>
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
}


}
</script>
<style scoped>
.content {
   width: 1200px;
   height: 600px;
   margin-left: auto;
   margin-right: auto;
   margin-top: 10px;
   margin-bottom: 10px;
}
.left {
   width: 400px;
   height: 100%;
   float: left;
}
.right {
   width: 775px;
   height: 100%;
   float: left;
   margin-left: 20px;
}
.title-info {
   font-size: 20px;
   font-weight: bold;
   font-family: 'Microsoft JhengHei';
}
.title-info span {
   font-family: NSimSun;
   color: red;
}
</style>
