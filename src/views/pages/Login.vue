<script setup>
// import Checkbox from '@/components/Checkbox.vue';
import InputLabel from '@/components/InputLabel.vue';
import TextInput from '@/components/TextInput.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';

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
                        <div class="w-full flex justify-between lg:w-auto">
                            <div></div>
                            <router-link to="/" aria-label="logo" class="flex space-x-2 items-center">
                                <div aria-hidden="true" class="flex space-x-1">
                                    <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-blue-200"></div>
                                    <div class="h-6 w-2 bg-primary dark:bg-blue-400"></div>
                                </div>
                                <!-- <span class="text-base font-bold text-blue-600 dark:text-white">OssolTrust أصول ترست</span> -->
                                <div class="flex   lg:flex-1 z-999">
                                    <p class=" text-gray-900 dark:font-bold font-semibold font-tharwat text-2xl  dark:text-white">أناقة فرحتي</p>
                                </div>
                            </router-link>
                            <div  class="hidden lg:hidden flex justfy-start lg:flex lg:justify-end mt-1 ">
                                <div class="inline-flex items-center">
                                    <ThemeToggle/>
                                </div>
                            </div>
                            <!-- <ThemeToggle/> -->
                             <!-- close and go to revers path  -->
                            <router-link to="/"  class="m-2.5 rounded-sm  lg:bg-slate-900 bg-slate-400  text-gray-100">
                            <span class="sr-only">got to revers path</span>
                            <label for="hbr" class="peer-checked:hamburger  relative z-20 px-4  cursor-pointer lg:hidden">
                            <span class="absolute  rotate-45 ">
                                <span
                                    class="absolute left-2.5 top-0 block h-5.5 w-0.5 rounded-sm bg-white  delay-300 duration-200 ease-in-out dark:bg-white"
                                    
                                ></span>
                                <span
                                    class="delay-400 absolute left-0 top-2.5 block h-0.5 w-6 rounded-sm bg-white duration-200 ease-in-out dark:bg-white"
                                    
                                ></span>
                            
                            </span>
                            </label>
                            </router-link>
                             <!-- end close and go to revers path  -->

                        </div>
                        <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-slate-900     lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                            <div class="w-full space-y-2 border-blue-600/10 dark:border-blue-600 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                                <router-link to="/"  class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                    <span class="relative text-bold font-semibold text-blue-600  dark:text-primaryLight">خروج</span>
                                </router-link>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
     </header>
    <div class="m-auto xl:container px-12 sm:px-0 mx-auto bg-white/80 dark:bg-slate-900 text-black/50  dark:text-white/50">
    <div class="mx-auto h-full sm:w-max ">
    <div class="  py-12">
      <div class="space-y-4">
        <router-link to="">
          <!-- <img src="images/tailus.svg" class="w-40 dark:hidden" alt="tailus logo" />
          <img src="images/logo.svg" class="w-40 hidden dark:block" alt="tailus logo" /> -->
        </router-link>
      </div>
    <div class="mt-12 rounded-2xl  bg-gray-50  dark:bg-slate-900 -mx-6 sm:-mx-10 p-8 sm:p-10">
      <h3 class="text-2xl font-semibold text-center text-gray-700 dark:text-white">قم بتسجيل الدخول</h3>
      
                <form  class="mt-10  space-y-8 dark:text-white ">
                <div class="mt-4">
                    <InputLabel class="" for="password" value="اسم المستخدم" />
                    <div class="flex justify-start items-center">

                        <TextInput
                        id="password"
                        type="password"
                        class="mt-1 block w-full text-black text-center"
                        required
                        placeholder="ادخل اسم المستخدم هنا"
                        autocomplete="false"
                        />
                         <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                                fill="#14B16F" viewBox="0 0 24 24" stroke="#14B16F" stroke-width="2">
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
                    <div class="flex justify-start items-center">

                        <TextInput
                        id="password"
                        type="password"
                        class="mt-1 block w-full text-black text-center"
                        required
                        placeholder="ادخل كلمة المرور هنا"
                        autocomplete="false"
                        />
                        <span class="absolute">
                        
                            <svg class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                    d="M2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.75736 10 5.17157 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16Z"
                                    fill="#14B16F" />
                            <path
                                    d="M12 18C13.1046 18 14 17.1046 14 16C14 14.8954 13.1046 14 12 14C10.8954 14 10 14.8954 10 16C10 17.1046 10.8954 18 12 18Z"
                                    fill="#FFFFFF" />
                            <path
                                    d="M6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C17.8174 10.0089 18.3135 10.022 18.75 10.0546V8C18.75 4.27208 15.7279 1.25 12 1.25C8.27208 1.25 5.25 4.27208 5.25 8V10.0546C5.68651 10.022 6.18264 10.0089 6.75 10.0036V8Z"
                                    fill="#14B16F" />
                            </svg>
                        </span>
                    </div>
                        <!-- v-model="form.password" -->
                    <!-- <InputError class="mt-2" :message="form.errors.password" /> -->
                </div>
            <div class="flex justify-between">

                <router-link 
                to="/"  class="-mr-3 w-max p-3 flex items-start">
                <span class="text-sm tracking-wide text-pink-600 dark:text-white"> نسيت كلمة المرور ؟ </span>
            </router-link>
            <label class="flex items-center">
                <span class="ms-2 mr-2 text-sm text-gray-600 text-black/50  dark:text-white"
                    >تذكرني</span
                >
            <!-- <Checkbox name="remember"  /> -->

            </label>
            <!-- <Checkbox name="remember" v-model:checked="form.remember" /> -->
        <!-- <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-pink-400 dark:before:bg-pink-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
          <input id="" type="Your password" placeholder="Your answer" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition">
        </div> -->
        </div>

        <div class="block items-center justify-center">
        <button
            class="w-full rounded-full bg-pink-500 dark:bg-pink-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-pink-600 focus:bg-pink-600 active:bg-pink-800"

            >
            <span class="text-base font-semibold text-white dark:text-gray-900">دخول</span>
        </button>
        <!-- :class="{ 'opacity-25': form.processing }" -->
        <!-- :disabled="form.processing" -->
        <router-link to="/" type="reset" class="   p-3 bordered flex justify-center text-center">
            <span class="text-sm text-center   items-center   tracking-wide text-pink-600 dark:text-pink-400">إنشاء حساب</span>
        </router-link>
    </div>
                    </form>
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>


</template>
