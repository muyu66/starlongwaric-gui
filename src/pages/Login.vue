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
//                level: '1',
//            }
//        },
        components: {
            'aaaa': {
                render: function (createElement) {
                    return createElement('div', (
                        function () {
                            this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                                console.log(response.body);
                                return response.body
                            }, (response) => {
                                console.log('aaa');
                            });
                        }
                    ))
                },
            },
            'bb': {
                render: function (createElement) {
                    return createElement('h' + this.level, 'ads')
                },
                props: {
                    level: '2'
                },
            }
        },
//        created: function () {
//            let a = this.getAuthCode();
//        },
//        methods: {
//            getAuthCode: function () {
//                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
//                    return response.body
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
