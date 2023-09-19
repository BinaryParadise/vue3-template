import { ref, onMounted, watch } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";

export function useLoading() {
    const isLoading = ref(true)
    onMounted(() => {
        isLoading.value = false
        console.log(isLoading)
    })
    return isLoading
}