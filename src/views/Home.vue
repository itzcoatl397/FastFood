<script setup>
import Carusel from "../components/Carusel.vue";


</script>

<template>
  <div class="bg-red-200 container rounded-md mb-20">
    <div class="flex  flex-col 
       lg:flex-row  
       lg:justify-center
       md:justify-center md:flex-col-reverse md:align-bottom">

      <div>
        <img src="../assets/img/logo.png" class="mb-3 md:mx-auto" alt="">
      </div>
      <div>
        <p class="titulo">Bienvenidos</p>
        <div class="grid grid-cols-2 gap-2">
          <div class="flex flex-col justify-center  bg-orange-400 h-20 rounded-md shadow-md hover:bg-slate-600  hover:text-white">
            <div class="text-center ">
              <h1 class="font-bold text-2xl">Lunes</h1>
              <p class="text-white"> Cervezas <span class="font-extrabold">2 X 1 </span></p>
            </div>
          </div>
          <div class="flex flex-col justify-center 
           bg-orange-400 h-20 rounded-md 
           shadow-md 
           
           hover:bg-slate-600  hover:text-white
           " >
            <div class="text-center">
             
              <h1 class="font-bold text-2xl">Martes</h1>
              <p class="text-white"> Hamburgesas  <span class="font-extrabold">2 X 1  </span></p>
            </div>
          </div>

          <div class="flex 
          flex-col justify-center 
           bg-orange-400 
           h-20 rounded-md shadow-md hover:bg-slate-600  hover:text-white  ">
            <div class="text-center">
              <h1 class="font-bold text-2xl">Miercoles</h1>
              <p class="text-white"> Litros de Azulitos  <span class="font-extrabold">2 X 1  </span></p>
            </div>
          </div>
          <div class="flex flex-col justify-center  bg-orange-400 h-20 rounded-md shadow-md hover:bg-slate-600  hover:text-white">
            <div class="text-center">
              <h1 class="font-bold text-2xl">Jueves</h1>
              <p class="text-white"> Alitas   <span class="font-extrabold">3 x 2   </span></p>
            </div>
          </div>
          <div class="flex flex-col justify-center  bg-orange-400 md:h-20 lg:h-20
           rounded-md shadow-md
           hover:bg-slate-600  hover:text-white
           px-2
           mb-5

         
           ">
            <div class="text-center">
              <h1 class="font-bold text-2xl">viernes</h1>
              <p class="text-white"> Viernes de  foraneos   <span class="font-extrabold"> Botellas al 50 % descuento </span></p>
     
            </div>
          </div>
          <div class="flex flex-col justify-center 
           bg-orange-400 h-20 rounded-md 
           shadow-md 
           hover:bg-slate-600  hover:text-white
           ">
            <div class="text-center">
              <h1 class="font-bold text-2xl"> Sabado</h1>
   <p class="text-white">Boneless<span class="font-extrabold text-white "> 350 pesos el kg </span></p>
            </div>
          </div>

        </div>
      </div>

      <div class="">

      </div>
    </div>
  </div>
</template>
<style scoped>
template {
  background-color: #18bdec;
  height: 100vh;
  width: 100vw;
}

.titulo {
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
}</style>
