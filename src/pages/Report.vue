<template>
    <div id="report">
        <div class="panel panel-default" v-for="item in report">
            <div class="panel-heading">战报</div>
            <div class="panel-body">
                报告 Captain<br/>
                {{ item.result ? '胜利' : '战败' }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'report',
        data () {
            return {
                report: ''
            }
        },
        created: function () {
            this.getReports();
        },
        methods: {
            getReports: function () {
                this.$http.get(
                    'http://www.slw.app/fight_logs', window.auth_header
                ).then((response) => {
                    this.report = response.body;
                }, (response) => {
                    console.log(response);
                });
            }
        },
    }
</script>