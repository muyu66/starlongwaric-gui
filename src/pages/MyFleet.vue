<template>
    <div id="my_fleet">
        {{ my_fleet.name }}
        {{ my_fleet.gold }}
        {{ my_fleet.fuel }}
        {{ my_fleet.power }}
        <br/>
        <table class="table">
            <tr v-for="item in my_fleet_staff">
                <td>{{ item.name }}</td>
                <td>{{ item.desc }}</td>
            </tr>
        </table>
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
                    'http://www.slw.app/fleets/1', window.auth_header
                ).then((response) => {
                    this.my_fleet = response.body;
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
        },
    }
</script>