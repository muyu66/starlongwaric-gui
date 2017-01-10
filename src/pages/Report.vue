<template>
    <div id="report">
        <ul class="nav nav-pills" role="tablist">
            <li v-bind:class="{ active:seen_events }"><a v-on:click="showEvents">事件</a></li>
            <li v-bind:class="{ active:seen_fights }"><a v-on:click="showFights">战报</a></li>
        </ul>

        <div class="panel panel-default" v-for="item in report" v-if="seen_fights">
            <div class="panel-heading">
                与 {{ item.enemy.name }} 交战, {{ results[item.result+1] }}
            </div>
            <div class="panel-body">
                {{ displayGet(item.result) }} 金币 {{ item.booty.gold }} 能源 {{ item.booty.fuel }}<br/>
            </div>
        </div>
        <div class="panel panel-default" v-for="event in events" v-if="seen_events">
            <div class="panel-heading">
                事件 {{ event.standard.name }} {{ displayTitle(event.status) }}
            </div>
            <div class="panel-body">
                描述: {{ event.standard.desc }}<br/>
                指挥官: {{ event.commander }}<br/>
                <div v-if="!event.status">
                    <button class="btn" v-on:click="postEventResolve(event.id, 1)">
                        {{ displayButton(event.standard.event, 'yes') }}
                    </button>
                    <button class="btn" v-on:click="postEventResolve(event.id, 0)">
                        {{ displayButton(event.standard.event, 'no') }}
                    </button>
                    <button class="btn" v-on:click="postEventResolve(event.id, 2)">
                        委托给指挥官
                    </button>
                </div>
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
                results: [
                    '失败', '平局', '胜利'
                ],
                seen_events: true,
                seen_fights: false,
            }
        },
        created: function () {
            this.getFights();
            this.getEvents();
        },
        methods: {
            getFights: function () {
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
            displayGet: function (get) {
                switch (get) {
                    case - 1:
                        return '损失';
                    case 0:
                        return '获取';
                    case 1:
                        return '获取';
                }
            },
            postEventResolve: function (id, choose) {
                this.$http.post(
                    'http://www.slw.app/event/resolve', {id: id, choose: choose}, window.auth_header
                ).then((response) => {
                    this.getFights();
                    this.getEvents();
                }, (response) => {
                    console.log(response);
                });
            },
            showEvents: function () {
                this.seen_events = true;
                this.seen_fights = false;
            },
            showFights: function () {
                this.seen_events = false;
                this.seen_fights = true;
            },
        }
    }
</script>