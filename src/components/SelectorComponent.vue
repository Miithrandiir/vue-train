<template>
    <div class="selector">
        <button @click="$emit('update-value:decrement')" data-cy="button-decrement">-</button>
        <div data-cy="selector-value">{{ props.value }}</div>
        <button @click="$emit('update-value:increment')" data-cy="button-increment">+</button>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    value: {
        type: Number,
        required: true
    }
});

</script>

<style scoped lang="scss">

.selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

</style>