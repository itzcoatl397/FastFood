
import{ reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const  shoppingCart= defineStore('shoppingCart', () => {

    
const addCart = reactive({
    items: []
  });
  
  const addCarito = (item) => {
    addCart.items.push(item);
  
  
  }


    return {  addCarito,addCart }

})
