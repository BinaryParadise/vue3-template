<template>
    <DatePicker ref="date" @change="dateChanged"></DatePicker>
</template>

<script>

import DatePicker from '../components/DatePicker.vue'

export default {
    name: "LifecycleView",
    data: function () {
        return { loading: false }
    },
    beforeCreate() {
        console.debug('beforeCreate');
    },
    created() {
        console.debug('created');
    },
    beforeMount() {
        console.debug('beforeMount');
    },
    mounted() {
        console.debug('mounted');
        this.loadData();
    },
    components: {
        DatePicker
    },
    methods: {
        loadData() {
            console.log('loadData');
            console.debug(this.$refs.date.pickerOptions);
        },
        dateChanged(val) {
            console.log('dateChanged: ' + val);
        }
    }
};
</script>