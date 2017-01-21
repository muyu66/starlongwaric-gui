<template>
    <div id="command">
        <ul class="nav nav-pills" role="tablist">
            <li :class="{ active:seen_un_read }"><a @click="switchTab">未读</a></li>
            <li :class="{ active:seen_read }"><a @click="switchTab">已读</a></li>
        </ul>

        <div class="panel panel-default" v-for="item in un_read" v-if="seen_un_read">
            <div class="panel-heading">{{ item.from }}</div>
            <div class="panel-body">
                {{ item.content }}

                <button v-if="item.button=='yes_or_no'" class="btn btn-default" type="button"
                        @click="postMessageAgree(item.func_id,item.from,item.slw_key)">同意
                </button>
                <button v-if="item.button=='yes_or_no'" class="btn btn-default" type="button"
                        @click="postMessageRead(item.slw_key)">拒绝
                </button>

                <button v-if="item.button=='read'" class="btn btn-default" type="button"
                        @click="postMessageRead(item.slw_key)">知晓
                </button>
            </div>
        </div>

        <div class="panel panel-default" v-for="item in read" v-if="seen_read">
            <div class="panel-heading">{{ item.from }}</div>
            <div class="panel-body">{{ item.content }}</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'message',
        data () {
            return {
                seen_un_read: true,
                seen_read: false,
                un_read: '',
                read: '',
            }
        },
        created: function () {
            this.getMessageUnRead();
            this.getMessageRead();
        },
        methods: {
            switchTab: function () {
                this.seen_un_read = !this.seen_un_read;
                this.seen_read = !this.seen_read;
            },
            getMessageUnRead: function () {
                this.$http.get(
                    this.$api.get('message/un-read'), window.auth_header
                ).then((response) => {
                    this.un_read = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            getMessageRead: function () {
                this.$http.get(
                    this.$api.get('message/read'), window.auth_header
                ).then((response) => {
                    this.read = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            postMessageAgree: function (func_id, from, key) {
                this.$http.post(
                    this.$api.get('message/agree'), {
                        func_id: func_id,
                        from: from,
                        key: key,
                    }, window.auth_header
                ).then((response) => {
                    this.getMessageUnRead();
                    this.getMessageRead();
                }, (response) => {
                    console.log(response);
                });
            },
            postMessageRead: function (key) {
                this.$http.post(
                    this.$api.get('message/read'), {
                        key: key,
                    }, window.auth_header
                ).then((response) => {
                    this.getMessageUnRead();
                    this.getMessageRead();
                }, (response) => {
                    console.log(response);
                });
            },
        },
    }
</script>