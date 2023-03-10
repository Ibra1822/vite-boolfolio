import { createRouter, createWebHashHistory } from "vue-router";

import home from "./pages/home.vue";
import about from "./pages/about.vue";
import projects from "./pages/projects.vue";
import DetailProject from "./pages/DetailProject.vue";
import error404 from "./pages/error404.vue";
const router = createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: home,
    },
    {
      path: "/chi-siamo",
      name: "about",
      component: about,
    },
    {
      path: "/progetti",
      name: "projects",
      component: projects,
    },
    {
      path: "/dettagli-progetti/:slug",
      name: "dettagli",
      component: DetailProject,
    },
    {
      path: "/:pathMatch(.*)*",
      component: error404,
    },
  ],
});

export { router };
