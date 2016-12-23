<template>
    <ul class="list-inline full" id="topbar">
        <li>
            <button type="button" class="button">舰队</button>
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
    .full {
        position: relative;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        align-items: center;
        display: -webkit-flex;
        justify-content: center;
    }

    .button {
        width: 10rem;
        height: 10rem;
        text-align: center;
        cursor: default;
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.25);
        background-color: rgba(0, 127, 127, 0.298039);
        font-size: 2rem;
        font-weight: bold;
        color: rgba(255, 255, 255, 0.75);
        text-shadow: 0 0 10px rgba(0, 255, 255, 0.95);
        margin: 0 1rem 0 1rem;
    }

    .button:hover {
        background-color: rgba(0, 127, 127, 0.709804);
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.25);
    }
</style>
