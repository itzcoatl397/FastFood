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
        <RouterLink to="/carrito">
        <img src="../src/assets/img/cart.png " alt="">
        </RouterLink>
      </nav>
    

    </div>
  </header>

  <RouterView />
  </div>
</template>

<style scoped>

</style>
