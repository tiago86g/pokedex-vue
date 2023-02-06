import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";

export enum RouteNames {
  Home = "/",
  Pokemon = "/pokemon/:id",
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: RouteNames.Pokemon,
      name: "Pokemon",
      component: () => import("../views/PokemonView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
