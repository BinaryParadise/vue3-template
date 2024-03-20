<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type IComponent from '@/components/IComponent';

defineProps<{ child: IComponent }>();

const loading = ref(true);
const count = ref(0);
onMounted(() => {
  loading.value = false;
  count.value++;
});
</script>

<template>
  <div :v-loading="loading" style="height: calc(100vh - 150px)">
    <el-skeleton :rows="5" animated :loading="loading">
      <template #default>
        <component :is="child"></component>
      </template>
    </el-skeleton>
  </div>
</template>
