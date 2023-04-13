let MBox = {}
MBox.install = function (Vue, options) {
  Vue.prototype.$mbox = {show:function() {
    console.log(this);
  }};
}
MBox.install();
MBOx.use(MBox);

export default {
    name:'mbox'
}