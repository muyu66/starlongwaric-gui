<template>
    <div id="command">
        <div class="panel panel-default">
            <div class="panel-heading">任命指挥官</div>
            <div class="panel-body">
                <div class="list-group">
                    <a class="list-group-item" v-for="item in my_fleet_staff"
                       @click="postStaffAppointCommander(item.id,item.is_commander)">
                        <h4 class="list-group-item-heading">
                            {{ item.name }}
                            <span class="label label-primary" v-if="item.is_commander">
                                当前指挥官
                            </span>
                        </h4>
                        <p class="list-group-item-text">
                            职业：{{ jobs[item.job] }}
                            职业能力：{{ item.job_ability }}
                            智力：{{ item.intelligence }}
                            忠诚：{{ item.loyalty }}
                        </p>
                    </a>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">命令指挥官</div>
            <div class="panel-body">
                <div class="list-group">
                    <a :class="{ active: displayCommanderStyle(item.id) }" class="list-group-item"
                       v-for="item in action_plans"
                       @click="postFleetConfigCommanderStyle(item.id)">
                        <h4 class="list-group-item-heading">{{ item.text }}</h4>
                        <p class="list-group-item-text">{{ item.desc }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'command',
        data () {
            return {
                my_body: '',
                my_fleet_staff: '',
                commander_style: '',
                action_plans: [
                    {
                        id: '1',
                        text: '优先 战斗',
                        desc: '对于战斗事件，主动应战',
                    },
                    {
                        id: '2',
                        text: '优先 躲避',
                        desc: '尽量避免冲突',
                    },
                ],
                jobs: [
                    '警卫', '工程师', '指挥家', '绝地武士'
                ],
            }
        },
        created: function () {
            this.getBody();
            this.getFleetStaff();
            this.getFleetConfigCommanderStyle();
        },
        methods: {
            getBody: function () {
                this.$http.get(
                    'http://www.slw.app/fleet_bodies', window.auth_header
                ).then((response) => {
                    this.my_body = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            getFleetStaff: function () {
                this.$http.get(
                    'http://www.slw.app/staff/my', window.auth_header
                ).then((response) => {
                    this.my_fleet_staff = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            postStaffAppointCommander: function (id, is_commander) {
                if (is_commander) {
                    alert('请不要重复任命');
                    return '';
                }

                this.$http.post(
                    'http://www.slw.app/staff/appoint-commander', { commander_id: id }, window.auth_header
                ).then((response) => {
                    this.getFleetStaff();
                }, (response) => {
                    console.log(response);
                });
            },
            getFleetConfigCommanderStyle: function () {
                this.$http.get(
                    'http://www.slw.app/fleet_configs/commander_style', window.auth_header
                ).then((response) => {
                    this.commander_style = response.body.commander_style;
                }, (response) => {
                    console.log(response);
                });
            },
            postFleetConfigCommanderStyle: function (style) {
                this.$http.post(
                    'http://www.slw.app/fleet_configs/commander_style', { style: style }, window.auth_header
                ).then((response) => {
                    if (response.body.code == 422) {
                        alert(response.body.msg);
                    } else {
                        this.getFleetConfigCommanderStyle();
                    }
                }, (response) => {
                    console.log(response);
                });
            },
            displayCommanderStyle: function (id) {
                if (id === this.commander_style) {
                    return true;
                }
                return false;
            },
        },
    }
</script>