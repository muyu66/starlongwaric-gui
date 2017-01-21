<template>
    <div id="my_fleet">
        <ul class="list-group">
            <li class="list-group-item">舰长：{{ my_fleet.name }}</li>
            <li class="list-group-item">金币：{{ my_fleet.gold }}</li>
            <li class="list-group-item">能源：{{ my_fleet.fuel }}</li>
            <li class="list-group-item">船员：{{ my_fleet.staff }}</li>
            <li class="list-group-item">军衔：{{ my_fleet.rank }}</li>
            <li class="list-group-item">战勋：{{ my_fleet.contribution }}</li>
            <li class="list-group-item">从属：{{ my_fleet.union }}</li>
            <li class="list-group-item">所在：{{ my_fleet.planet }} （{{ my_fleet.planet_full }} )</li>
            <li class="list-group-item">战力：{{ my_fleet.power }}</li>
        </ul>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in my_fleet_staff">
                {{ item.name }} {{ item.job_name }} {{ item.desc }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'my_fleet',
        data () {
            return {
                my_fleet: '',
                my_fleet_staff: ''
            }
        },
        created: function () {
            this.getFleetMy();
            this.getFleetStaff();
        },
        methods: {
            getFleetMy: function () {
                this.$http.get(
                    this.$api.get('fleets/1'), window.auth_header
                ).then((response) => {
                    this.my_fleet = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
            getFleetStaff: function () {
                this.$http.get(
                    this.$api.get('staff/my'), window.auth_header
                ).then((response) => {
                    this.my_fleet_staff = response.body;
                }, (response) => {
                    console.log(response);
                });
            },
        },
    }
</script>