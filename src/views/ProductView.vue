<template>
    <BaseLayout>
        <div class="content">
            <div class="image">
                <img :src="product.image" alt="product image" />
            </div>
            <div class="description">
                <header>
                    <h1>{{ product.name }}</h1>
                </header>
                <p>{{ product.description }}</p>
                <div class="price">
                    <span>$</span>{{ product.price }}
                </div>
                <button class="add-to-cart" @click="onAddToCartClicked" data-cy="order-button">Ajouter au panier</button>
            </div>
        </div>
    </BaseLayout>
</template>

<script setup lang="ts">
import type Product from '@/core/Product';
import { getProduct } from '@/data/dataProvider';
import BaseLayout from '@/layouts/BaseLayout.vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '@/stores/CartStore';

const route = useRoute();
const productId = parseInt(route.params.id.toString());

const product: Product = await getProduct(productId);

const onAddToCartClicked = () => {
    useCartStore().add(product);
}

</script>

<style scoped lang="scss">
.content {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
    margin: auto;
    width: 90%;
    gap: 50px;

    &>.image {
        width: 700px;
        max-width: 500px;
        border-radius: 30px;
        overflow: hidden;
        display: flex;

        &>img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    &>.description {
        width: 600px;
        text-align: justify;

        &>header {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 20px;
        }

        &>.price {
            font-size: 2rem;
            font-weight: 900;
            margin: 20px 0;
            font-family: 'Noto Sans', sans-serif;
            text-align: center;
            &>span {
                font-size: 1.5rem;
            }
        }
    }
}

.add-to-cart {
    background: #c8938d;
    font-family: 'Noto Sans', sans-serif;
    color: white;
    width: 100%;
}</style>