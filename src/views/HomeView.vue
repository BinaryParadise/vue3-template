<script setup lang="ts">
import { onMounted, useAttrs } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
import { store } from '../components/store'

defineProps<{
  msg: string
}>()

store.loading = true

const user: User = { username: '', token: 'AJDOEIPJGENLJZLC' }

onMounted(() => {
  store.loading = false
})
</script>

<template :v-loading="store.loading">
  <main>
    <HelloWorld :msg="user.token" />
  </main>
</template>
