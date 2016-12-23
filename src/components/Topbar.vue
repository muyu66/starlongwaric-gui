<template>
    <ul class="list-inline" id="topbar">
        <li>
            <button type="button" class="" style="height: 100%;width: 100%">舰队</button>
        </li>
        <li>
            <button type="button" class="button">舰队</button>
        </li>
        <li>
            <button type="button" class="button">舰队</button>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'topbar',
    }
</script>

<style scoped>
    .button {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        text-align: center;
        cursor: default;
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.25);
        background-color: rgba(0, 127, 127, 0.298039);
    }

    .button:hover {
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.75);
    }
</style>
