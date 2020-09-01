<template>
    <div class="home">
        <v-head></v-head>
        <div class="test">
            <el-row>
                <el-col :span="12" :offset="4">
                    <el-card shadow="hover">
                        {{getMockData}}
                    </el-card>
                </el-col>
                <el-col :span="8">
                    <el-button @click="getm">mock data test</el-button>
                </el-col>
            </el-row>

            <el-row>
                <el-col :span="8">
                    <el-button @click="fund">基金</el-button>
                </el-col>
            </el-row>
        </div>



    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import vHead from '@/components/Header.vue'
    import * as http from '../utils/httpService/http'
    import {switchTheme} from '@/main'
    import API from '../utils/API'

    @Component({
        components: {
            HelloWorld,
            vHead
        },
    })
    export default class Home extends Vue {
        public getMockData = ''

        constructor() {
            super();
        }

        public getm() {
            const param = {name: 'llll'}
            http.mGet(API.home, param).then((data: any) => {
                this.getMockData = data.data.home
            })
        }

        fund() {
            this.$router.push('/fund')
        }

        themeRed() {
            switchTheme('theme-red')
        }

        themeGreen() {
            switchTheme('theme-green')
        }
    }
</script>
<style lang="scss">
    .test {
        margin-top: 8px;
        .el-row{
            margin-top: 8px;

        }
    }
</style>
