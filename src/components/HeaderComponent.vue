<template>
    <header id="header-site">
        <h1>MyShop</h1>

        <ul>
            <li><router-link to="/">Accueil</router-link></li>
            <li><router-link to="/categories">Catégorie</router-link></li>
        </ul>

        <CartButtonComponent />
    </header>
</template>

<script setup lang="ts">
import CartButtonComponent from "@/components/header/CartButtonComponent.vue";
</script>