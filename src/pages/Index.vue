<template>
    <div id="index" v-on:mousedown="down" v-on:mouseup="up">
        <transition name="slide-fade">
            <div id='dash_top' v-if="display_top">
                <topbar></topbar>
            </div>
        </transition>
        <transition name="slide-fade">
            <div id='dash_bot' v-if="display_bot">
                <botbar></botbar>
            </div>
        </transition>
    </div>
</template>

<script>
    import Topbar from '../components/Topbar'
    import Botbar from '../components/Botbar'

    export default {
        name: 'index',
        data () {
            return {
                display_top: false,
                display_bot: false,
                mouse_pos_down: 0,
                mouse_pos_up: 0,
            }
        },
        methods: {
            down: function () {
                this.mouse_pos_down = window.event.clientY;
            },
            up: function () {
                this.mouse_pos_up = window.event.clientY;
                this.check();
            },
            check: function () {
                if (this.mouse_pos_up < window.innerHeight / 2) {
                    this.display_top = this.mouse_pos_down < this.mouse_pos_up;
                } else {
                    this.display_bot = this.mouse_pos_down > this.mouse_pos_up;
                }
            },
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
