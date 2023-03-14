<script setup>
defineProps(['foodApi'])
</script>

<template>
   <div class=" grid md:grid-cols-2 lg:grid-cols-3 lg:w-full ">
    <div class="img container w-2/3 p-5 m-6 
    rounded-3xl h-auto  px-4 mt-6
     bg-green-200 shadow-2xl " v-for="{nameFood,precio,descripcion,imagen,url} in foodApi" :key="url">
       <div class="container lg:w-full">
        <figure class="w-full object-cover mx-auto mb-3 ">
            <img 
            :src="imagen"  class="rounded-3xl" alt="">
        </figure>
        <div class="containe bg-fixed">
            <h3 class="font-medium text-2xl "> {{ nameFood }}</h3>
            <p class="text-justify">{{ descripcion }}</p>
            <p class="text-2xl mt-4 ">Precio <span class=" font-bold text-red-800 text-xl">$ {{ precio }}</span></p>
         <button class="w-full bg-indigo-500 mt-5 rounded-md text-white ">Add</button>
        
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
