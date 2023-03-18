<script setup>
import { storeToRefs } from 'pinia'

defineProps({
    totalCompra: {
        type: Number,
        required: true
    }
})


</script>

<template>

<div class="container m-6">
    <div>
        <h1 class="text-5xl font-medium mb-6">Ordena  tu Pedido </h1>
        <h2 class="flex justify-around font-bold text-2xl">Iva <span>16%</span></h2>
        <h2 class="flex justify-around font-bold text-2xl">Total  <span>{{ totalCompra.totalCompra }}</span></h2>

    </div>
</div>
</template>

<style scoped>


</style>