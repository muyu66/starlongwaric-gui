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
                    let a = function () {
                        this.$http.get('http://www.airclass.app/valid/xls').then((response) => {
                            this.level = response.body
                        }, (response) => {
                        });
                    }
                    return createElement('div', a)
                },
            },
        },
//        created: function () {
//            this.getAuthCode();
//        },
        methods: {
            getAuthCode: function () {
                this.$http.get('http://www.airclass.app/valid/xls').then((response) => {
                    this.level = response.body
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
