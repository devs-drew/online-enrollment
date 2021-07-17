<template>
  <aside class="w-full h-full overflow-y-auto">
    <div class="w-full flex lg:hidden justify-end px-5">
      <XIcon class="w-6 h-6 text-gray-600 cursor-pointer" @click="toggleMenu" />
    </div>

    <div class="flex flex-col justify-center items-center w-full my-5">
      <img class="w-12 h-12" src="@/assets/logo.png" alt="logo" />
      <h2
        class="text-sm sm:text-lg font-bold text-primary tracking-wider uppercase"
      >
        Sample University
      </h2>
    </div>

    <div class="mt-6">
      <ul>
        <router-link
          to="/dashboard"
          @click="$store.commit('closeMenu')"
          tag="li"
          class="router-link dark:from-gray-700 dark:to-gray-800"
        >
          <span class="text-left">
            <ViewGridIcon class="nav-icon" />
          </span>
          <span class="mx-4">
            Dashboard
          </span>
        </router-link>

        <router-link
          to="/something"
          @click="$store.commit('closeMenu')"
          tag="li"
          class="router-link dark:from-gray-700 dark:to-gray-800"
        >
          <span class="text-left">
            <ClipboardListIcon class="nav-icon" />
          </span>
          <span class="mx-4">
            Master List
          </span>
        </router-link>

        <router-link
          to="/login"
          @click="$store.commit('closeMenu')"
          tag="li"
          class="router-link dark:from-gray-700 dark:to-gray-800"
        >
          <span class="text-left">
            <ArchiveIcon class="nav-icon" />
          </span>
          <span class="mx-4">
            Faculty
          </span>
        </router-link>

        <router-link
          to="/login"
          @click="$store.commit('closeMenu')"
          tag="li"
          class="router-link dark:from-gray-700 dark:to-gray-800"
        >
          <span class="text-left">
            <UserGroupIcon class="nav-icon" />
          </span>
          <span class="mx-4">
            Sections
          </span>
        </router-link>

        <router-link
          to="/login"
          @click="$store.commit('closeMenu')"
          tag="li"
          class="router-link dark:from-gray-700 dark:to-gray-800"
        >
          <span class="text-left">
            <CollectionIcon class="nav-icon" />
          </span>
          <span class="mx-4">
            Prospectus
          </span>
        </router-link>

        <router-link
          to="/login"
          @click="$store.commit('closeMenu')"
          tag="li"
          class="router-link dark:from-gray-700 dark:to-gray-800"
        >
          <span class="text-left">
            <BookOpenIcon class="nav-icon" />
          </span>
          <span class="mx-4">
            Programs
          </span>
        </router-link>

        <router-link
          to="/login"
          @click="$store.commit('closeMenu')"
          tag="li"
          class="router-link dark:from-gray-700 dark:to-gray-800"
        >
          <span class="text-left">
            <UserCircleIcon class="nav-icon" />
          </span>
          <span class="mx-4">
            Administration
          </span>
        </router-link>
      </ul>
    </div>
  </aside>
</template>

<script>
import {
  XIcon,
  ViewGridIcon,
  ClipboardListIcon,
  ArchiveIcon,
  UserGroupIcon,
  CollectionIcon,
  BookOpenIcon,
  UserCircleIcon,
} from "@heroicons/vue/outline";
import { useStore } from "vuex";
export default {
  components: {
    XIcon,
    ViewGridIcon,
    ClipboardListIcon,
    ArchiveIcon,
    UserGroupIcon,
    CollectionIcon,
    BookOpenIcon,
    UserCircleIcon,
  },
  setup() {
    const store = useStore();
    const toggleMenu = () => {
      store.commit("toggleMenu");
    };
    return {
      toggleMenu,
    };
  },
};
</script>

<style lang="postcss" scoped>
.nav-icon {
  @apply w-6 h-6;
}
.router-link {
  @apply w-full text-base font-normal text-gray-400 flex items-center p-4 my-2;
}

.router-link-active,
.router-link-exact-active {
  @apply text-primary font-semibold transition-colors duration-500 border-l-4 border-primary bg-gradient-to-r from-blue-100 to-white;
}
</style>

// ViewGridIcon, // ClipboardListIcon, // ArchiveIcon, // UserGroupIcon, //
CollectionIcon, // BookOpenIcon, // UserCircleIcon,
