
<script setup>
</script>

<template>
    
  <footer class="w-full bg-gray-100    dark:bg-gray-900 py-16">
  <div class="md:px-12  lg:px-28">
    <div class="  m-auto space-y-2 text-gray-600 dark:text-gray-300 ">
      <div class="flex justify-between text-center">

        <img src="@/assets/imgs/png/ic_bride_girl.png" alt="logo tailus" class="m-auto w-30 scale-x-[-1]" />
        <ul
          role="list"
          class="flex flex-col items-center justify-center m-auto gap-4 py-4 sm:flex-row sm:gap-8"
        >
          <li role="listitem"><router-link :to="{name:'index_page'}" class="hover:text-pink-500">الرئيسية</router-link></li>
          <li role="listitem"><a href="#dresses-section" class="hover:text-pink-500">فساتين الزفاف</a></li>
          <li role="listitem"><a href="#accessories-section" class="hover:text-pink-500">الإكسسوارات</a></li>
          <li role="listitem"><a href="#about" class="hover:text-pink-500">من نحن</a></li>
        </ul>
      </div>
      <div class="m-auto flex w-max items-center justify-between space-x-4">
        <a href="tel:+967730450006" aria-label="call">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="m-auto w-5"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd" fill="#6AFA7D"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            ></path>
          </svg>
        </a>
        <a href="mailto:hello@mail.com" aria-label="send mail">
          <img class="w-5" src="../assets/imgs/svg/ic_email.svg" alt="" >
        </a>
        <a href="mailto:hello@mail.com" aria-label="send mail">
          <img class="w-5" src="../assets/imgs/svg/ic_whatsapp.svg" alt="" >
        </a>
        
        <!-- <a href="#" title="linkedin" target="blank" aria-label="linkedin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="m-auto w-5"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            ></path>
          </svg>
        </a> -->
      </div>

      <div class="text-center">
        <span class="text-sm tracking-wide"
          ><span id="year">2024 جميع الحقوق محفوظة لدى </span>  <span class="font-tharwat text-pink-400 text-xl">أناقة فرحتي&copy;</span></span
        >
      </div>
    </div>
  </div>
</footer>
                                    
</template>