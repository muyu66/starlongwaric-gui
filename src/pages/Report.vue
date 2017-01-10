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
            <div class="panel-heading">
                事件 {{ event.standard.name }} {{ displayTitle(event.status) }}
            </div>
            <div class="panel-body">
                描述: {{ event.standard.desc }}<br/>
                指挥官: {{ event.commander }}<br/>
                <button class="btn" v-on:click="postEventResolve(event.id, 1)">
                    {{ displayButton(event.standard.event, 'yes') }}
                </button>
                <button class="btn" v-on:click="postEventResolve(event.id, 0)">
                    {{ displayButton(event.standard.event, 'no') }}
                </button>
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
                    'http://www.slw.app/event', window.auth_header
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
            displayButton: function (event, button) {
                switch (event) {
                    case 1:
                        return button == 'yes' ? '作战' : '躲避';
                    case 2:
                        return button == 'yes' ? '招募' : '离开';
                }
            },
            postEventResolve: function (id, choose) {
                this.$http.post(
                    'http://www.slw.app/event/resolve', {id: id, choose: choose}, window.auth_header
                ).then((response) => {
                    this.getEvents();
                }, (response) => {
                    console.log(response);
                });
            },
        }
    }
</script>