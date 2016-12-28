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
                    return createElement('div', 'aaaa')
                },
            },
            'bb': {
                functional: true,
                render: function (createElement, a) {
                    function appropriateListComponent() {
                        return a.props.level;
                    }

                    return createElement(
                        appropriateListComponent(),
                    )
                },

                props: {
                    level: 2
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
