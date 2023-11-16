<template>
    <div class="presentation">
        <img src="/img/img-01.jpg" alt="img" />
        <div class="content" ref="contentRef">
            <h1>MyShop</h1>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

let contentRef = ref<HTMLElement | null>(null);

onMounted(() => {
    if(contentRef.value === null)
        return;

    contentRef.value.style.left = `calc(50% - ${contentRef.value.clientWidth / 2}px)`;
});

</script>

<style scoped lang=scss>
.presentation {
    width: 90%;
    height: 600px;
    max-height: 75vh;
    position: relative;
    margin: 0 auto;

    &>img {
        box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &>.content {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        &>h1 {
            color: white;
            font-size: 3rem;
            margin-bottom: 0.5rem;
        }
        &>p {
            color: white;
            font-size: 1.5rem;
        }
    }
}
</style>
