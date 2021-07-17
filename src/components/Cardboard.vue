<template>
  <div class="flex flex-wrap">
    <Card
      title="Administrators"
      subtitle="Number of admin"
      :totalNumber="1463"
      baseColor="text-primary"
    >
      <template v-slot:default>
        <UserCircleIcon class="w-10 h-10 text-primary" />
      </template>
    </Card>

    <Card
      title="Master List"
      subtitle="Number of pre-enrolled"
      :totalNumber="2000"
      baseColor="text-blue-500"
    >
      <template v-slot:default>
        <ClipboardListIcon class="w-10 h-10 text-blue-500" />
      </template>
    </Card>

    <Card
      title="Courses"
      subtitle="Number of courses"
      :totalNumber="20"
      baseColor="text-red-500"
    >
      <template v-slot:default>
        <CollectionIcon class="w-10 h-10 text-red-500" />
      </template>
    </Card>

    <Card
      title="Programs"
      subtitle="Number of program"
      :totalNumber="20"
      baseColor="text-yellow-500"
    >
      <template v-slot:default>
        <BookOpenIcon class="w-10 h-10 text-yellow-500" />
      </template>
    </Card>
  </div>
</template>

<script>
import Card from "./Card.vue";
import {
  UserCircleIcon,
  ClipboardListIcon,
  CollectionIcon,
  BookOpenIcon,
} from "@heroicons/vue/outline";

export default {
  components: {
    Card,
    UserCircleIcon,
    ClipboardListIcon,
    CollectionIcon,
    BookOpenIcon,
  },
};
</script>

<style></style>
