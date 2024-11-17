<script setup>
import Checkbox from '@/components/Checkbox.vue';
import InputLabel from '@/components/InputLabel.vue';
import TextInput from '@/components/TextInput.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';

import { ref } from 'vue';


// Method to toggle the form
const toggleForm = () => {
  create_account.value = !create_account.value;
};

const create_account = ref(true); // Toggle between login and registration
const form = ref({
  username: '',
  email: '',
  password: '',
  confirm_password: '',
  remember: true,
});



</script>

<template>
    <div  class="min-h-screen focus:scroll-auto  overflow-hidden bg-gray-50  dark:bg-slate-900 text-black/50  dark:text-white/50 ">
        <div
            class=" selection:bg-[#20C0FF] selection:text-white bg-white/80 dark:bg-slate-900"
        >
    <header>
    <!-- <input type="checkbox" name="hbr" id="hbr" class="hbr peer hidden">  -->
            <nav  class="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
                <div class="xl:container m-auto px-6 md:px-12">
                    <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                        <div class="w-full   px-2 flex justify-between lg:w-auto mt-3 ">
                            <div></div>
                            <router-link :to="{name:'index_page'}" aria-label="logo" class="flex space-x-6 pl-2 items-center">
                                <!-- <div aria-hidden="true" class="flex">
                                    <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-blue-200"></div>
                                    <div class="h-6 w-2 bg-primary dark:bg-blue-400"></div>
                                </div> -->
                                <!-- <span class="text-base font-bold text-blue-600 dark:text-white">OssolTrust أصول ترست</span> -->
                                <div class="flex lg:flex-1 z-999 ml-7 items-center justify-center">
                                    <!-- <p class=" text-gray-900 dark:font-bold font-semibold font-tharwat text-2xl  dark:text-white">أناقة فرحتي</p> -->

                                    
                                </div>
                            </router-link>
                            <div  class="hidden lg:hidden  justfy-start  lg:justify-end mt-1">
                                <div class="inline-flex items-center">
                                    <ThemeToggle/>
                                </div>
                            </div>
                            <!-- <ThemeToggle/> -->
                             <!-- close and go to revers path  -->
                            <router-link :to="{name:'index_page'}"  class="m-1.5 rounded-md p-1.5 -mr-1 pb-2 block lg:hidden bg-gray-800  text-gray-100">
                            <span class="sr-only">got to revers path</span>
                            <label for="hbr" class="peer-checked:hamburger  relative z-20 px-3   cursor-pointer lg:hidden">
                            <span class="absolute rotate-45">
                                <span
                                    class="absolute left-[8px] top-0 block h-5 w-[1px] rounded-sm bg-white  delay-300 duration-200 ease-in-out dark:bg-white"
                                    
                                ></span>
                                
                                <span
                                    class="delay-400 absolute -left-[2px]  top-[10px] block h-[1px] w-[22px] rounded-sm bg-white duration-200 ease-in-out dark:bg-white"
                                    
                                ></span>
                            
                            </span>
                            </label>
                            </router-link>
                             <!-- end close and go to revers path  -->

                        </div>
                        <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-slate-900     lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                            <div class="w-full space-y-2 border-blue-600/10 dark:border-blue-600 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                                <router-link :to="{name:'index_page'}"  class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                    <span class="relative text-bold font-semibold text-pink-300  dark:text-primaryLight">خروج</span>
                                </router-link>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
     </header>
     <div class="lg:flex lg:justify-center">

         <div class="m-auto xl:container px-12 sm:px-0 mx-auto bg-white/80 dark:bg-slate-900 text-black/50  dark:text-white/50">
         <div class="mx-auto h-full sm:w-max ">
         <div class="  py-12">
           <div class="space-y-4">
             <router-link to="">
               <!-- <img src="images/tailus.svg" class="w-40 dark:hidden" alt="tailus logo" />
               <img src="images/logo.svg" class="w-40 hidden dark:block" alt="tailus logo" /> -->
             </router-link>
           </div>
         <div class="mt-12 rounded-2xl blur-60  bg-gray-50 lg:dark:bg-slate-800  dark:bg-slate-900 -mx-6 sm:-mx-10 p-8 sm:p-10">
           <h3 class="text-2xl hidden lg:hidden font-semibold text-center text-gray-700 dark:text-white">قم بتسجيل الدخول</h3>
           
                     <form v-if="create_account"  class="mt-10  space-y-8 dark:text-white ">
                       
                     <div class="mt-4">
                         <InputLabel class="" for="username" value="اسم المستخدم" />
                         <div class="flex justify-start items-center relative">
     
                             <TextInput
                             id="username"
                             type="text"
                             class="mt-1 pr-10  block text-black text-center"
                             required
                             placeholder="ادخل اسم المستخدم هنا"
                             autocomplete="false"
                             v-model="form.username"
                             />
                              <span class="absolute -right-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                                     fill="#f472b6" viewBox="0 0 24 24" stroke="##f472b6" stroke-width="2">
                                     <path stroke-linecap="round" stroke-linejoin="round"
                                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                 </svg>
                                 </span>
                         </div>
                             <!-- v-model="form.password" -->
                         <!-- <InputError class="mt-2" :message="form.errors.password" /> -->
                     </div>
                     <div class="mt-4">
                         <InputLabel class="" for="password" value="كلمة المرور" />
                         <div class="flex justify-start items-center relative">
     
                             <TextInput
                             id="password"
                             type="password"
                             class="mt-1  block w-full text-black text-center"
                             required
                             placeholder="ادخل كلمة المرور هنا"
                             autocomplete="false"
                             v-model="form.password"
                             />
                             <span class="absolute -right-1">
                             
                                 <svg class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                         d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                                         fill="#f472b6" />
                                 <path
                                         d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                         fill="#FFFFFF" />
                                 <path
                                         d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.8174 10.0089 18.3135 10.022 18.75 10.0546V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
                                         fill="#f472b6" />
                                 </svg>
                             </span>
                         </div>
                             <!-- v-model="form.password" -->
                         <!-- <InputError class="mt-2" :message="form.errors.password" /> -->
                     </div>
                 <div  class="flex justify-between">
     
                     <router-link 
                     :to="{name:'index_page'}"  class="-mr-3 w-max p-3 flex items-start">
                     <span class="text-sm tracking-wide text-pink-600 dark:text-white"> نسيت كلمة المرور ؟ </span>
                 </router-link>
                 <label class="flex items-center">
                     <span class="ms-2 mr-2 text-sm text-gray-600 text-black/50  dark:text-white"
                         >تذكرني</span
                     >
                 <Checkbox name="remember" v-model:checked="form.remember" />
     
                 </label>
                 <!-- <Checkbox name="remember" v-model:checked="form.remember" /> -->
             <!-- <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-pink-400 dark:before:bg-pink-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
               <input id="" type="Your password" placeholder="Your answer" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition">
             </div> -->
             </div>
     
             <div class="block items-center justify-center">
             <button
                 class="w-full rounded-md bg-pink-500  border border-pink-400 dark:bg-slate-900  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-pink-600 focus:bg-pink-600 active:bg-pink-800"
                 >
                 <span class="text-base font-semibold text-white">دخول</span>
    
             </button>
             <!-- :class="{ 'opacity-25': form.processing }" -->
             <!-- :disabled="form.processing" -->
            </div>
                    </form>
                     <form v-else  class="mt-10  space-y-8 dark:text-white ">
                       
                     <div>
                         <InputLabel class="" for="username" value="اسم المستخدم" />
                         <div class="flex justify-start items-center relative">
     
                             <TextInput
                             id="username"
                             type="text"
                             class="mt-1 pr-10  block text-black text-center"
                             required
                             placeholder="ادخل اسم المستخدم هنا"
                             autocomplete="false"
                             v-model="form.username"
                             />
                              <span class="absolute -right-1">
                                 <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                                     fill="#f472b6" viewBox="0 0 24 24" stroke="##f472b6" stroke-width="2">
                                     <path stroke-linecap="round" stroke-linejoin="round"
                                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                 </svg>
                                 </span>
                         </div>
                             <!-- v-model="form.password" -->
                         <!-- <InputError class="mt-2" :message="form.errors.password" /> -->
                     </div>
                     <div>
                         <InputLabel class="" for="password" value="كلمة المرور" />
                         <div class="flex justify-start items-center relative">
     
                             <TextInput
                             id="password"
                             type="password"
                             class="mt-1  block w-full text-black text-center"
                             required
                             placeholder="ادخل كلمة المرور هنا"
                             autocomplete="false"
                             v-model="form.password"
                             />
                             <span class="absolute -right-1">
                             
                                 <svg class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                         d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                                         fill="#f472b6" />
                                 <path
                                         d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                         fill="#FFFFFF" />
                                 <path
                                         d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.8174 10.0089 18.3135 10.022 18.75 10.0546V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
                                         fill="#f472b6" />
                                 </svg>
                             </span>
                         </div>
                             <!-- v-model="form.password" -->
                         <!-- <InputError class="mt-2" :message="form.errors.password" /> -->
                     </div>
                     <div class="">
                         <InputLabel class="" for="password" value="تاكيد كلمة المرور" />
                         <div class="flex justify-start items-center relative">
     
                             <TextInput
                             id="password"
                             type="password"
                             class="mt-1  block w-full text-black text-center"
                             required
                             placeholder="تاكيد كلمة المرور هنا"
                             autocomplete="false"
                             v-model="form.password"
                             />
                             <span class="absolute -right-1">
                             
                                 <svg class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path
                                         d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                                         fill="#f472b6" />
                                 <path
                                         d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                         fill="#FFFFFF" />
                                 <path
                                         d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.8174 10.0089 18.3135 10.022 18.75 10.0546V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
                                         fill="#f472b6" />
                                 </svg>
                             </span>
                         </div>
                             <!-- v-model="form.password" -->
                         <!-- <InputError class="mt-2" :message="form.errors.password" /> -->
                     </div>
                 <div  class="flex justify-between">
     
                 
                 <!-- <label class="flex items-center">
                     <span class="ms-2 mr-2 text-sm text-gray-600 text-black/50  dark:text-white"
                         >تذكرني</span
                     >
                 <Checkbox name="remember" v-model:checked="form.remember" />
     
                 </label> -->
                 <!-- <Checkbox name="remember" v-model:checked="form.remember" /> -->
             <!-- <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-pink-400 dark:before:bg-pink-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
               <input id="" type="Your password" placeholder="Your answer" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition">
             </div> -->
                 </div>
     
             <div class="block items-center justify-center">
             <button
                 class="w-full rounded-md bg-pink-500  border border-pink-400 dark:bg-slate-900  h-11 flex items-center justify-center px-6 py-3 transition hover:bg-pink-600 focus:bg-pink-600 active:bg-pink-800"
                 >
                 <span class="text-base font-semibold text-white">إنشاء حساب</span>
    
             </button>
             <!-- :class="{ 'opacity-25': form.processing }" -->
             <!-- :disabled="form.processing" -->
            </div>
                    </form>
                    <button  @click="toggleForm"   class="border mt-1 p-3 w-full rounded-md flex justify-center text-center">
                        <span class="text-sm text-center   items-center   tracking-wide text-pink-600 dark:text-white"> {{ create_account ? 'إنشاء حساب جديد' : 'لدي حساب' }}</span>
                    </button>
                 
        
        
    </div>
     
     </div>
     </div>
             </div>
             <div class="overflow-hidden absolute hidden lg:flex scale-x-[-1] lg:w-3/12 left-[10%]">
                    <img src="@/assets/imgs/png/ic_bride_girl.png" alt="masterfiras101 logo" height="" width="">
            </div>
     </div>
</div>
</div>



</template>
