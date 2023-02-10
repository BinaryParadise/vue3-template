<template>
    <el-container>
        <div style="margin-right:10px;width:calc(50vw - 10px);">
            
        </div>
        <div style="margin-left:10px;width:calc(50vw - 10px);">
            
        </div>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            list: []
        };
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            var that = this;
            setTimeout(() => {
                for (let i = 0; i < 100; i++) {
                    that.list.push({ index: i, value: Math.random() });
                }
            }, 2000);
        }
    }
};
</script>