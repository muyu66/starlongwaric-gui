<template>
    <div id="topbar" class="full">
        玩家状态
        <router-link to="/login">Go to Foo</router-link>
    </div>
</template>

<script>
    export default {
        name: 'topbar',
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
