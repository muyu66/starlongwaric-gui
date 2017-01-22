<template>
    <div id="paginate">
        <nav>
            <ul class="pagination">
                <li>
                    <a @click='goPage("-")'>&laquo;</a>
                </li>
                <li v-for="i in last_page" :class='displayActive(i)'>
                    <a @click='goPage(i)'>{{ i }}</a>
                </li>
                <li>
                    <a @click='goPage("+")'>&raquo;</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'paginate',
        data () {
            return {
                active: 1,
                current: 1,
            }
        },
        props: ['current_page', 'last_page'],
        created: function () {
        },
        methods: {
            goPage: function (i) {
                if (i === '-') {
                    if (this.current - 1 <= 0) {
                        this.current = 1;
                    } else {
                        this.current = this.current - 1;
                    }
                } else if (i === '+') {
                    if (this.current == this.last_page) {
                        this.current = this.last_page;
                    } else {
                        this.current = this.current + 1;
                    }
                } else {
                    this.current = i;
                }
                this.$emit('goPage', this.current);
            },
            displayActive: function (i) {
                if (this.current == i) {
                    return { active: true };
                }
            },
        },
    }
</script>

<style scoped>

</style>
