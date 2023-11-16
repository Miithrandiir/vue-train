<template>
    <h2>Produits mis en avant</h2>

    <div class="products">
        <product-component v-for="product in products" :key="product.id" :product="product" class="product"/>
    </div>
</template>

<script setup lang="ts">
import { getHighlightedProducts } from '@/data/dataProvider';
import ProductComponent from '@/components/ProductComponent.vue';


const products = await getHighlightedProducts();
console.log(products);
</script>

<style scoped lang="scss">
h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    margin-bottom: 3rem;
    text-align: center;
    font-weight: 700;
    font-size: 2rem;
    &::before, &::after {
        display: flex;
        content: '\A';
        white-space: pre;
        width: 60px;
        height: 5px;
        background-color: #c8938d;
        margin: 0 1rem;
    }
}
.products {
    display: flex;
    width: 75%;
    margin: 0 auto;
    align-items: stretch;
    justify-content: space-between;
    height: calc(100% - 6rem);
}

</style>