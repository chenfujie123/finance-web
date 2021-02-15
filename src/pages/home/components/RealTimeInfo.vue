<template>
    <div class="content">
      <el-card :body-style="{ padding: '10px' }" class="left">
         <div class="title-info"><span>资讯</span>研判</div>
         <div class="manager-research">经理研究</div>
         <ul class="research-list">
            <li>
               <div class="research-title">景顺长城量化对冲三个月定开</div>
               <span class="research-date">2021-02-05</span>
            </li>
            <li>
               <div class="research-title">景顺长城量化对冲三个月定开</div>
               <span class="research-date">2021-02-05</span>
            </li>
         </ul>
         <div class="share-research">股票资讯</div>
         <ul class="research-list">
            <li>
               <div class="research-title">景顺长城量化对冲三个月定开</div>
               <span class="research-date">2021-02-05</span>
            </li>
            <li>
               <div class="research-title">景顺长城量化对冲三个月定开</div>
               <span class="research-date">2021-02-05</span>
            </li>
         </ul>
      </el-card>
      <el-card :body-style="{ padding: '10px' }" class="right">
         <h2 class="intro">公司概况</h2>
         <hr class="dividing-line" noshade="noshade"/>
         <div class="company-intro">
            <p style="width:50%;" class="intro-content">
               景顺长城基金管理有限公司成立于2003年6月12日，
               是经中国证监会证监基金字[2003]76号文批准设立的国内首家中美合资的基金管理公司。
               景顺长城基金由景顺与长城证券联合开滦集团和实德集团共同发起设立，其中景顺和长城证券各持有49%的公司股份。
               公司注册资本1.3亿元人民币，总部设在深圳，在北京、上海、广州设有分公司。
            </p>
            <div id="intro-chart" style="width:50%; height: 100%">

            </div>
         </div>
         <h2 class="intro">发展战略</h2>
         <hr class="dividing-line" noshade="noshade"/>
         <div class="company-dev">
            <ul>
               <li>基金经理对投资结果负责</li>
               <li>注重中长期业绩，并给予足够长的考核期</li>
               <li>业绩、文化和品牌积淀形成人才吸引力</li>
            </ul>
            <ul>
               <li>严格遵守投资纪律，全力保证投资质量</li>
               <li>独特的投资回顾机制保证基金经理风格不飘移</li>
               <li>投研平等沟通，团队鼓励分享</li>
            </ul>
         </div>
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
      this.introEcharts()
   },
   methods:{
      introEcharts(){
         let myEcharts = this.$echarts.init(document.getElementById('intro-chart'))

         let options = {
            tooltip: {},
            title: {
               text: '股东结构'
            },
            series: [
               {
                  name: '股东', 
                  type: 'pie', 
                  radius: '55%', 
                  data: [
                     {value:235, name:'字节跳动'},
                     {value:274, name:'东兴证券'},
                     {value:310, name: '华福证券'},
                     {value: 335, name: '平安集团'},
                     {value: 400, name: '长城证券'}
                  ],
                  roseType: 'angle',
                  encode: {}
               }
            ]
         }

         myEcharts.setOption(options)
      },
   }


}
</script>
<style scoped>
.content {
   width: 1200px;
   margin-bottom: 10px;
   margin-left: auto;
   margin-right: auto;
   margin-top: 10px;
   height: 600px;
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

.manager-research {
   margin: 5px;
   height: 100px;
   background: url('../../../assets/market.jpg') no-repeat;
   padding: 10px;
   color: white;
   font-family: HeiSim;
   font-size: 16px;
   font-weight: bolder;
   cursor: pointer;
}

.research-list {
   font-size: 14px;
   font-family: SimSun;
   padding-left: 5px;
   padding-right: 5px;
}
.research-list li {
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
   cursor: pointer;
}
.research-list li:hover {
   color: red;
}

.research-title {
   width: 80%;
}
.research-date {
   width: 20%;
   text-align: right;
}

.share-research {
   margin: 5px;
   margin-top: 25px;
   height: 100px;
   background: url('../../../assets/guide.jpg') no-repeat;
   padding: 10px;
   color: white;
   font-family: HeiSim;
   font-size: 16px;
   font-weight: bolder;
   cursor: pointer;
}

.intro {
   font-family: SimSun;
   color: #034A78;
}

.dividing-line {
   size: 2px;
   color: #034A78;
   margin-top: 10px;
}

.company-intro {
   display: flex;
   height: 300px;
}

.intro-content {
   line-height: 30px;
   padding-top: 30px;
   text-indent: 24px;
   font-family: SimSun;
}

.company-dev {
   display: flex;
   height: 300px;
   justify-content: space-around;
}

.company-dev ul {
   margin-top: 20px;
}
.company-dev ul li {
   margin-top: 20px;
   font-family: SimSun;
}
</style>
