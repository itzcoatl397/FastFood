<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView} from 'vue-router'


</script>

<template>
  <div>
    <header>
  
    <div class="wrapper w-full p-4 ">

      <nav class="flex justify-evenly space-x-4 ">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <RouterLink to="/login"  
       class="bg-red-500 rounded-full w-1/6  px-4 py-2 text-white  text-center "
        
        
        >Login</RouterLink>
      </nav>
    

    </div>
  </header>

  <RouterView />
  </div>
</template>

<style scoped>

</style>
