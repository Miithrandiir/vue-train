<template>
    <div class="category">
        <div class="header">
            {{ props.category }}
        </div>
        <div class="content">
            <ul>
                <li>{{products.length}} Produits</li>
            </ul>
        </div>
        <button class="footer" @click="$router.push(`/category/${props.category}`)">
            Voir plus
        </button>
    </div>
</template>

<style scoped lang="scss">
.category {
    border-radius: 30px;
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%;

    &>.header {
        background: url("/img/img-01.jpg");
        background-size: cover;
        height: 100px;
        padding: 1rem;
        display: flex;
        align-items: center;
        color: white;
        justify-content: center;
        text-transform: uppercase;
        font-family: 'Noto Sans', sans-serif;
        font-size: 1.5rem;
        font-weight: bold;
    }

    &>.content {
        flex-grow: 1;
        padding: 1rem;

        &>ul {
            list-style: none;
            padding: 0;
            margin: 0;

            &>li {
                padding: 0.5rem 0;
                border-bottom: 1px solid #f5f5f5;
            }
        }
    }

    &>.footer {
        background-color: #cd9d97;
        color: white;
        padding: 1rem;
        border-radius: 0;
    }

}
</style>

<script setup lang="ts">
import * as dataProvider from '@/data/dataProvider';

const props = defineProps({
    category: {
        type: String,
        required: true
    }
})

const products = await dataProvider.getProductFromCategory(props.category);

</script>