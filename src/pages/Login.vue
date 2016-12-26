<template>
    <div id="login">
        登录页
        <div v-html="rawHtml"></div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        created: function () {
            this.getAuthCode()
        },
        methods: {
            getAuthCode: function () {
                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                    this.rawHtml = response;
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
