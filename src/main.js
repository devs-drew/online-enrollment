import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/main.css";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTaxeDTK9LnNU03A4gh7ygcAt5N8sjZb4",
  authDomain: "vue-login-31fd3.firebaseapp.com",
  projectId: "vue-login-31fd3",
  storageBucket: "vue-login-31fd3.appspot.com",
  messagingSenderId: "295446233290",
  appId: "1:295446233290:web:d8ad534bfd15a633a07433",
};

firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
