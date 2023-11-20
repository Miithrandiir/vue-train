<template>
  <router-view v-slot="{ Component }">
    <Suspense timeout="0">
      <template #fallback>
        <SuspenseLoadingComponent />
      </template>
      <component :is="Component" />
    </Suspense>
  </router-view>
</template>

<script setup lang="ts">
import SuspenseLoadingComponent from './components/SuspenseLoadingComponent.vue';

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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>