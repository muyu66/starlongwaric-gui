<template>
    <div id="report">
        <div class="panel panel-default" v-for="item in report">
            <div class="panel-heading">战报</div>
            <div class="panel-body">
                报告 Captain<br/>
                {{ item.result ? '胜利' : '战败' }}
            </div>
        </div>
        <div class="panel panel-default" v-for="event in events">
            <div class="panel-heading">事件 {{ displayTitle(event.status) }}</div>
            <div class="panel-body">
                姓名: {{ event.standard.name }}<br/>
                描述: {{ event.standard.desc }}<br/>
                指挥官: {{ event.commander }}<br/>
                <button class="btn">委托给指挥官</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'report',
        data () {
            return {
                report: '',
                events: '',
            }
        },
        created: function () {
            this.getReports();
            this.getEvents();
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
            },
            getEvents: function () {
                this.$http.get(
                    'http://www.slw.app/events', window.auth_header
                ).then((response) => {
                    this.events = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            displayTitle: function (status) {
                if (status) {
                    return '(已完成)'
                }
                else {
                    return '(待处理)'
                }
            },
        }
    }
</script>