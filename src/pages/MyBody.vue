<template>
    <div id="my_body">
        <div class="list-group">
            <a class="list-group-item" v-for="item in my_body">
                <h4>{{ item.widget.name }}
                    <small>{{ item.widget.desc }}</small>
                </h4>
                <div class="progress">
                    <div class="progress-bar progress-bar-success" :style="{ width: item.health + '%' }">
                        {{ item.health }}%
                    </div>
                </div>
                <button type="button" class="btn btn-default" @click="postBodies(item.id)">修复</button>
                <button type="button" class="btn btn-default" @click="postBodiesAll">全部修复</button>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my_body',
        data () {
            return {
                my_body: ''
            }
        },
        created: function () {
            this.getBodies();
        },
        methods: {
            getBodies: function () {
                this.$http.get(
                    'http://www.slw.app/fleet_bodies', window.auth_header
                ).then((response) => {
                    this.my_body = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            postBodies: function (id) {
                this.$http.post(
                    'http://www.slw.app/fleet_bodies', { id: id }, window.auth_header
                ).then((response) => {
                    this.getBodies();
                }, (response) => {
                    console.log(response);
                });
            },
            postBodiesAll: function () {
                this.$http.post(
                    'http://www.slw.app/fleet_bodies/all', {}, window.auth_header
                ).then((response) => {
                    this.getBodies();
                }, (response) => {
                    console.log(response);
                });
            },
        },
    }
</script>