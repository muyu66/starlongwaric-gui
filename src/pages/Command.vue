<template>
    <div id="command">
        <div class="panel panel-default">
            <div class="panel-heading">指定作战计划</div>
            <div class="panel-body">
                指定作战计划
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">任命指挥官</div>
            <div class="panel-body">
                任命指挥官
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'command',
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
            }
        },
    }
</script>