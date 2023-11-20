<template>
    <div class="loading">
        <h1>Chargement de votre page</h1>
    </div>
</template>

<style scoped lang="scss">
@import "@fontsource/pacifico";
.loading {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: white;
    background: linear-gradient(269deg, #3d3b46, #cd9d97);
    background-size: 400% 400%;

    -webkit-animation: LoadingEffect 7s ease infinite;
    -moz-animation: LoadingEffect 7s ease infinite;
    animation: LoadingEffect 7s ease infinite;
    &>h1 {
        font-family: 'Pacifico', cursive;
        font-weight: 400;
        font-size: 3rem;
    }
}
@-webkit-keyframes LoadingEffect {
    0%{background-position:0% 2%}
    50%{background-position:100% 99%}
    100%{background-position:0% 2%}
}
@-moz-keyframes LoadingEffect {
    0%{background-position:0% 2%}
    50%{background-position:100% 99%}
    100%{background-position:0% 2%}
}
@keyframes LoadingEffect {
    0%{background-position:0% 2%}
    50%{background-position:100% 99%}
    100%{background-position:0% 2%}
}
</style>