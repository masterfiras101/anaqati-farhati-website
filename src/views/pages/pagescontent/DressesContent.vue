



<script setup>

import {ref} from 'vue';

import Dresses_Data from '@/data/dresses-data.json';

// import Dresses_Data from '/src/data/dresses-data'

const  dresses_data_json = ref(Dresses_Data);

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
    <div class="grid gap-4 grid-cols-1   px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <div v-for="dress in dresses_data_json" :key="dress.id" class="group relative rounded-3xl    space-y-6 overflow-hidden">
        <img v-if="dress.path"
        :src="dress.path"
        class="mx-auto h-[20rem]   lg:h-[26rem] md:h-[26rem] w-full grayscale object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
        alt="woman"
        loading="lazy"
        />
        <div class="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-slate-900 dark:bg-gray-400 border border-pink-300 translate-y-28 transition duration-300 ease-in-out group-hover:translate-y-0">
          <div class="animate-pulse">
            <h4 class="text-xl font-semibold dark:text-gray-700 text-white">{{dress.fabric_type}}</h4>
            <div class="block">
              <span class="block text-sm text-gray-200">{{ dress.care_instructions }}</span>
              <div class="flex">
                <span class="block text-sm text-gray-200">{{ dress.closure_type }}</span>
                <span class="block text-sm text-gray-200">ففف</span>
              </div>
           
              <p class=" text-sm text-gray-200">{{ dress.date }}</p>
              
            </div>
          </div>
          <p class="mt-8 text-sm text-gray-300 dark:text-gray-600">{{ dress.about_dresse }}</p>
        </div>
        
      </div>

    </div>
  </div>
    </div>
                                    
</template>


