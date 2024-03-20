<template>
  <div v-loading="loading" style="height: 100%">
    <iframe :src="url" width="100%" height="100%" style="border: none" @load="onLoad"> </iframe>
  </div>
</template>

<style>
/*- scrollbar -*/
div::-webkit-scrollbar {
  width: 0.2em;
  background-color: #f5f5f5;
}

div::-webkit-scrollbar-thumb {
  background-color: #000000;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';

const url = ref('');

const loading = ref(true);
url.value = 'https://play.southskydoor.top/';

function onLoad() {
  console.log('iframe加载完成');
  loading.value = false;
}
</script>
