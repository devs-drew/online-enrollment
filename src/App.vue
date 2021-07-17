<template>
  <router-view />
</template>

<script>
// import { useRouter, useRoute } from "vue-router";
// import firebase from "firebase";
// import { onBeforeMount } from "vue";

export default {
  setup() {
    // const router = useRouter();
    // const route = useRoute();
    // onBeforeMount(() => {
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (!user) {
    //       router.replace("/auth/login");
    //     } else if (
    //       route.path === "/auth/login" ||
    //       route.path === "/auth/register"
    //     ) {
    //       router.replace("/");
    //     }
    //   });
    // });
  },
};
</script>
