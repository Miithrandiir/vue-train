<template>
    <router-link to="/cart">
        <span class="material-icon">shopping_cart</span>
        0 articles
    </router-link>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
a {
    display: flex;
    align-items: center;
    border: 1px solid rgba(#000,0.3);
    padding: 5px;
    border-radius: 3px;
    cursor: pointer;
}
</style>