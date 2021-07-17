<template>
  <div class="flex relative w-full h-screen overflow-hidden">
    <!-- OVERLAY FOR SIDEBAR -->
    <div
      class="w-screen h-screen absolute top-0 left-0 lg:hidden bg-gray-400 opacity-50 z-40 transition-all duration-500"
      :class="$store.state.menuIsOpen ? 'block' : 'hidden'"
    ></div>
    <!-- SIDEBAR -->

    <div
      class="w-80 absolute z-50 lg:z-0 lg:static lg:block h-screen bg-white border-r border-gray-200 py-5 overflow-hidden transition-all duration-500 ease-linear"
      :class="$store.state.menuIsOpen ? 'left-0' : '-left-full'"
    >
      <Sidebar />
    </div>

    <!-- MAIN -->
    <div class="w-full lg:w-full overflow-y-auto">
      <section class="sticky top-0 w-full overflow-hidden bg-white shadow z-10">
        <Header />
      </section>
      <section class="w-full p-5">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
export default {
  components: { Header, Sidebar },
};
</script>

<style></style>
