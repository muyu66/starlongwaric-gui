<template>
    <div id="login">
        <aaaa></aaaa>
        <bb :level="1">Hello world!</bb>
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
                    return createElement('div', 'aaaa')
                },
            },
            'bb': {
                functional: true,
                render: function (createElement) {
                    return createElement('h' + this.level, 'ads')
                },
                props: {
                    type: Number,
                    required: true
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
