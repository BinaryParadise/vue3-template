<script lang="ts" setup>
import BaseComponent from '@/components/BaseComponent.vue';

</script>

<template>
  <BaseComponent>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </BaseComponent>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
