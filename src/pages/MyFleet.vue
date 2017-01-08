<template>
    <div id="my_fleet">
        {{ my_fleet.name }}
        <br/>
    </div>
</template>

<script>
    export default {
        name: 'my_fleet',
        data () {
            return {
                my_fleet: ''
            }
        },
        created: function () {
            this.getFleetsMy();
        },
        methods: {
            getFleetsMy: function () {
                this.$http.get(
                    'http://www.slw.app/fleets/1', window.auth_header
                ).then((response) => {
                    this.my_fleet = response.body;
                }, (response) => {
                    console.log(response);
                });
            }
        },
    }
</script>