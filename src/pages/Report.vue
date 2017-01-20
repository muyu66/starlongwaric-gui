<template>
    <div id="report">
        <ul class="nav nav-pills" role="tablist">
            <li :class="{ active:seen_event_un_finish }"><a @click="showEventsUnFinish">事件</a></li>
            <li :class="{ active:seen_event_finish }"><a @click="showEventsFinish">事件(已完成)</a></li>
            <li :class="{ active:seen_fights }"><a @click="showFights">战报</a></li>
        </ul>

        <div class="panel panel-default" v-for="item in report" v-if="seen_fights">
            <div class="panel-heading">
                与 {{ item.enemy.name }} 交战, {{ results[item.result+1] }}
                <span style="float:right; position:relative;">{{ item.updated_at }}</span>
            </div>
            <div class="panel-body">
                {{ displayGet(item.result) }} 金币 {{ item.booty.gold }} 能源 {{ item.booty.fuel }}<br/>
            </div>
        </div>
        <div class="panel panel-default" v-for="event in event_un_finish" v-if="seen_event_un_finish">
            <div class="panel-heading">
                事件 {{ event.standard.name }} {{ displayTitle(event.status) }}
                <span style="float:right; position:relative;">{{ event.updated_at }}</span>
            </div>
            <div class="panel-body">
                描述: {{ event.standard.desc }}<br/>
                指挥官: {{ event.staff ? event.staff.name : '舰长' }}<br/>
                <div v-if="!event.status">
                    <button class="btn" @click="postEventResolve(event.id, 1)">
                        {{ displayButton(event.standard.event, 'yes') }}
                    </button>
                    <button class="btn" @click="postEventResolve(event.id, 0)">
                        {{ displayButton(event.standard.event, 'no') }}
                    </button>
                </div>
            </div>
        </div>
        <div class="panel panel-default" v-for="event in event_finish" v-if="seen_event_finish">
            <div class="panel-heading">
                事件 {{ event.standard.name }} {{ displayTitle(event.status) }}
                <span style="float:right; position:relative;">{{ event.updated_at }}</span>
            </div>
            <div class="panel-body">
                描述: {{ event.standard.desc }}<br/>
                指挥官: {{ event.staff ? event.staff.name : '舰长' }}<br/>
                <div v-if="!event.status">
                    <button class="btn" @click="postEventResolve(event.id, 1)">
                        {{ displayButton(event.standard.event, 'yes') }}
                    </button>
                    <button class="btn" @click="postEventResolve(event.id, 0)">
                        {{ displayButton(event.standard.event, 'no') }}
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
                event_un_finish: '',
                event_finish: '',
                results: [
                    '失败', '平局', '胜利'
                ],
                seen_event_un_finish: true,
                seen_event_finish: false,
                seen_fights: false,
            }
        },
        created: function () {
            this.getFights();
            this.getEventUnFinish();
            this.getEventFinish();
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
            getEventFinish: function () {
                this.$http.get(
                    'http://www.slw.app/event/finish', window.auth_header
                ).then((response) => {
                    this.event_finish = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            getEventUnFinish: function () {
                this.$http.get(
                    'http://www.slw.app/event/un-finish', window.auth_header
                ).then((response) => {
                    this.event_un_finish = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            displayTitle: function (status) {
                switch (status) {
                    case -1:
                        return '(处理中)';
                    case 0:
                        return '(未处理)';
                    case 1:
                        return '(已完成)';
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
                    case -1:
                        return '损失';
                    case 0:
                        return '获取';
                    case 1:
                        return '获取';
                }
            },
            postEventResolve: function (id, choose) {
                this.$http.post(
                    'http://www.slw.app/event/resolve', { id: id, choose: choose }, window.auth_header
                ).then((response) => {
                    this.getEventUnFinish();
                    setTimeout(function () {
                        this.getEventUnFinish()
                    }.bind(this), 5000);
                }, (response) => {
                    console.log(response);
                });
            },
            showEventsUnFinish: function () {
                this.seen_event_un_finish = true;
                this.seen_event_finish = false;
                this.seen_fights = false;
                this.getEventUnFinish();
            },
            showEventsFinish: function () {
                this.seen_event_un_finish = false;
                this.seen_event_finish = true;
                this.seen_fights = false;
                this.getEventFinish();
            },
            showFights: function () {
                this.seen_event_un_finish = false;
                this.seen_event_finish = false;
                this.seen_fights = true;
                this.getFights();
            },
        }
    }
</script>