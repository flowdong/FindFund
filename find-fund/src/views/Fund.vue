<template>
    <div>
        fund
        <el-button @click="fund">sss</el-button>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import * as http from '../utils/httpService/http'
    import Constant from '../utils/constant'
    import API from '../utils/API'

    @Component({
        components: {},
    })
    export default class Fund extends Vue {
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
            const params = {
                appkey: Constant.JDKEY,
                fund_id: '000009',
                fund_name: ''
            }
            http.Get(API.FUND,params).then(data => {

            })
        }
    }
</script>

<style scoped>

</style>
