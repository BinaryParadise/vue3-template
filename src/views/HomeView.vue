<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue'

defineProps<{
  msg: string
}>()
</script>

<template>
  <main>
    <HelloWorld :msg="msg" />
  </main>
</template>
