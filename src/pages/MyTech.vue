<template>
    <div id="my_tech">
        <div class="list-group">
            <a class="list-group-item" v-for="item in my_tech">
                <h4>{{ item.tech.name }}
                    <small>{{ item.tech.desc }}</small>
                </h4>
                <a href="#">等级 <span class="badge">{{ item.level }}</span></a>
                <button type="button" class="btn btn-default" @click="postTeches(item.id, 1)">升级</button>
                <button type="button" class="btn btn-default" @click="postTechesAll(1)">全部升级</button>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'my_tech',
        data () {
            return {
                my_tech: ''
            }
        },
        created: function () {
            this.getTeches();
        },
        methods: {
            getTeches: function () {
                this.$http.get(
                    this.$api.get('fleet_teches'), window.auth_header
                ).then((response) => {
                    this.my_tech = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            postTeches: function (id, num) {
                this.$http.post(
                    this.$api.get('fleet_teches'), { id: id, num: num }, window.auth_header
                ).then((response) => {
                    this.getTeches();
                }, (response) => {
                    console.log(response);
                });
            },
            postTechesAll: function (num) {
                this.$http.post(
                    this.$api.get('fleet_teches/all'), { num: num }, window.auth_header
                ).then((response) => {
                    this.getTeches();
                }, (response) => {
                    console.log(response);
                });
            },
        },
    }
</script>