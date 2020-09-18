<template>
    <div class="con">
        <div class="header">fund</div>
        <div>
            <el-input v-model="fundInput"></el-input>
            <el-button @click="fund">find</el-button>

        </div>
        <div v-if="fundInfo">
            <div class="ll"> {{fundInfo.fund_name[0]}}-{{fundInfo.fund_id[0]}}</div>
            <div>
                <el-row>
                    <el-col :span="6" :offset="2">基金类型</el-col>
                    <el-col :span="16">{{fundInfo.type_names[0]}}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" :offset="2">托管人</el-col>
                    <el-col :span="16">{{fundInfo.fund_custodian[0]}}</el-col>
                </el-row>

                <el-row>
                    <el-col :span="6" :offset="2">最新份额</el-col>
                    <el-col :span="16">{{fundInfo.total_share[0]}}亿元</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" :offset="2">成立日期</el-col>
                    <el-col :span="16">{{fundInfo.foundation_date[0]}}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" :offset="2">基金公司
                    </el-col>
                    <el-col :span="16">{{fundInfo.org_name[0]}}</el-col>
                </el-row>
                <el-row>
                    <el-col :span="6" :offset="2">基金经理
                    </el-col>
                    <el-col :span="16">{{fundInfo.fund_manager[0]}}</el-col>
                </el-row>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import * as http from '../utils/httpService/http'
    import Constant from '../utils/constant'
    import API from '../utils/API'

    @Component({
        components: {},
    })
    export default class Fund extends Vue {
        public fund_id = ''
        public fund_name = ''
        public fundInfo: any = false
        public fundInput = ''

        constructor() {
            super();
        }

        touTiaoNews() {

            const params = {
                channel: '头条',
                num: '10',
                start: '0'
            }
            http.Get(API.JDBEWS, params).then(data => {
                console.log(data)
            })
        }

        fund() {
            if (/\D/g.test(this.fundInput)) {
                this.fund_name = this.fundInput
                this.fund_id = ''
            }else {
                this.fund_name = ''
                this.fund_id = this.fundInput
            }
            const params = {
                appkey: Constant.JDKEY,
                fund_id: this.fund_id,
                fund_name: this.fund_name
            }
            http.Get(API.FUND, params).then((data: any) => {
                console.log(data)
                this.fundInfo = data.result.data
                this.fund_id=data.result.data.fund_id
            })
        }
    }
</script>

<style lang="scss">
    .con {
        overflow: visible;

        .header {
            background-color: #cae8ca;
            border: 2px solid #97a8be;

        }

        .ll {
            position: -webkit-sticky;
            position: sticky;
            top: 0;
            padding: 5px;
            background-color: #cae8ca;
            border: 2px solid #4CAF50;
        }
    }

</style>
