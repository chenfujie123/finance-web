<template>
    <div>
        <table class="fund-infor-table">
            <tr>
                <td class="table-key">基金全称</td>
                <td class="table-value">景顺长城新能源产业股票型证券投资基金</td>
                <td class="table-key">基金类型</td>
                <td class="table-value">股票型</td>
            </tr>
            <tr>
                <td class="table-key">基金简称</td>
                <td class="table-value">新能源产业股票</td>
                <td class="table-key">基金代码</td>
                <td class="table-value">011329</td>
            </tr>
            <tr>
                <td class="table-key">基金管理人</td>
                <td class="table-value">景顺长城基金管理公司</td>
                <td class="table-key">基金托管人</td>
                <td class="table-value">上海浦东发展银行股份有限公司</td>
            </tr>
            <tr>
                <td class="table-key">资产配置</td>
                <td class="table-value" colspan="3">本基金为股票型基金，基于投资范围的规定，本基金股票投资比例为80%-95%</td>
            </tr>
            <tr>
                <td class="table-key" style="height: 80px">风险特征</td>
                <td class="table-value" colspan="3" style="line-height: 20px; text-align: left; text-indent: 24px">
                    晨星风险评级：中，适合激进型、积极型、稳健型投资者。本基金为股票型基金，其预期风险和预期收益水平高于货币型基金、债券型基金和混合型基金。 本基金还可投资港股通标的的股票。除了需要承担与内地证券投资基金类似的市场波动风险等一般投资风险之外，本基金还面临港股通机制下因投资环境、投资标的、市场制度以及交易规则等差异带来的特有风险。
                </td>
            </tr>
            <tr>
                <td class="table-key">业绩比较基准</td>
                <td class="table-value" colspan="3">中证新能源指数收益率*75%+恒生能源行业指数收益率*10%+中证全债指数收益率*15%</td>
            </tr>
            <tr>
                <td class="table-key" style="height: 80px">投资目标</td>
                <td class="table-value" colspan="3" style="line-height: 20px; text-align: left; text-indent: 24px">
                    本基金通过自下而上的专业化研究分析，臻选优质新能源产业主题相关的上市公司。本基金在严格控制风险的前提下，追求超越业绩比较基准的投资回报，力争实现基金资产的长期稳定增值。
                </td>
            </tr>
            <tr>
                <td class="table-key" style="height: 80px">投资范围和限制</td>
                <td class="table-value" colspan="3" style="line-height: 20px; text-align: left; text-indent: 24px">
                    本基金的投资范围为具有良好流动性的金融工具，包括国内依法发行上市的股票(包含主板、中小板、创业板及其他经中国证监会核准或注册上市的股票及存托凭证)、港股通标的股票、股指期货、国债期货、股票期权、债券(包括国债、金融债、地方政府债、企业债、公司债、可转换债券、分离交易可转债的纯债部分、央行票据、中期票据、短期融资券、超短期融资券、公开发行的次级债券、政府支持机构债券、政府支持债券)、资产支持证券、债券回购、银行存款（包括协议存款、定期存款及其他银行存款）、同业存单、货币市场工具，以及法律法规或中国证监会允许基金投资的其他金融工具(但须符合中国证监会的相关规定)。 本基金可以根据法律法规的规定参与融资业务。 如法律法规或监管机构以后允许基金投资其他品种，基金管理人在履行适当程序后，可以将其纳入投资范围。
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'fundInfor',
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
    .fund-infor-table {
        width: 1000px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        border: 1px solid #EDEFF1;
        border-collapse:collapse;
    }

    tr, td {
        border: 1px solid #EDEFF1;
    }

    .table-key {
        width: 200px;
        height: 50px;
        text-align: center;
        background-color: #D8EAF9;
        font-family: SimSun;
        font-size: 14px;
        font-weight: bolder;
    }

    .table-value {
        width: 300px;
        padding: 24px;
        font-family: SimSun;
        font-size: 14px;
    }
</style>
