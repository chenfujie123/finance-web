<template>
    <div class="play-img">
        <el-carousel indicator-position="inside">
            <el-carousel-item>
                <img src="../img/1.jpg" />
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/2.jpg" />
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/3.jpg" />
            </el-carousel-item>
            <el-carousel-item>
                <img src="../img/4.jpg" />
            </el-carousel-item>
        </el-carousel>
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
.play-img {
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}
/* img {
    width: 1200px;
} */
</style>
