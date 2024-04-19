<template>
  <div style="height: 100%; width: 100%">
    <div class="flexa">
      <div class="flexa-top"></div>
      <div class="flexa-content1"></div>
      <div class="flexa-content2"></div>
      <div class="flexa-bottom"></div>
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
  background-color: #2b2b2b;

  &-top {
    height: 50px;
    background-color: #242424;
    border-radius: 4px;
  }

  &-content1 {
    flex: 2;
    background-color: #242424;
  }

  &-content2 {
    flex: 1;
    background-color: #242424;
  }

  &-bottom {
    height: 100px;
    background-color: #242424;
  }
}
</style>

<script setup lang="ts"></script>
