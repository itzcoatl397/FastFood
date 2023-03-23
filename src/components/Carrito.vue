<script setup>
import { computed } from "vue";
import { shoppingCart } from "../stores/shoppingCart";
import DeleteCircle from 'vue-material-design-icons/DeleteCircle.vue';

import swal from "sweetalert";
const shopping = shoppingCart();
defineProps(["addCart"]);

const addLength = computed(() => shopping.addCart.items.length > 0);

const {removeEat,} = shopping;

const swalAlert = (name) => {
  swal({
    title: `Producto eliminado  ${name}`,
    text: "Eliminado del carrito",
    icon: "error",
    defeat: true,
 
    
  });
};

const deleteElemento = (id,name) => {
  swalAlert(name);
  removeEat(id,name);
};

</script>

<template>

  <div>
    <div v-if="addLength">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 lg:w-full">
        <div
          class="img container w-2/3 p-5 m-6 rounded-3xl h-auto px-4 mt-6 bg-green-200 shadow-2xl"
          v-for="{ id, name, price, imagen } in addCart.items"
          :key="id"
        >
          <div class="">
            <div>
              <figure class="w-full object-cover mx-auto mb-3">
                <img :src="imagen" alt="" class="rounded-3xl w-full" />
              </figure>
              <div>
                <h2>{{ name }}</h2>
                <p>
                  Precio <span>$ {{ price }}</span>
                </p>

                <div class="flex justify-end gap-6">
                  
                 <DeleteCircle
                 fillColor="#FF0000" 
                 :size="36"
                 class="cursor-pointer"
                 @click="deleteElemento(id,name)"
                 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1
        class="bg-red-500 w-1/2 mx-auto rounded-r-full px-5 py-2 text-white text-center"
      >
        Carrito vacio
      </h1>
    </div>
    <!---->
  </div>
</template>

<style scoped>
.img {
  background-image: url("../assets/img/side-wave_background.png");
}
</style>
