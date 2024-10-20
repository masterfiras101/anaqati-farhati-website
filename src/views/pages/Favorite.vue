<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">المنتجات المفضلة</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProductsCard
        v-for="product in favoriteProducts"
        :key="product.id"
        :product="product"
        @remove-favorite="removeFavorite"
      />
      <p v-if="favoriteProducts.length === 0" class="text-gray-500">لا توجد منتجات مفضلة.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductsCard from './ProductsCard.vue';

// Sample favorite products data, replace this with your actual favorite products state
const favoriteProducts = ref([
  {
    id: 1,
    name: "فستان صيفي أنيق",
    description: "فستان صيفي مزخرف جميل، مثالي لكل المناسبات.",
    price: 49.99,
    images: [
      "/src/assets/imgs/Dresses/d_1.jpg",
      "/src/assets/imgs/Dresses/d_2.jpg",
      "/src/assets/imgs/Dresses/d_3.jpg"
    ],
    date: "2024-10-01"
  },
  // Add more favorite products as needed
]);

const removeFavorite = (productId) => {
  favoriteProducts.value = favoriteProducts.value.filter(product => product.id !== productId);
};
</script>
