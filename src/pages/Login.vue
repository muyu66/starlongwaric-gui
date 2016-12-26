<template>
    <div id="login">
        登录页
        <img v-bind:src="img_code" v-on:click="getAuthCode()"/>
    </div>
</template>

<script>
    export default {
        name: 'login',
        methods: {
            getAuthCode: function () {
                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                    this.img_code = window.URL.createObjectURL(response.body)
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
