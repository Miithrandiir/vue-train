<template>
    <div class="presentation">
        <img src="/img/img-01.jpg" alt="img" />
    </div>
</template>

<style scoped lang=scss>
.presentation {
    height: 600px;
    position: relative;

    &>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
