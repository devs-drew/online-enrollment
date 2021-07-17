<template>
  <div class="flex flex-col gap-3">
    <label class="form-label">{{ label }}</label>
    <input :type="type" :v-model="newModalData" />
    <p class="text-red-500">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { watch, toRefs, ref } from "vue";
export default {
  props: {
    label: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
    },
    test: {
      type: Boolean,
    },
    vModel: {
      type: String,
    },
  },

  setup(props) {
    const { vModel } = toRefs(props);
    const newModalData = ref("");

    watch(vModel, (newData) => {
      newModalData.value = newData;
      console.log(newModalData.value);
    });

    return {
      newModalData,
    };
  },
};
</script>

<style></style>
