<template>
    <ul class="list-inline" id="topbar">
        <li>
            <button type="button" class="menu">舰队</button>
        </li>
        <li>
            <button type="button" class="btn btn-lg menu">舰队</button>
        </li>
        <li>
            <button type="button" class="btn btn-default btn-lg menu">舰队</button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'topbar',
    }
</script>

<style scoped>
    .menu {
        width: 100px;
        height: 100px;
        background-color: rgba(0, 127, 127, 0.313726);
        transform: translate3d(-50%, -50%, 0px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, -800, 400, 2000, 1);
    }

    .menu:hover {
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.75);
    }
</style>
