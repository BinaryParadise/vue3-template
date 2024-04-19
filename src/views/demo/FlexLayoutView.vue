<template>
  <div style="height: 100%; width: 100%">
    <div class="flexa">
      <div class="flexa_top"></div>
      <div class="flexa_content1"></div>
      <div class="flexa_content2"></div>
      <div class="flexa_bottom"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flexa {
  display: flex;
  padding: 8px;
  height: 100%;
  flex-direction: column;
  row-gap: 12px;
  background-color: val(--color-background);

  &_top {
    height: 50px;
    background-color: var(--color-background-soft);
    border-radius: 4px;
  }

  &_content1 {
    flex: 2;
    background-color: var(--color-background-soft);
  }

  &_content2 {
    flex: 1;
    background-color: var(--color-background-soft);
  }

  &_bottom {
    height: 100px;
    background-color: var(--color-background-soft);
  }
}
</style>

<script setup lang="ts"></script>
