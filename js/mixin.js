const BaseMixin = {
    data() {
        return {
            mixin: {
                version: '0.1.0',
                loading: false,
                prepared: false
            }
        };
    },
    mounted() {
        this.mixin.loading = true;
        this.preparation();
    },
    watch: {
        "mixin.prepared": function (newValue, oldValue) {
            if (newValue && newValue != oldValue) {
                if (this.loaddata) {
                    this.loaddata(1);
                }
                this.mixin.loading = false;
            }
        },
    },
    methods: {
        preparation() {
            this.mixin.prepared = true;
        }
    },
};

const VueComponment = {
    name: "BaseVue",
    mixins: [BaseMixin],
    data() {
        return { based: true };
    }
};

const Vue2 = Vue.extend(VueComponment);