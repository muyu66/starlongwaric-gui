<template>
    <div id="login" v-html="google_code">
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
//        render: function () {
//            this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
//                console.log(response);
//                this.google_code = response.body
//            }, (response) => {
//            });
//        },
        created: function () {
            this.getAuthCode();
        },
        methods: {
            getAuthCode: function () {
                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                    console.log(response);
                    this.google_code = response.body
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
