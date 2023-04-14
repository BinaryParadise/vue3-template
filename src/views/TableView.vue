<template>
    <el-table :data="list" border size="mini" height="100%" v-loading="mixin.loading">
        <el-table-column prop="index" label="索引"></el-table-column>
        <el-table-column prop="value" label="内容"></el-table-column>
    </el-table>
</template>

<script>
import BaseMixin from '../components/BaseMixin.vue'

export default {
    name: "TableView",
    data() {
        return {
            list: []
        };
    },
    mixins: [BaseMixin],
    methods: {
        loadData() {
            var that = this;
            setTimeout(() => {
                for (let i = 0; i < 100; i++) {
                    that.list.push({ index: i, value: Math.random() });
                }
                that.preparation();
            }, 2000);
            return true;
        }
    }
};
</script>