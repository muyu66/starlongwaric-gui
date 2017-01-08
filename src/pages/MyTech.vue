<template>
    <div id="my_tech">
        <table class="table">
            <tr v-for="item in my_tech">
                <td>{{ item.level }}</td>
                <td>{{ item.tech.name }}</td>
                <td>{{ item.tech.desc }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'my_tech',
        data () {
            return {
                my_tech: ''
            }
        },
        created: function () {
            this.getTeches();
        },
        methods: {
            getTeches: function () {
                this.$http.get(
                    'http://www.slw.app/fleet_teches', window.auth_header
                ).then((response) => {
                    this.my_tech = response.body;
                }, (response) => {
                    console.log(response);
                });
            }
        },
    }
</script>