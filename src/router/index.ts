import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },

    {
      path: "/dashboard",
      name: "dashboard",
      component: () =>
        import("@/views/app/dashboard/components/DashboardView.vue"),
    },
  ],
});

export default router;
