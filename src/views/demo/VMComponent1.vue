<template>
  <div><el-input v-model="props.modelValue.name"></el-input></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{ modelValue: TestModel }>();
</script>
