<script setup>
import CardFood from "../components/CardFood.vue";
import { onMounted, ref } from "vue";
import {menuDB} from '../api/bd.js'

const foodApi = ref([]);

onMounted(async () => {
  foodApi.value =  menuDB;
});


</script>

<template>
  <div>

    <CardFood :foodApi="foodApi" />

    
  </div>
</template>

<style scoped></style>
