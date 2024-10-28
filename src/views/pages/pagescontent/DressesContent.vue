



<script setup>

import {ref} from 'vue';

import Dresses_Data from '@/data/dresses-data.json';

const  dresses_data_json = ref(Dresses_Data);
import ProductsCard from '@/components/ProductsCard.vue';

// import Dresses_Data from '/src/data/dresses-data'

</script>

<template>

<div dir="rtl"  class="py-10">
  <div class="xl:container mx-auto px-6 md:px-12 ">
    <div class="mb-16   flex justify-center">
      

      <h2 class="mb-4 text-center shadow-pink-400 shadow-xl text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
       قسم فساتين الزفاف
      </h2>
    </div>
    <div class="mb-16 md:w-2/3 lg:w-1/2">
      <h2 class="mb-4 text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
       مرحباً 
      </h2>
      <p class="text-gray-600 dark:text-gray-300">
        قومي بالإطلاع على احدث فساتين الزفاف
      </p>
    </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
        <ProductsCard
          v-for="product in dresses_data_json"
          :key="product.id"
          :product="product"
            />
      </div>
   
  </div>
</div>
                                    
</template>


