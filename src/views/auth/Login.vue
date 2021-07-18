<template>
  <!-- <form class="w-full h-full space-y-5 text-sm" @submit.prevent="handleLogin()">
    <h1 class="text-primary text-lg font-bold text-center">
      Log in to your account
    </h1>
    <p class="text-center">
      Welcome back! Please login to your account to continue
    </p>
    <div class="flex flex-col gap-3">
      <label class="form-label">Email</label>
      <input type="email" />
    </div>
    <div class="flex flex-col gap-3">
      <label class="form-label">Password</label>
      <div class="w-full relative">
        <input class="w-full pr-8" :type="showPassword ? `text` : `password`" />
        <span
          @click="togglePassword"
          class="absolute bottom-3 right-2 w-5 h-5  cursor-pointer"
        >
          <EyeIcon v-if="!showPassword" class="text-gray-500" />
          <EyeOffIcon v-else class="text-gray-500" />
        </span>
      </div>
    </div>
    <p class="text-center bg-red-600 text-white p-1">
      The email or passwords is incorrect.
    </p>
    <p class="simple-router-link">Forgot Password?</p>
    <button class="primary-btn w-full">Sign in</button>
    <p>
      Don't have an account yet?
      <router-link :to="{ name: 'register' }" class="simple-router-link"
        >Register</router-link
      >
    </p>
  </form> -->
  <div
    class="flex flex-col m-auto h-auto md:w-2/4 lg:w-2/4 xl:w-1/2 mb-6 lg:py-6 lg:h-100"
  >
    <div
      class="flex justify-center items-center w-full space-x-3 my-10 lg:hidden"
    >
      <img class="w-8 h-8" src="@/assets/logo.png" alt="logo" />
      <h2 class="text-lg font-bold text-primary tracking-wider uppercase">
        Sample University
      </h2>
    </div>
    <h1 class="text-xl font-bold text-primary mb-3">Login</h1>
    <p>
      Welcome back! Please login to your account to continue
    </p>
    <form class="mt-6">
      <div>
        <label class="text-base font-semibold leading-relaxed text-primary"
          >Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
          class="w-full px-4 py-2 mt-2"
          required="true"
        />
      </div>
      <div class="relative mt-4">
        <label class="text-base font-semibold leading-relaxed text-primary"
          >Password</label
        >
        <input
          :type="showPassword ? `text` : `password`"
          name="password"
          id="password"
          class="w-full px-4 py-2 mt-2"
          required="true"
        />
        <span
          @click="togglePassword"
          class="absolute bottom-3 right-2 w-5 h-5  cursor-pointer"
        >
          <EyeIcon v-if="!showPassword" class="text-gray-500" />
          <EyeOffIcon v-else class="text-gray-500" />
        </span>
      </div>
      <div class="mt-2 text-right">
        <a href="#" class="simple-router-link text-sm">Forgot Password?</a>
      </div>
      <div class="h-10 mt-6">
        <Button primary buttonName="Log in" buttonType="submit"> </Button>
      </div>
    </form>
    <p class="mt-8 text-center">
      Don't have an account yet?
      <router-link :to="{ name: 'register' }" class="simple-router-link"
        >Register</router-link
      >
    </p>
  </div>
</template>

<script>
import { EyeIcon, EyeOffIcon } from "@heroicons/vue/solid";
import { ref } from "vue";
import Button from "@/components/Button";

export default {
  components: { Button, EyeIcon, EyeOffIcon },
  setup() {
    const showPassword = ref(false);

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    return {
      showPassword,
      togglePassword,
    };
  },
};
</script>

<style></style>
