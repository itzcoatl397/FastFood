<script setup>
import CardFood from '../components/CardFood.vue';
import { onMounted, ref } from "vue";

const foodApi = ref([]);
const  laoding = ref(false);

const formatData = (data) => {
  const dataFormat = data.map(({ ...comida }) => {
    
    const { nameFood, precio, descripcion, imagen,url } = comida.attributes;
    
    console.log(2);
    return { 
      nameFood,
      precio,
      descripcion,
      imagen: imagen.data.attributes.url,
      url:url,
    };
  });
  return dataFormat;
};

onMounted(async () => {
  laoding.value = true
try{
  const response = await fetch("http://localhost:1337/api/menus?populate=imagen");
  const { data } = await response.json();


  foodApi.value = formatData(data);
}catch(erro){

}finally{
  setTimeout(()=>(laoding.value = false),1000)
}
})

</script>

<template>
    <div>
      <div v-if="laoding" class=" ">
        <div role="status">
   <h3 class="mx-auto text-6xl text-center">Cargando):....</h3>
    <span class="sr-only">Loading..</span>
</div>
        
    </div>
      <CardFood :foodApi = "foodApi"/>
      
    </div>
</template>

<style scoped>
.laoding{
 
}
</style>

