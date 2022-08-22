<template>
    <el-row>
        <el-col>
            <el-table :data="list" size="mini" style="height:calc(100vh - 40px);" border>
                <el-table-column prop="index" label="序号"></el-table-column>
                <el-table-column prop="value" label="内容"></el-table-column>
            </el-table>
        </el-col>
        <el-col style="margin-top:8px;">
            <el-pagination background layout="prev, pager, next" size="mini" :total="list.length">
            </el-pagination>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            contentHeight: vm.contentHeight
        };
    },
    mounted: function () {
        const obj = this;
        for (let i = 0; i < 10; i++) {
            this.list.push({ index: i, value: Math.random() });
        }
    },
    methods: {
    }
};
</script>