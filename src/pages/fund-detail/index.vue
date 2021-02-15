<template>
    <div class="content">
        <div class="fund-primary">
            <div class="primary-box">
                <div class="name-img">
                    <p class="share-type">股票型</p>
                    <p class="fund-name">景顺长城新能源产业股票型证券投资基金</p>
                    <p class="fund-code">基金代码：600398</p>
                </div>
                <div class="fund-operate">
                    <h2 class="fund-operate-name">景顺长城新能源产业股票型证券投资基金</h2>
                    <hr class="dividing-line" />
                    <el-row class="infor-key">
                        <el-col :span="8">最新净值</el-col>
                        <el-col :span="8">当日涨跌幅</el-col>
                        <el-col :span="8">净值日期：<span></span></el-col>
                    </el-row>
                    <el-row class="infor-value">
                        <el-col :span="6"><span>1.0000</span></el-col>
                        <el-col :span="2"><span>|</span></el-col>
                        <el-col :span="16"><span>--</span></el-col>
                    </el-row>
                    <el-row class="infor-key" style="margin-top: 20px">
                        <el-col :span="8" >成立日期：<span></span></el-col>
                        <el-col :span="16">基金规模：<span></span></el-col>
                    </el-row>
                    <el-row class="infor-key" style="margin-top: 20px">
                        <el-col :span="8">申购状态：<span>关闭</span></el-col>
                        <el-col :span="16">赎回状态：<span>关闭</span></el-col>
                    </el-row>
                    <el-row class="infor-key" style="margin-top: 20px">
                        <el-col :span="8">起购金额：<span>关闭</span></el-col>
                        <el-col :span="16">购买手续费：<span>关闭</span></el-col>
                    </el-row>
                    <el-row style="margin-top: 30px">
                        <el-col :span="8"><el-button type="primary" disabled>立即购买</el-button></el-col>
                        <el-col :span="16"><el-button type="success">立即开户</el-button></el-col>
                    </el-row>
                </div>
            </div>
        </div>
        <div class="section-title">
            <h2>基金概况</h2>
            <hr noshade="noshade"/>
        </div>
        <!-- 基金详情表格 -->
        <fund-infor></fund-infor>
        <div class="section-title">
            <h2>基金经理</h2>
            <hr noshade="noshade"/>
        </div>
        <fund-manager></fund-manager>
        <!-- 投资组合饼图 -->
        <div class="section-title">
            <h2>投资组合</h2>
            <hr noshade="noshade"/>
        </div>
        <fund-group></fund-group>
        <!-- 基金历史净值表 -->
        <div class="section-title">
            <h2>历史净值查询</h2>
            <hr noshade="noshade"/>
        </div>

        
    </div>
</template>
<script>
import fundInfor from './components/fund-infor.vue'
import fundManager from './components/fund-manager.vue'
import fundGroup from './components/fund-group.vue'
export default {
    components: {
        fundInfor,
        fundManager,
        fundGroup
    },
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
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
}

.fund-primary {
    display: flex;
    justify-content: center;
    height: 500px;
    align-items: center;
    background: url('./img/background.jpg') no-repeat;
}

.primary-box {
    display: flex;
    justify-content: center;
    height: 400px;
    align-items: center;
    background-color: white;
    width: 1000px;
}

.name-img {
    height: 300px;
    width: 250px;
    background: url('./img/fund2.jpg') no-repeat;
}

.fund-operate {
    height: 300px;
    width: 550px;
    margin-left: 100px;
}

.share-type {
    padding: 10px; 
    font-family: HeiSim; 
    font-weight: bolder;
    font-size: 18px;
}

.fund-name {
    margin-top: 70px;
    font-family: HeiSim;
    font-weight: bolder;
    font-size: 24px;
    color: white;
    text-align: center;
}

.fund-code {
    margin-top: 30px;
    font-family: SimSun;
    color: white;
    text-align: center;
}

.fund-operate-name {
    font-size: 20px;
    font-family: SimSun;
    color: #033C60;
}

.dividing-line {
    size: 2px;
    color: #033C60;
    margin-top: 10px;
}

.infor-key {
    font-size: 14px;
    font-family: SimSun;
    color: #033C60;
    margin-top: 10px;
}

.infor-value {
    font-size: 20px;
    font-family: SimSun;
    font-weight: bolder;
    color: #033C60;
    margin-top: 10px;
}

.section-title {
    width: 1000px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
}

.section-title h2{
    font-size: 20px;
    font-family: SimSun;
    font-weight: bolder;
    color: #033C60;

}

.section-title hr {
    size: 2px;
    color: #033C60;
    margin-top: 10px;
}


</style>
