import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RegistrationView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import NotFoundView from "../views/NotFoundView.vue";

// define routes
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: RegistrationView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFoundView,
  },
];

// create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
