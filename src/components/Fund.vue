<template>
    <div class="content">
        <el-row>
            <el-col :span="24">
                <el-carousel :interval="4000" type="card" height="200px">
                    <el-carousel-item v-for="item in 6" :key="item">
                        <div class="left">
                            <h3>产业趋势混合</h3>
                            <div class="fund-code">(060689)</div>
                            <hr class="dividing-line"/>
                            <div class="profit">近一年收益率</div>
                            <div class="profit-persent">50.10%</div>
                        </div>
                        <div class="right">
                            <ul>
                                <li>股票投资总监陈富杰，坚持以匠心精神严选个股</li>
                                <li>股票投资总监陈富杰，坚持以匠心精神严选个股股票投资总监陈富杰，坚持以匠心精神严选个股</li>
                                <li>股票投资总监陈富杰，坚持以匠心精神严选个股</li>
                                <li>股票投资总监陈富杰，坚持以匠心精神严选个股</li>
                            </ul>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24"><div class="alert-info">注：基金投资有风险，请投资者关注基金产品的风险等级，选择与您风险承受能力相匹配的产品。</div></el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table
                    :data="tableData"

                >
                   <el-table-column label="基金名称">
                       <template slot-scope="scope">
                           <i class="el-icon-star-on"></i>
                           <span>{{scope.row.name}}</span>
                       </template>
                   </el-table-column>
                   <el-table-column label="基金类型" prop="fundType"></el-table-column>
                   <el-table-column label="日涨跌">
                       <template slot-scope="scope">
                           <div v-if="scope.row.status == 1" style="color: red">{{scope.row.profitForDay}}</div>
                           <div v-if="scope.row.status == 0" style="color: #11DC85">{{scope.row.profitForDay}}</div>
                       </template>
                   </el-table-column>
                   <el-table-column label="最新净值" prop="newValue">

                   </el-table-column>
                   <el-table-column label="期间投资收益">
                       <template slot-scope="scope">
                           <div>成立以来</div>
                           <div>{{scope.row.profit}}</div>
                       </template>
                   </el-table-column>
                   <el-table-column label="净值日期" prop="valueDate">
                       
                   </el-table-column>
                   <el-table-column label="申购费" prop="cost">

                   </el-table-column>
                   <el-table-column label="购买">
                       <template slot-scope="scope">
                           <el-button @click="buyFund(scope.row.id)">购买</el-button>
                       </template>
                   </el-table-column>
                </el-table>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data() {
      return {
          tableData: [
              { 
                  name: "环保优势", fundType: "股票型", 
                  status: 1, profitForDay: "2.42%", 
                  newValue: 3.2654, profit: "234.7%", valueDate:"21-01-09",
                  cost: "0.1%", id: 1
              }
          ]
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
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    /* background-color: aqua; */
    overflow: hidden;
    padding-bottom: 60px;
}
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
} */
  
/* .el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #99a9bf;
} */
.el-carousel__item {
    background-color: white;
    border: 1px solid #DCD6D6;
    display: flex;
    justify-content: center;
    align-items: center;
}
.left {
    width: 45%;
    height: 180px;
    background-color: #E9EAEB;
}

.left > h3 {
    text-indent: 10px;
    margin-top: 10px;
    color: #046CAF;
    font-family: SimSun;
}

.fund-code {
    text-indent: 10px;
    margin-top: 10px;
    font-size: 16px;
    color: #046CAF;
    font-family: SimHei;
}

.dividing-line {
    border-top: 2px solid #046CAF;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
}

.profit {
    font-family: SimSun;
    font-size: 16px;
    text-indent: 10px;
    margin-top: 10px;
    color: #A6A8A9;
}

.profit-persent {
    font-family: SimHei;
    font-size: 35px;
    font-weight: bolder;
    color: red;
    text-align: center;
    margin-top: 20px;
}

.right {
    width: 50%;
    height: 180px;
}

.right ul {
    list-style-position: inside;
    font-family: SimSun;
    font-size: 13px;
    text-indent: 10px;
    margin-left: 5px;
}
.right ul li {
    margin-top: 10px;
    line-height: 17px;
}

.alert-info {
    font-family: SimSun;
    font-size: 14px;
    color: #A6A8A9;
}

</style>
