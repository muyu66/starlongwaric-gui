<template>
    <div id="topbar">
        <div class="element"
             style="background-color: rgba(0, 127, 127, 0.298039); position: absolute; transform: translate3d(-50%, -50%, 0px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, -400, 400, 1000, 1);">
            <div class="number">82</div>
            <div class="symbol">Pb</div>
            <div class="details">Lead<br>207.2</div>
        </div>
        <div class="element"
             style="background-color: rgba(0, 127, 127, 0.298039); position: absolute; transform: translate3d(-50%, -50%, 0px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, -400, 400, 1000, 1);">
            <div class="number">82</div>
            <div class="symbol">Pb</div>
            <div class="details">Lead<br>207.2</div>
        </div>
        <div class="element"
             style="background-color: rgba(0, 127, 127, 0.298039); position: absolute; transform: translate3d(-50%, -50%, 0px) matrix3d(1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, -400, 400, 1000, 1);">
            <div class="number">82</div>
            <div class="symbol">Pb</div>
            <div class="details">Lead<br>207.2</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'topbar',
    }
</script>

<style scoped>
    .element:hover {
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.75);
        border: 1px solid rgba(127, 255, 255, 0.75);
    }

    .element {
        width: 120px;
        height: 160px;
        box-shadow: 0 0 12px rgba(0, 255, 255, 0.5);
        border: 1px solid rgba(127, 255, 255, 0.25);
        text-align: center;
        cursor: default;
    }
</style>
