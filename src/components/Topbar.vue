<template>
    <div id="topbar" class="full">
        <a v-on:click="getAuthUser">玩家状态</a>
    </div>
</template>

<script>
    export default {
        name: 'topbar',
        methods: {
            getAuthUser: function () {
                this.$http.get(
                    'http://www.slw.app/fleets/1', window.auth_header
                ).then((response) => {
                    alert(response.body.name);
                }, (response) => {
                    console.log(response);
                });
            }
        },
    }
</script>

<style scoped>
    .full {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        align-items: center;
        display: -webkit-flex;
        justify-content: center;
    }
</style>
