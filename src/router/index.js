import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/auth",
    component: () => import("../views/AuthorizationPage.vue"),
  },
  {
    path: "/",
    component: () => import("../views/MainPage.vue"),
  },
  {
    path: "/:id",
    name: "movie",
    component: () => import("../views/MoviePage.vue"),
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
