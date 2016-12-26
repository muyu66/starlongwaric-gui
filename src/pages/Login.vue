<template>
    <div id="login">
        登录页
        <div>{{ getAuthCode() }}</div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        methods: {
            getAuthCode: function () {
                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                    return response;
                }, (response) => {
                });
            }
        },
    }
</script>

<style>
    #login {

    }
</style>
