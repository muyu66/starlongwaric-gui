<template>
    <div id="app">
        <transition name="slide-fade">
            <div id='dash_top' v-if="show1"></div>
        </transition>
        <button @click="show1 = !show1" style="z-index: 1">
            Toggle render
        </button>
        <button @click="show2 = !show2" style="z-index: 1;">
            Toggle render
        </button>
        <transition name="slide-fade">
            <div id='dash_bot' v-if="show2"></div>
        </transition>
    </div>
</template>

<script>
    //    import Hello from './components/Hello'
    export default {
        name: 'app',
        data () {
            return {
                show1: true,
                show2: true,
            }
        },
    }
</script>

<style>
    #app {
        color: black;
        background-color: white;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
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

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-active {
        opacity: 0;
    }
</style>
