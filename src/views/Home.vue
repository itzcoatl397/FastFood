<script setup>
import Carusel from "../components/Carusel.vue";


</script>

<template>
    <div class="">
   <div class="flex  flex-col 
   lg:flex-row  
   lg:justify-center
   md:justify-center md:flex-col-reverse md:align-bottom">
    
   <div>
    <img src="../assets/img/logo.png" class="mb-3 md:mx-auto" alt="">
   </div>
<div>
  <p class="titulo">Bienvenidos</p>
</div>
      
   </div>
     </div>
</template>
<style scoped>
template{
  background-color: #18bdec;
  height: 100vh;
  width: 100vw;
}
.titulo{
  width: 0;
  color: bla;
  overflow: hidden;
  white-space: nowrap;
  text-align: center;
  font-size: 4rem;
  margin: 0 auto;
  font-family: "Courier New";
  border-right: 0.15em solid #18bdec;
  animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;

}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink {
  50% {
    border-color: transparent;
  }
}
</style>
