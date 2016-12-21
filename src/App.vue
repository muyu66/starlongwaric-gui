<template>
    <div id="app">
        <!--<div id='dash_bot'></div>-->
        <button @click="show = !show">
            Toggle render
        </button>
        <transition name="slide-fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
    //    import Hello from './components/Hello'
    export default {
        name: 'app',
        data: {
            show: true,
        },
    }
</script>

<style>
    #app {
        color: white;
        background-color: white;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        width: 100%;
    }

    #dash_top {
        background-color: coral;
        position: relative;
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

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-active {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
