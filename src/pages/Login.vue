<template>
    <div id="login">
        <aaaa></aaaa>
        <bb></bb>
    </div>
</template>

<script>
    export default {
        name: 'login',
//        data () {
//            return {
//                google_code: '',
//            }
//        },
        components: {
            'aaaa': {
                render: function (createElement) {
                    return createElement('div', this.a)
                },
            },
            'bb': {
                render: function (createElement) {
                    return createElement('h1', 'hallo')
                },
            }
        },
        created: function () {
            let a = this.getAuthCode();
        },
        methods: {
            getAuthCode: function () {
                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                    return response.body
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
