<template>
    <router-link to="/cart">
        <span class="material-icon">shopping_cart</span>
        {{ cartStore.totalItems }} articles
    </router-link>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/CartStore';

const cartStore = useCartStore();

</script>

<style scoped lang="scss">
a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 3px;
    cursor: pointer;
    background-color: #cd9d97;
    color: white !important;
    box-shadow: 0 0 4px rgba($color: #000000, $alpha: .2);
    &>.material-icon {
        color: white;
        margin-right: 5px;
    }
}
</style>