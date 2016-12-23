<template>
    <div id="index">
        <transition name="slide-fade">
            <div id='dash_top' v-if="show1">
                <topbar></topbar>
            </div>
        </transition>
        <transition name="slide-fade">
            <div id='dash_bot' v-if="show2">
                <botbar></botbar>
            </div>
        </transition>
        <button @click="show1 = !show1" style="position: absolute; top: 40%">
            Toggle render
        </button>
        <button @click="show2 = !show2" style="position: absolute; top: 50%">
            Toggle render
        </button>
    </div>
</template>

<script>
    import Topbar from '../components/Topbar'
    import Botbar from '../components/Botbar'

    export default {
        name: 'index',
        data () {
            return {
                show1: false,
                show2: false,
            }
        },
        components: {
            Topbar, Botbar,
        },
    }
</script>

<style>
    #index {
        font-size: 62.5%;
        color: white;
        background-color: black;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        width: 100%;
    }

    #dash_top {
        background-color: black;
        position: absolute;
        top: 0;
        height: 20%;
        width: 100%;
    }

    #dash_bot {
        background-color: black;
        position: absolute;
        bottom: 0;
        height: 20%;
        width: 100%;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }

    .slide-fade-leave-active {
        transition: all .3s ease;
    }

    .slide-fade-enter, .slide-fade-leave-active {
        opacity: 0;
    }
</style>
