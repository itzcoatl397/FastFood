/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./index.html",
    "./src/**/*.{vue,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern': "url('/src/assets/img/empty-wood-table-top-abstract-blurred-restaurant-cafe-background-can-be-used-display-montage-your-products_7191-916.avif')",
      }
    },
  },
  

}
