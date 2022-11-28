import { createRouter, createWebHistory } from "vue-router"

export const routes = [
  { path: "/", name: "home", component: () => import("./../views/Home.vue") },
  { path: "/about", name: "about", component: () => import("./../views/About.vue") },
  { path: "/news", name: "news", component: () => import("./../views/News.vue") },
  { path: "/media", name: "media", component: () => import("./../views/Media.vue") },
  { path: "/update", name: "update", component: () => import("./../views/Update.vue") },
  { path: "/forums", name: "forums", component: () => import("./../views/Forums.vue") },
  { path: "/download", name: "download", component: () => import("./../views/Download.vue") }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
