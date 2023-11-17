<template>
    <div class="selector">
        <button @click="value--">-</button>
        <div>{{ value }}</div>
        <button @click="value++">+</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    value: {
        type: Number,
        required: true
    }
});

const value  = ref(props.value);
const emits = defineEmits(['update-value:decrement', 'update-value:increment']);

</script>

<style scoped lang="scss">

.selector {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

</style>