import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../views/Welcome.vue"),
  },
  {
    path: "/acceuil",
    name: "acceuil",
    component: () => import("../views/GestionDesPages.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
