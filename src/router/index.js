import { createRouter, createWebHistory } from "vue-router";
import Authentication from "@/views/auth/Authentication";
import Login from "@/views/auth/Login";
import Register from "@/views/auth/Register";
import Home from "@/views/Home";
import Dashboard from "@/views/Dashboard";
import Something from "@/views/Something";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "/something",
        name: "somethingnew",
        component: Something,
      },
    ],
  },

  {
    path: "/auth",
    name: "auth",
    redirect: "/login",
    component: Authentication,
    children: [
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/register",
        name: "register",
        component: Register,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
