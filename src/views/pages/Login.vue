<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
        <Head title="Log in" />

    <div  class=" h-screen bg-white/80 dark:bg-slate-900 text-black/50  dark:text-white/50">
        <img
            id="bg_welcome_page"
            class="absolute -left-2 top-0 max-w-[230px] lg:max-w-[600px]"
            src="assets/svg/bg_welcome_page.svg"
        />
        <div
            class=" selection:bg-[#20C0FF] selection:text-white"
        >
        <header>
    <input type="checkbox" name="hbr" id="hbr" class="hbr peer hidden" hidden aria-hidden="true">
            <nav  class="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur navbar shadow-md shadow-gray-600/5 peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
                <div class="xl:container m-auto px-6 md:px-12">
                    <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0">
                        <div class="w-full flex justify-between lg:w-auto">
                            <Link :href="route('welcome')" aria-label="logo" class="flex space-x-2 items-center">
                                <div aria-hidden="true" class="flex space-x-1">
                                    <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-blue-200"></div>
                                    <div class="h-6 w-2 bg-primary dark:bg-blue-400"></div>
                                </div>
                                <span class="text-base font-bold text-blue-600 dark:text-white">OssolTrust أصول ترست</span>
                            </Link>
                            <!-- <ThemeToggle/> -->
                            <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                                <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                            </label>
                        </div>
                        <div class="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-slate-900     lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                            <div class="w-full space-y-2 border-blue-600/10 dark:border-blue-600 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                                <Link :href="route('welcome')" class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-primary/10 dark:focus:before:bg-primaryLight/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                    <span class="relative text-bold font-semibold text-blue-600  dark:text-primaryLight">خروج</span>
                                </Link>

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
        <Link href="">
          <!-- <img src="images/tailus.svg" class="w-40 dark:hidden" alt="tailus logo" />
          <img src="images/logo.svg" class="w-40 hidden dark:block" alt="tailus logo" /> -->
        </Link>
      </div>
    <div class="mt-12 rounded-2xl border bg-gray-50 dark:border-gray-700 dark:bg-gray-800 -mx-6 sm:-mx-10 p-8 sm:p-10">
      <h3 class="text-2xl font-semibold text-center text-gray-700 dark:text-white">قم بتسجيل الدخول</h3>
      <div class="mt-12  flex flex-wrap sm:grid gap-2 grid-cols-2">
        <button
          class="w-full h-11  flex justify-center items-center rounded-full border border-gray-300/75 bg-white px-6 transition active:bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-800 dark:hover:border-gray-700"
        >
          <div class="w-max mx-auto flex items-center justify-center space-x-4">
            <!-- <img src="assets/svg/ic_google.svg" class="w-5" alt="" /> -->
            <span class="block w-max text-sm font-semibold tracking-wide text-cyan-700 dark:text-white"
              >osool trust </span
            >
        </div>
    </button>

      </div>

                  <form @submit.prevent="submit" class="mt-10 space-y-8 dark:text-white ">

                  <div>
                            <InputLabel class=" text-black/50  dark:text-white text-right" for="email" value="البريد الإلكتروني" />

                            <TextInput
                                id="email"
                                type="email"
                                class="mt-1 block w-full text-black/50  text-center"
                                v-model="form.email"
                                required
                                autofocus
                                autocomplete="username"
                            />

                            <InputError class="mt-2 text-black/50  dark:text-white" :message="form.errors.email" />
        </div>

                <div class="mt-4">
                    <InputLabel class="text-black/50  dark:text-white text-right" for="password" value="كلمة المرور" />

                    <TextInput
                        id="password"
                        type="password"
                        class="mt-1 block w-full text-black text-center"
                        v-model="form.password"
                        required
                        autocomplete="current-password"
                    />

                    <InputError class="mt-2" :message="form.errors.password" />
                </div>
            <div class="flex justify-between">

                <Link v-if="canResetPassword"
                :href="route('password.request')"  class="-mr-3 w-max p-3 flex items-start">
                <span class="text-sm tracking-wide text-sky-600 dark:text-sky-400"> نسيت كلمة المرور ؟ </span>
            </Link>
            <label class="flex items-center">
                <span class="ms-2 mr-2 text-sm text-gray-600 text-black/50  dark:text-white"
                    >تذكرني</span
                >
                <Checkbox name="remember" v-model:checked="form.remember" />
            </label>
        <!-- <div class="w-full relative before:absolute before:bottom-0 before:h-0.5 before:left-0 before:origin-right focus-within:before:origin-left before:right-0 before:scale-x-0 before:m-auto before:bg-sky-400 dark:before:bg-sky-800 focus-within:before:!scale-x-100 focus-within:invalid:before:bg-red-400 before:transition before:duration-300">
          <input id="" type="Your password" placeholder="Your answer" class="w-full bg-transparent pb-3  border-b border-gray-300 dark:placeholder-gray-300 dark:border-gray-600 outline-none  invalid:border-red-400 transition">
        </div> -->
        </div>

        <div class="block items-center justify-center">
        <button
            class="w-full rounded-full bg-sky-500 dark:bg-sky-400 h-11 flex items-center justify-center px-6 py-3 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800"

            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
            >
            <span class="text-base font-semibold text-white dark:text-gray-900">دخول</span>
        </button>
        <Link href="#" type="reset" class="   p-3 bordered flex justify-center text-center">
            <span class="text-sm text-center   items-center   tracking-wide text-sky-600 dark:text-sky-400">إنشاء حساب</span>
        </Link>
    </div>
      </form>
    </div>

    </div>
    </div>
    </div>
    </div>
    </div>


</template>
