<template>
    <div id="my_body">
        <table class="table">
            <tr v-for="item in my_body">
                <td>{{ item.health }}</td>
                <td>{{ item.widget.name }}</td>
                <td>{{ item.widget.desc }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'my_body',
        data () {
            return {
                my_body: ''
            }
        },
        created: function () {
            this.getBodies();
        },
        methods: {
            getBodies: function () {
                this.$http.get(
                    'http://www.slw.app/fleet_bodies', window.auth_header
                ).then((response) => {
                    this.my_body = response.body;
                }, (response) => {
                    console.log(response);
                });
            }
        },
    }
</script>