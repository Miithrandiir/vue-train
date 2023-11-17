<template>
    <header-component />
    <div class="content">
        <slot></slot>
    </div>
    <footer-component />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<style lang="scss" scoped>
.content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
</style>