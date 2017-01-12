<template>
    <div id="command">
        <div class="panel panel-default">
            <div class="panel-heading">指定作战计划</div>
            <div class="panel-body">
                <div class="list-group">
                    <a class="list-group-item" v-for="item in fight_plan">
                        <h4 class="list-group-item-heading">{{ item.text }}</h4>
                        <p class="list-group-item-text">{{ item.desc }}</p>
                    </a>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">任命指挥官</div>
            <div class="panel-body">
                <div class="list-group">
                    <a class="list-group-item" v-for="item in my_fleet_staff"
                       v-on:click="postStaffAppointCommander(item.id,item.is_commander)">
                        <h4 class="list-group-item-heading">
                            {{ item.name }}
                            <span class="label label-primary" v-if="item.is_commander">
                                指挥官
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
            <div class="panel-heading">指定行动计划</div>
            <div class="panel-body">
                <div class="list-group">
                    <a class="list-group-item" v-for="action_plan in action_plans">
                        <h4 class="list-group-item-heading">{{ action_plan.text }}</h4>
                        <p class="list-group-item-text">{{ action_plan.desc }}</p>
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
                action_plans: [
                    {
                        text: '优先 战斗',
                        desc: '主动寻求战机',
                    },
                    {
                        text: '优先 躲避',
                        desc: '尽量避免冲突',
                    },
                    {
                        text: '疯狂屠戮',
                        desc: '无视敌友，无差别的疯狂攻击',
                    }
                ],
                fight_plan: [
                    {
                        text: '注重 防御',
                        desc: '使用能量盾构建防御墙',
                    },
                    {
                        text: '注重 破盾',
                        desc: '注重 破盾',
                    },
                    {
                        text: '注重 攻击',
                        desc: '注重 攻击',
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
                    'http://www.slw.app/staff/appoint-commander', {commander_id: id}, window.auth_header
                ).then((response) => {
                    this.getFleetStaff();
                }, (response) => {
                    console.log(response);
                });
            },
        },
    }
</script>