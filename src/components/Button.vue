// * Wrap this components to container for size manipulation

<template>
  <button
    :type="buttonType"
    class="w-full h-full flex justify-center items-center space-x-3 rounded-md"
    :class="{
      primary: primary,
      secondary: secondary,
      danger: danger,
    }"
    @click="handleEvent"
  >
    <slot><!-- icon --></slot>
    <span>{{ buttonName }}</span>
  </button>
</template>

<script>
export default {
  props: {
    buttonName: {
      type: String,
    },
    buttonType: {
      type: String,
      default: "button",
    },
    primary: {
      type: Boolean,
    },
    secondary: {
      type: Boolean,
    },
    plain: {
      type: Boolean,
    },
    danger: {
      type: Boolean,
    },
  },
  emits: ["customEvent"],
  setup(props, { emit }) {
    const handleEvent = () => {
      emit("customEvent");
    };
    return {
      handleEvent,
    };
  },
};
</script>

<style lang="postcss" scoped>
.primary {
  @apply text-white bg-primary px-3 py-1 hover:bg-primary-dark hover:shadow-lg transition-colors duration-150 ease-in-out;
}

.secondary {
  @apply text-gray-600 font-semibold px-3 py-1 border-2 border-primary bg-transparent hover:text-primary;
}

.danger {
  @apply text-red-500 hover:text-red-600;
}
</style>
