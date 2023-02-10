<template>
    <el-row>
        <el-col v-for="item in list">
            {{ item.index }} {{ item.value }}
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            contentHeight: parent.vm.contentHeight - 40
        };
    },
    mounted: function () {
        debugger
        const obj = this
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