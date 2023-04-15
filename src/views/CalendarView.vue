<template>
    <el-calendar></el-calendar>
</template>

<script>
export default {
    name: "CalendarView",
    data: function () {
        return {
            date: '',
            items: []
        }
    },
    created: function () {
        this.date = new Date();
        var days = this.getMonthDays(this.date.getFullYear(), this.date.getMonth());
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