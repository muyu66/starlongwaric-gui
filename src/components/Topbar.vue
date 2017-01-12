<template>
    <div id="topbar" class="full">
        <button class="btn btn-default" type="button">好友</button>
        <button class="btn btn-default" type="button">
            金币 <span class="badge">{{ my_fleet.gold }}</span>
        </button>
        <button class="btn btn-default" type="button">
            能源 <span class="badge">{{ my_fleet.fuel }}</span>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'topbar',
        data () {
            return {
                my_fleet: '',
            }
        },
        created: function () {
            this.getFleetsMy();
        },
        methods: {
            getFleetsMy: function () {
                this.$http.get(
                    'http://www.slw.app/fleets/1', window.auth_header
                ).then((response) => {
                    this.my_fleet = response.body;
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
