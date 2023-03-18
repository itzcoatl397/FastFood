import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const shoppingCart = defineStore("shoppingCart", () => {
  const addCart = reactive({
    items: [],
  });
  const quantity = reactive({
    quantity: 0,
  });

  const totalCompra = reactive({
    totalCompra: 0,
  });
  const addCarito = (item) => {
    addCart.items.push(item);

    totalCompraArr();
  };
  const totalCompraArr = () => {
    let total = 0;
    total = addCart.items.reduce(
      (acc, item) => (total = total + item.price),
      0
    );

    totalCompra.totalCompra = total;
  };

  return { addCarito, addCart, quantity, totalCompra };
});
