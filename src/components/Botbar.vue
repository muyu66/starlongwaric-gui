<template>
    <ul class="list-inline full" id="botbar">
        <li v-for="button in buttons">
            <button v-on:click="go(button.method)" type="button" class="button">
                {{ button.text }}
            </button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'botbar',
        data () {
            return {
                buttons: [
                    {
                        text: '舰队',
                        method: 'my_fleet'
                    },
                    {
                        text: '科技',
                        method: 'my_tech',
                    },
                    {
                        text: '维修',
                        method: 'my_body',
                    },
                    {
                        text: '指令',
                        method: 'command',
                    },
                    {
                        text: '汇报',
                        method: 'report',
                    },
                ]
            }
        },
        methods: {
            go: function (path) {
                this.$router.push(path);
            },
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

    .button {
        width: 8rem;
        height: 8rem;
        text-align: center;
        cursor: default;
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.25);
        background-color: rgba(0, 127, 127, 0.298039);
        font-size: 1.6rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.75);
        text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
        margin: 0 1rem 0 1rem;
    }

    .button:hover {
        background-color: rgba(0, 127, 127, 0.709804);
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.25);
    }
</style>
