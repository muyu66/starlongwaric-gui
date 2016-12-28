<template>
    <div id="login" v-html="google_code">
        <aaaa></aaaa>
    </div>
</template>

<script>
    Vue.component('aaaa', {
        render: function () {
            this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                console.log(response);
                this.google_code = response.body
            }, (response) => {
            });
        },
    });
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
//        methods: {
//            getAuthCode: function () {
//                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
//                    console.log(response);
//                    this.google_code = response.body
//                }, (response) => {
//                });
//            }
//        },
    }
</script>

<style>
    #login {

    }
</style>
