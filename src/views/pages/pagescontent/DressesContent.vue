



<script setup>

import {ref} from 'vue';

import Dresses_Data from '@/data/dresses-data.json';

const  dresses_data_json = ref(Dresses_Data);
import ProductsCard from '@/components/ProductsCard.vue';


</script>

<template>

  <div dir="rtl" class="py-10">
    <div class="xl:container mx-auto px-6 md:px-12 ">
      <div class="mb-16   flex justify-center">


        <h2
          class="mb-4 text-center w-full backdrop-blur-md py-6 shadow-xl text-2xl font-bold text-gray-800 dark:text-white md:text-4xl animate-fadeslide">
          قسم فساتين الزفاف
        </h2>

      </div>


        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 p-4  ">
          <ProductsCard v-for="product in dresses_data_json" :key="product.id" :product="product" />
        </div>

    </div>
  </div>

</template>


