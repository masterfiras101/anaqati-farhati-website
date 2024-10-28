<template>
  <div class="max-w-2xl mx-auto p-4" v-if="product">
    <div class="flex flex-col items-center">
      <h2 class="text-2xl font-bold mb-4">{{ product.name }}</h2>
      <div class="flex overflow-x-auto space-x-2 p-4 scrollbar-hide">
        <img
          v-for="img in product.images"
          :key="img"
          :src="require(`@/assets/imgs/Dresses/${img.split('/').pop()}`)"
          alt="Product Image"
          class="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>
      <p class="text-gray-600 mt-2">{{ product.description }}</p>
      <p class="text-gray-600 mt-1">{{ product.date }}</p>
      <p class="text-pink-600 font-bold mt-2">{{ product.price.toFixed(2) }} ر.ي</p>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p> <!-- عرض رسالة أثناء التحميل -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Dresses_Data from '@/data/dresses-data.json';

const route = useRoute();
const product = ref(null);

// Function to get product data by ID (similar to your getCategoryData)
const getProductData = (id) => {
  return Dresses_Data.find(p => p.id === parseInt(id));
};

onMounted(() => {
  const productId =
  this.$route.params.id;
  product.value = getProductData(productId);
});
</script>
