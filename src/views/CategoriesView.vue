<template>
    <BaseLayout>
        <div class="categories">
            <category-component v-for="(category, idx) in categories" :key="idx" :category="category+''" class="category" />
        </div>
    </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from '@/layouts/BaseLayout.vue';
import CategoryComponent from '@/components/CategoryComponent.vue';
import { getCategories } from '@/data/dataProvider';

const categories = await getCategories();

</script>

<style scoped lang="scss">
.categories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    width: 90%;
    margin: 0 auto;
    gap: 3rem;
}
</style>