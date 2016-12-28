<template>
    <div id="login">
        <aaaa>
            <div slot="header">{{level}}</div>
        </aaaa>
        <bb>
        </bb>
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
                    let header = this.$slots.header
                    return createElement('div', header)
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
        created: function () {
            this.getAuthCode();
        },
        methods: {
            getAuthCode: function () {
                this.$http.get('//127.0.0.1:10000/auth/code').then((response) => {
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
