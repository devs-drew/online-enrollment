<template>
  <!-- <div class="w-full h-full">
    <section class="flex flex-col items-center h-screen md:flex-row ">
      <div
        class="relative hidden w-full h-screen bg-primary lg:block md:w-1/3 xl:w-1/3"
      >
        <div class="flex items-center gap-3 relative z-10 m-10 text-left">
          <img class="w-8 h-8" src="@/assets/logo.png" alt="logo" />
          <h2 class="text-lg font-bold text-white tracking-wider uppercase">
            Sample University
          </h2>
        </div>
      </div>
      <div
        class="flex flex-col w-full h-auto px-6 py-2 md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 lg:px-16 xl:px-12 bg-red-600"
      >
        <router-view></router-view>
      </div>
    </section>
  </div> -->
  <div class="flex w-full h-full overflow-hidden">
    <section class="hidden lg:block lg:w-102 h-full bg-red-500">
      left side
    </section>
    <section class="flex w-full h-auto overflow-y-auto">
      <div class="m-auto w-full p-5">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>
