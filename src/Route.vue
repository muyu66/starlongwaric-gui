<template>
    <div id="route">
        <h1>Hello App!</h1>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
<script>
    //    import Index from './pages/Index'
    import BotBar from './components/Botbar'
    export default {
        components: {
            BotBar
        }
    }
</script>

<style>

</style>