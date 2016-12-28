<template>
    <div id="login" v-html="google_code">
        <aaaa></aaaa>
        <bb></bb>
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
        components: {
            'aaaa': {
                render: function (createElement) {
                    return createElement('div',
                        this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                            console.log(response);
                            this.google_code = response.body
                        }, (response) => {
                        })
                    )
                },
            },
            'bb': {
                render: function (createElement) {
                    return createElement(
                        'h1',   // tag name 标签名称
                        'aaaa' // 子组件中的阵列
                    )
                },
            },
//        created: function () {
//            this.getAuthCode();
//        },
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
