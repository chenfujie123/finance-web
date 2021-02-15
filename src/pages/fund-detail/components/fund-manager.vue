<template>
    <div>
        <div class="now">✦ 现任基金经理</div>
        <div class="now-manager">
            <img src="../img/fund.jpg" alt="" class="manager-img">
            <div class="manager-infor">
                <p class="manager-name">陈富杰 <span>先生</span></p>
                <p class="manager-graduate">理学学士、经济学学士</p>
                <p class="manager-intro">曾担任上海常春藤衍生投资公司高级分析师。2010年11月加入本公司，担任研究部研究员，自2014年10月起担任股票投资部基金经理，现任股票投资部投资副总监兼基金经理。具有11年证券、基金行业从业经验。</p>
            </div>
        </div>
        <div class="history-manager">本基金历任经理</div>
        <el-table
            :data="tableData"
            style="width: 1000px; margin-left: auto; margin-right: auto;"
            align="center"
        >
            <el-table-column
                prop="beginDate"
                label="起始日期"
                width="250">
            </el-table-column>
            <el-table-column
                prop="endDate"
                label="截止日期"
                width="250">
            </el-table-column>
            <el-table-column
                prop="manager"
                label="基金经理"
                width="250"
            >
            </el-table-column>
            <el-table-column
                prop="day"
                label="任职天数"
                width="250"
            >
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'fundManager',
    data() {
        return {
            tableData: [],
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
    .now {
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        font-family: SimSun;
        color: red;
        font-weight: bolder;
    }

    .now-manager {
        display: flex;
        justify-content: space-between;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
    }

    .manager-img {
        height: 250px;
        width: 200px;
    }

    .manager-infor {
        height: 250px;
        width: 750px;
    }

    .manager-name {
        font-family: HeiSim;
        font-size: 14px;
        font-weight: bolder;
    }

    .manager-graduate {
        font-family: SimSun;
        font-size: 14px;
        margin-top: 10px;
    }

    .manager-intro {
        font-family: SimSun;
        font-size: 14px;
        margin-top: 10px;
        line-height: 20px;
    }

    .history-manager {
        width: 1000px;
        height: 50px;
        text-indent: 16px;
        line-height: 50px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
        background-color: #D8EAF9;
        font-family: SimSun;
        font-weight: bolder;
    }
</style>
