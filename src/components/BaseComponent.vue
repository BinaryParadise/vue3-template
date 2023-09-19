<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const loading = ref(true)
onMounted(() => loading.value = false)
</script>

<template :v-loading="loading">
    <slot></slot>
</template>