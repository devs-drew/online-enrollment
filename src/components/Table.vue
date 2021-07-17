<template>
  <!-- component -->
  <table class="w-full text-left">
    <thead
      class="sticky top-0 w-full overscroll-y-auto bg-gray-200 text-primary"
    >
      <tr>
        <slot name="table-header"></slot>
      </tr>
    </thead>
    <tbody class="text-gray-500">
      <slot name="table-data"></slot>
    </tbody>
  </table>
</template>

<script>
export default {};
</script>

<style lang="postcss">
table thead tr th,
table tbody tr td {
  @apply px-3 py-2;
}

table tbody tr {
  @apply table-row border border-gray-200 cursor-pointer hover:bg-gray-100;
}

table tbody tr td {
  @apply table-cell;
}
</style>
