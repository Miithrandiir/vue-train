<template>
    <BaseLayout>
        <div class="products">
            <ProductComponent v-for="product in products" :key="product.id" :product="product" />
        </div>
    </BaseLayout>
</template>

<script lang=ts setup>
import ProductComponent from '@/components/ProductComponent.vue';
import { getProductFromCategory } from "@/data/dataProvider";
import BaseLayout from '@/layouts/BaseLayout.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const category = route.params.category as string;

const products = await getProductFromCategory(category)

</script>


<style scoped lang="scss">
.products {
    display: grid;
    margin: auto;
    width: 75%;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    align-items: stretch;

}
</style>