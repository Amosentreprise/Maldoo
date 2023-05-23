import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: () => import("../views/Welcome.vue"),
  },
  {
    path: "/",
    name: "acceuil",
    component: () => import("../views/GestionDesPages.vue"),
    children: [
      {
        path: "/Home",
        name: "Home",
        component: () => import("../views/entites/Home.vue"),
      },
      {
        path: "/Mdrive",
        name: "Mdrive",
        component: () => import("../components/Mdrive.vue"),
      },
      {
        path: "/Mfresh",
        name: "Mfresh",
        component: () => import("../components/Mfresh.vue"),
      },
      {
        path: "/HelloGouter",
        name: "Hellogoute",
        component: () => import("../components/Hellogoute.vue"),
      },
      {
        path: "/Mcafe",
        name: "Mcafe",
        component: () => import("../components/Mcafe.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
