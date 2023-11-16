<template>
    <div class="product">
        <div class="img">
            <img :src="props.product.image" alt="img" />
        </div>
        <div class="content">
            <h1>{{props.product.name}}</h1>
            <p>{{props.product.description}}</p>
        </div>
        <button class="btn">Buy</button>
    </div>
</template>

<script lang=ts setup>
import Product from "@/core/Product";


const props = defineProps({
    product: {
        type: Product,
        required: true
    }
})

</script>

<style scoped lang="scss">
.product {
    max-width: 350px;
    border-radius: 30px;
    background: var(--secondary);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    &>.img {
        border-radius: 30px 30px 0 0;
        overflow: hidden;
        &>img {
            width: 100%;
            object-fit: cover;
        }
    }
    .content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    button {
        background: #c8938d;
        font-family: 'Noto Sans', sans-serif;
        color: white;
        font-weight: bold;
        width: 100%;
        border-radius: 0 0 10px 10px;
        &:hover {
            background: lighten(#c8938d, 3);
        }
    }
}
</style>