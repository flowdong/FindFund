<template>
    <div class="home">
        <el-button @click="getm">test</el-button>
        <p>ppp</p>
        <el-button @click="themeRed">themeRed</el-button>
        <el-button @click="themeGreen">themeGreen</el-button>

    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import * as http from '../utils/httpService/http'
    import {switchTheme} from '@/main'

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        // eslint-disable-next-line constructor-super
        constructor() {
            super();
        }

        public getm() {
            http.mGet('home', {})
        }

        themeRed(){
            switchTheme('theme-red')
        }
        themeGreen(){
            switchTheme('theme-green')
        }
    }
</script>
