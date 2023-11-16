<template>
  <suspense>
    <router-view />
  </suspense>
</template>

<script setup lang="ts">
</script>

<style scoped>
.dot {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 50%;
  margin-right: 5px;
  border: 2px solid #4a4a4a;
}
</style>