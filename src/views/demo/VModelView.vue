<template>
  <h1>v-model</h1>

  <input v-model="model1.name" />
  <VMComponent1 v-model="model1"></VMComponent1>

  <input v-model="model2.name" />

  <VMComponent2 v-model="model2"></VMComponent2>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import VMComponent1 from './VMComponent1.vue';
import VMComponent2 from './VMComponent2.vue';

const model1 = ref<TestModel>({ id: 1024, name: '双向绑定' });
const model2 = ref<TestModel>({ id: 2048, name: '单项绑定' });
</script>
