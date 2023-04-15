
<template>
    <el-date-picker size="mini" v-model="pickerOptions" type="daterange" range-separator="-" start-placeholder="开始日期"
        end-placeholder="结束日期" value-format="yyyy-MM-dd" @change="changed" align="right" style="max-width:230px;">
    </el-date-picker>
</template>

<script>
export default {
    name: 'vue-datepicker',
    props: [],
    data: function () {
        return {
            pickerOptions: []
        };
    },

    beforeCreate() {
        console.debug('component-beforeCreate');
    },
    created() {
        console.debug('component-created');
    },
    beforeMount() {
        console.debug('component-beforeMount');
    },
    mounted() {
        console.debug('component-mounted');

        var JIESHURQDATA = new Date();
        JIESHURQDATA.setDate(0);
        var KAISHIRQDATA = new Date(JIESHURQDATA);
        KAISHIRQDATA.setDate(1);
        this.pickerOptions = [KAISHIRQDATA, JIESHURQDATA];
    },
    methods: {
        changed(val) {
            this.$emit('change', val);
        }
    }
}
</script>