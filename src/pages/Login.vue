<template>
    <div id="login">
        登录页
        <div v-html="google_code"></div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                google_code: '',
            }
        },
        created: function () {
            this.getAuthCode();
        },
        methods: {
            getAuthCode: function () {
                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                    console.log(response.body);
                    this.google_code = response.body;
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
