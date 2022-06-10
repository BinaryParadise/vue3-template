<template>
    <el-row>
        <el-col>
            <el-table :data="list" size="mini" :max-height="contentHeight" border>
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
            contentHeight: parent.vm.getInnerHeight()
        };
    },
    mounted: function () {
        const obj = this;
        for (let i = 0; i < 200; i++) {
            this.list.push({ index: i, value: Math.random() });
        }
        window.onresize = () => {
            return (() => {
                window.screenHeight = document.body.clientHeight - 59;
                obj.screenHeight = window.screenHeight;
            })()
        };
    },
    methods: {
    }
};
</script>