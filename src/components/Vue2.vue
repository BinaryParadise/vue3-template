<script>
import Vue from 'vue';

const VueComponment = {
    name: "BaseVue",
    data() {
        return { contentHeight: 0 };
    }
};
const Vue2 = Vue.extend(VueComponment)
export default Vue2;
</script>