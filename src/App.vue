<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <header>
  
    <div class="wrapper w-full p-4 ">

      <nav class="flex justify-evenly space-x-4 ">
        <RouterLink to="/">Inicio</RouterLink>
        <RouterLink to="/menu">Menu</RouterLink>
        <router-link to="/carrito">Carrito</router-link>
      </nav>
    

    </div>
  </header>

  <RouterView />
  </div>
</template>

<style scoped>

</style>
