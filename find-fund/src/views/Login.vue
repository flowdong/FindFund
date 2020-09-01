<template>
    <div class="login">
        <p>无聊的登录页面</p>
        <el-button @click="back">返回</el-button>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({
        components: {},
    })
    export default class Login extends Vue {
        back() {
            this.$router.back()
        }
    }

</script>
<style lang="scss">
    .login {
        display: flex;
        height: 400px;
        justify-content: center;
        align-items: center;
      flex-direction: column;
    }
</style>
