<script>
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
    beforeMount() {
        this.mixin.loading = true;
    },

    mounted() {
        this.preparation();
    },
    watch: {
        "mixin.prepared": function (newValue, oldValue) {
            if (newValue && newValue != oldValue) {
                if (this.loadData) {
                    this.mixin.loading = this.loadData(1);
                }
            }
        },
    },
    methods: {
        preparation() {
            this.mixin.prepared = true;
            this.mixin.loading = false;
        }
    },
};

export default BaseMixin;
</script>