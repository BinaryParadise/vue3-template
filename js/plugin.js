Vue.mixin({
    data: function () {
        return {
        };
    },
    mounted: function () {
        if (this.loadData != undefined) {
            this.loadData();
        }
    }
});