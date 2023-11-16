<template>
    <header-component />
    <presentation-component />

    <div class="highlighted-products">
        <Suspense>
            <highlighted-products-component />

            <template #fallback>
                hello
            </template>
        </Suspense>
    </div>


    <footer-component />
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/HeaderComponent.vue';
import PresentationComponent from '@/components/home/PresentationComponent.vue';
import HighlightedProductsComponent from '@/components/HighlightedProductsComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<style scoped lang="scss">
.highlighted-products {
    margin: 250px auto;
    width: 90%;
}
</style>
