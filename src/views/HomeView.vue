<template>
    <BaseLayout>
        <presentation-component />

        <div class="highlighted-products">
            <Suspense>
                <template #default>
                    <highlighted-products-component />
                </template>

                <template #fallback>
                    <LoaderComponent />
                </template>
            </Suspense>
        </div>
    </BaseLayout>
</template>

<script setup lang="ts">
import PresentationComponent from '@/components/home/PresentationComponent.vue';
import HighlightedProductsComponent from '@/components/HighlightedProductsComponent.vue';
import LoaderComponent from '@/components/LoaderComponent.vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
</script>

<style scoped lang="scss">
.highlighted-products {
    margin: 50px auto;
    width: 90%;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
    opacity: 0;
}
</style>
