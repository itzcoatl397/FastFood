<script setup>

defineProps({
  addCart: {
    type: Array,
    required: true,
  },
})
</script>

<template>

<div v-if="true" >
  
  <div class="grid md:grid-cols-2 lg:grid-cols-3 lg:w-full">
    <div
      class="img container w-2/3 p-5 m-6 rounded-3xl h-auto px-4 mt-6
       bg-green-200 shadow-2xl"

       v-for="{id,name,price,imagen} in addCart.items" :key="id"
    >
      <div class="">
        <div>
          <figure class="w-full object-cover mx-auto mb-3">
            <img
              :src="imagen
                "
              alt=""
              class="rounded-3xl w-full"
            />
          </figure>
          <div>
            <h2>{{ name }}</h2>
            <p>Precio <span>$ {{ price }}</span></p>

            <div class="flex justify-end gap-6">
              <input type="button" value="-" />
              <p>3</p>

              <input type="button" value="+" />
            </div>
          </div>
        </div>
      </div>
    </div>

   
  
  


  </div>
</div>
</template>

<style scoped>
.img {
  background-image: url("../assets/img/side-wave_background.png");
}
</style>
