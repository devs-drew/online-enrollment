<template>
  <header>
    <div
      class="flex lg:flex-row-reverse justify-between items-center p-6 w-full h-12 border-b border-gray-200"
      :class="$store.state.menuIsOpen ? 'flex-row-reverse' : ''"
    >
      <MenuIcon
        class="lg:hidden w-7 h-7 cursor-pointer text-gray-600"
        :class="$store.state.menuIsOpen ? 'hidden' : 'block'"
        @click="toggleMenu"
      />

      <div class="flex items-center space-x-2">
        <div class="flex items-center space-x-3">
          <h3 class="text-sm">Hi, User!</h3>
          <img
            src="@/assets/default-profile.jpg"
            class="w-7 h-7
              rounded-full"
          />
        </div>

        <div
          class="flex flex-col justify-center items-center relative w-6 h-6 rounded-md bg-blue-200 text-blue-500 cursor-pointer"
        >
          <BellIcon class="w-5 h-5" />
          <span
            class="badge absolute top-0 right-0 w-2 h-2 rounded-full bg-red-600"
          ></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { MenuIcon, BellIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
export default {
  components: { MenuIcon, BellIcon },
  setup() {
    const store = useStore();
    const toggleMenu = () => {
      store.commit("toggleMenu");
      console.log(store.state.menuIsOpen);
    };

    return {
      toggleMenu,
    };
  },
};
</script>
