<template>
    <div id="topbar" class="full">
        <button class="btn btn-default" type="button" @click="goFriend()">盟友</button>
        <button class="btn btn-default" type="button" @click="goMessage()">
            消息 <span class="badge">{{ un_read_count.count }}</span>
        </button>
        <button class="btn btn-default" type="button">
            金币 <span class="badge">{{ my_fleet.gold }}</span>
        </button>
        <button class="btn btn-default" type="button">
            能源 <span class="badge">{{ my_fleet.fuel }}</span>
        </button>
        <button class="btn btn-default" type="button">{{ time }}</button>

    </div>
</template>

<script>
    export default {
        name: 'topbar',
        data () {
            return {
                my_fleet: '',
                un_read_count: '',
                time: '',
            }
        },
        created: function () {
            this.getFleetsMy();
            this.getMessageUnReadCount();
            this.getTime();
        },
        methods: {
            getFleetsMy: function () {
                this.$http.get(
                    this.$api.get('fleets/1'), window.auth_header
                ).then((response) => {
                    this.my_fleet = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            getMessageUnReadCount: function () {
                this.$http.get(
                    this.$api.get('message/un-read-count'), window.auth_header
                ).then((response) => {
                    this.un_read_count = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            getTime: function () {
                this.$http.get(
                    this.$api.get('time'), window.auth_header
                ).then((response) => {
                    this.time = response.body.time;
                }, (response) => {
                    console.log(response);
                });
            },
            goMessage: function () {
                this.$router.push('/message');
            },
            goFriend: function () {
                this.$router.push('/friend');
            },
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
