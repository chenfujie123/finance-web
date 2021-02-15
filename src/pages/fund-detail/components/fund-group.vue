<template>
    <div>
        <div class="content">
            <div id="asset-allocation" class="pie"></div>
            <div id="industry-allocation" class="pie"></div>
            <div id="shares-allocation" class="pie"></div>
            <div id="bond-allocation" class="pie"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'fundGroup',
    data() {
        return {
            assetTitle: {
                text: '资产配置',
                textStyle: {
                    fontWeight: 'normal',
                    fontFamily: 'SimSun',
                    fontSize: 16
                },
            },
            assetSeries: [
                {
                    name: '资产配置', 
                    type: 'pie', 
                    radius: '55%', 
                    data: [
                        {value:235, name:'股票'},
                        {value:274, name:'债券'},
                        {value:310, name: '现金'},
                        {value: 335, name: '基金'},
                        {value: 400, name: '权证'}
                    ],
                    roseType: 'angle',
                    encode: {}
                }
            ],
            industyTitle: {
                text: '行业配置',
                textStyle: {
                    fontWeight: 'normal',
                    fontFamily: 'SimSun',
                    fontSize: 16
                },
            },
            industrySeries: [
                {
                    name: '行业配置', 
                    type: 'pie', 
                    radius: '55%', 
                    data: [
                        {value:235, name:'制造业'},
                        {value:274, name:'租赁和商...'},
                        {value:310, name: '卫生和...'},
                        {value: 335, name: '信息传输...'},
                        {value: 400, name: '房地产业'}
                    ],
                    roseType: 'angle',
                    encode: {}
                }
            ],
            sharesTitle: {
                text: '股票配置',
                textStyle: {
                    fontWeight: 'normal',
                    fontFamily: 'SimSun',
                    fontSize: 16
                },
            },
            sharesSeries: [
                {
                    name: '股票配置', 
                    type: 'pie', 
                    radius: '55%', 
                    data: [
                        {value:235, name:'美邦服饰'},
                        {value:274, name:'贵州茅台'},
                        {value:310, name: '中国长城'},
                        {value: 335, name: '创维数字'},
                        {value: 400, name: '华统股份'}
                    ],
                    roseType: 'angle',
                    encode: {}
                }
            ],
            bondTitle: {
                text: '债券配置',
                textStyle: {
                    fontWeight: 'normal',
                    fontFamily: 'SimSun',
                    fontSize: 16
                },
            },
            bondSeries: [
                {
                    name: '债券配置', 
                    type: 'pie', 
                    radius: '55%', 
                    data: [
                        {value:235, name:'美邦服饰'},
                        {value:274, name:'贵州茅台'},
                        {value:310, name: '中国长城'},
                        {value: 335, name: '创维数字'},
                        {value: 400, name: '华统股份'}
                    ],
                    roseType: 'angle',
                    encode: {}
                }
            ],
            legend: {
                orient: 'vertical',
                
                x: 'right',
                y: 'center',
                widht: '10px',
                textStyle: {
                    width: 1,
                    overflow: 'truncate',
                    ellipsis: '...'
                }
            }

        }
    },
    activated() {

    },
    watch: {

    },
    created(){

    },
    mounted(){
        this.assetPie()
        this.industyPie()
        this.sharesPie()
        this.bondPie()
    },
    methods:{
        assetPie() {
            let myEcharts = this.$echarts.init(document.getElementById('asset-allocation'))

            let options = {
                tooltip: {},
                legend: this.legend,
                title: this.assetTitle,
                series: this.assetSeries,
            }

            myEcharts.setOption(options)
        },
        industyPie() {
            let myEcharts = this.$echarts.init(document.getElementById('industry-allocation'))

            let options = {
                tooltip: {},
                legend: this.legend,
                title: this.industyTitle,
                series: this.industrySeries,
            }

            myEcharts.setOption(options)
        },
        sharesPie() {
            let myEcharts = this.$echarts.init(document.getElementById('shares-allocation'))

            let options = {
                tooltip: {},
                legend: this.legend,
                title: this.sharesTitle,
                series: this.sharesSeries,
            }

            myEcharts.setOption(options)
        },
        bondPie() {
            let myEcharts = this.$echarts.init(document.getElementById('bond-allocation'))

            let options = {
                tooltip: {},
                legend: this.legend,
                title: this.bondTitle,
                series: this.bondSeries,
            }

            myEcharts.setOption(options)
        },
    }


}
</script>
<style scoped>
    .content {
        width: 1000px;
        height: 500px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .pie {
        width: 500px;
        height: 250px;
    }
</style>
