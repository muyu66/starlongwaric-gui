<template>
    <div id="login">
        <aaaa>
            <div slot="header" v-html="level"></div>
        </aaaa>
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
        },
        created: function () {
            this.getAuthCode();
        },
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
