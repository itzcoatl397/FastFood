<script setup>

import { storeToRefs } from 'pinia'

import { reactive } from 'vue';
import { shoppingCart} from '../stores/shoppingCart';

defineProps(['foodApi'])
const shopping = shoppingCart()
const { addCart } = storeToRefs(shopping)
const {addCarito} = shopping;



</script>

<template>
   <div class=" grid md:grid-cols-2 lg:grid-cols-3 lg:w-full ">
    <div class="img container w-2/3 p-5 m-6 
    rounded-3xl h-auto  px-4 mt-6
     bg-green-200 shadow-2xl " v-for="{id,name,price,descripcion,imagen} in foodApi" :key="id">
       <div class="container lg:w-full">
        <figure class="w-full object-cover mx-auto mb-3 ">
            <img 
            :src="imagen"  class="rounded-3xl" alt="Imagen">
        </figure>
        <div class="containe bg-fixed">
            <h3 class="font-medium text-2xl "> {{ name }}</h3>
            <p class="text-justify">{{ descripcion }}</p>
            <p class="text-2xl mt-4 ">Precio <span class=" font-bold text-red-800 text-xl">$ {{price }}</span></p>
         
        
         <button class="w-full bg-indigo-500  

            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50
         h-12
         mt-5 rounded-3xl mx-auto m-auto  text-white "
         
         @click="addCarito({ 
             id,name,price,imagen})"
         
         >Add</button>

        </div>
       </div>
    </div>
 
   </div>
</template>


<style scoped>
.img{
    background-image: url("../assets/img/side-wave_background.png");
}

</style>
