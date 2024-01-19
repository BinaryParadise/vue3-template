<template>
  <div>
    <el-input v-model="value"></el-input>
    <el-button type="primary" @click="saveData">保存</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{ modelValue: TestModel }>();
const emit = defineEmits<{ 'update:modelValue': [value: TestModel] }>();

const value = computed({
  get: () => props.modelValue.name,
  set: (value) => emit('update:modelValue', { id: props.modelValue.id, name: value })
});

const name = ref(props.modelValue.name);

function saveData() {
  emit('update:modelValue', { id: props.modelValue.id, name: name.value });
}
</script>
