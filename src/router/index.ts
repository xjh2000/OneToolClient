import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/layout/HomeView.vue";
import { useUserStore } from "@/stores/userStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/components/Login.vue"),
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/components/AboutView.vue"),
      meta: { requiresAuth: true },
    },
  ],
});

// This is a navigation guard. 
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next({ name: 'login' }); // redirect to login page
  } else {
    next();
  }

});

export default router;
