<script>
const MBox = function (vnode) {
    return {
        vnode,
        show: function () {
            vnode.$message({
                message: '插件功能实现',
                type: 'warning'
            });
        }
    };
}
const install = (Vue) => {
    if (install.installed) return;
    install.installed = true;

    /* 定义属性到Vue原型中
    这样每一个组件就可以通过this.$mbox.xxx(data)
    */
    Object.defineProperties(Vue.prototype, {
        $mbox: {
            get() {
                return MBox(this);
            },
        },
    });
};
export default {
    install
};
</script>