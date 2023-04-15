

<template>
    <el-container class="grid-c" style="flex-wrap: wrap;">
        <div v-for="item in items" class="grid" :key="item">
            {{ item }}
        </div>
    </el-container>
</template>
   
<script>
export default {
    name: "GridView",
    data() {
        return {
            date: '',
            items: []
        }
    },
    created: function () {
        this.date = new Date();
        var days = this.getMonthDays(this.date.getFullYear(), this.date.getMonth());
        //document.body.style.setProperty("--gird-item-width", parseInt((this.contentWidth - 7) / 7) + "px");
        //document.body.style.setProperty("--gird-item-height", parseInt((this.contentHeight - 7) / (days == 28 ? 4 : 5)) + "px");
        //document.documentElement.style.setProperty("--gird-item-width", parseInt(this.contentWidth / 7) + "px");
        for (let i = 1; i <= days; i++) {
            this.items.push(i);
        }
    },
    methods: {
        getMonthDays: function (year, month) {
            let days = new Date(year, month + 1, 0).getDate()
            return days;
        },
    },
};
</script>

<style>
:root {
    --gird-item-width: 328px;
    --grid-item-height: 328px;
}

.grid-c {
    max-height: 100vh;
    max-width: 100vw - 20px;
}

.grid {
    width: var(--gird-item-width);
    height: var(--grid-item-height);
    border: gray solid 1px;
    margin-right: -1px;
    margin-bottom: -1px;
    color: aqua;
}
</style>