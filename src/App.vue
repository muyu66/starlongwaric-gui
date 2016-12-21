<template>
    <div id="app">
        <div id='dash_top'></div>
        <div id='dash_bot'></div>
    </div>
</template>

<script>
    //    import Hello from './components/Hello'
    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        color: white;
        background-color: black;
        position: absolute;
        height: 100%;
        width: 100%;
    }

    #dash_top {
        background-color: coral;
        position: absolute;
        top: 0;
        height: 20%;
        width: 100%;
    }

    #dash_bot {
        background-color: aqua;
        position: absolute;
        bottom: 0;
        height: 20%;
        width: 100%;
    }
</style>
