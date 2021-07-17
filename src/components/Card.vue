<template>
  <div class="w-full md:w-1/2 xl:w-1/3 pt-3 md:pr-2">
    <div
      class="flex justify-between items-center bg-white border rounded-lg shadow p-3 overflow-hidden"
    >
      <div class="flex">
        <div class="mr-4">
          <slot></slot>
        </div>
        <div>
          <h1 class="text-base font-medium" :class="baseColor">
            {{ title }}
          </h1>
          <p class="text-sm text-gray-600 font-light">
            {{ subtitle }}
          </p>
        </div>
      </div>
      <h1 class="font-bold">
        {{ totalNumber }}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    totalNumber: {
      type: Number,
      default: 0,
    },
    baseColor: {
      type: String,
    },
  },
};
</script>

<style></style>
