<script setup>
import Carrito from '../components/Carrito.vue';
import Ordenar from '../components/Ordenar.vue';

import { storeToRefs } from 'pinia'


import { shoppingCart} from '../stores/shoppingCart';
const shopping = shoppingCart()
const { addCart ,quantity,totalCompra} = storeToRefs(shopping)

console.log(quantity.value.quantity)
</script>

<template>
    
    <div class="grid grid-cols-1 lg:grid-cols-2">
    <div>
        <Carrito
        :addCart="addCart"
        />
    </div>
      <div>
        <Ordenar
        :totalCompra="totalCompra"
        />
      </div>
    </div>
</template>