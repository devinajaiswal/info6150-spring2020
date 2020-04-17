import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/flights",
    name: "Flights",
    component: () => import("../views/Flights.vue")
  },
  {
    path: "/user/sign-in",
    name: "Sign In",
    component: () => import("../views/user/SignIn.vue")
  },
  {
    path: "/user/profile",
    name: "Profile",
    component: () => import("../views/user/Profile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    console.log(store.state.username);
    console.log(router.app.$store.getters.isLoggedIn);
    console.log(router.app.$store.getters.getUsername);
    if (router.app.$store.getters.isLoggedIn) {
      next();
    } else {
      next("/sign-in");
    }
  } else {
    next();
  }
});

export default router;
