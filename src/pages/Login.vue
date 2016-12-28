<template>
    <div id="login">
        <aaaa></aaaa>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                level: '1',
            }
        },
        components: {
            'aaaa': {
                render: function (createElement) {
                    let aaaac = function () {
                        this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
                            return response.body
                        }, (response) => {
                        });
                    };
                    return createElement('div', aaaac)
                },
            },
        },
//        created: function () {
//            this.getAuthCode();
//        },
//        methods: {
//            getAuthCode: function () {
//                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
//                    this.level = response.body
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
