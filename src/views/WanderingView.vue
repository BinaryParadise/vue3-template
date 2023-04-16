<template>
    <div style="float: right;">
        <div class="title1">距上次更新</div>
        <div class="title1 title2">
            已经<div class="marked">10</div>个月
        </div>
        <div style="background-color: red;width: 10px;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
}
</script>

<style scoped>
.title1 {
    font-size: xx-large;
}

.title2 {
    margin-left: 100px;
    display: flex;
    flex-wrap: nowrap;
    align-items: baseline;
}

.marked {
    font-size: 70px;
    color: red;
}
</style>