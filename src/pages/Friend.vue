<template>
    <div id="friend">
        <div class="panel panel-default" v-for="item in friend.friends">
            <div class="panel-heading">{{ item.name }}</div>
            <div class="panel-body">
                {{ displayOnlineStatus(item.online) }}
                <button class="btn btn-default" type="button" @click="postFriendDelete(item)">删除好友</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'friend',
        data () {
            return {
                friend: '',
            }
        },
        created: function () {
            this.getFriend();
        },
        methods: {
            getFriend: function () {
                this.$http.get(
                    this.$api.get('friend'), window.auth_header
                ).then((response) => {
                    this.friend = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            postFriendDelete: function (id) {
                this.$http.post(
                    this.$api.get('friend/delete'), { id: id }, window.auth_header
                ).then((response) => {
                    this.getFriend();
                }, (response) => {
                    console.log(response);
                });
            },
            displayOnlineStatus: function (item) {
                if (item.is_online) {
                    return '在线';
                } else {
                    return item.time + '前';
                }
            }
        },
    }
</script>