<template>
    <div id="topbar" class="full">
        玩家状态
    </div>
</template>

<script>
    export default {
        name: 'topbar',
        ready() {
            this.$http.get('//127.0.0.1:81/auth/user').then((response) => {
                console.log('aaa');
                console.log(response);
            }, (response) => {
                console.log(response);
            });
        }
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
