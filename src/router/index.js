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
    path: "/sign-in",
    name: "Sign In",
    component: () => import("../views/SignIn.vue")
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/order",
    name: "Order",
    component: () => import("../views/Order.vue")
  },
  {
    path: "/Sydney",
    name: "Flights",
    component: () => import("../views/Australia.vue")
  },
  {
    path: "/London",
    name: "Flights",
    component: () => import("../views/London.vue")
  },
  {
    path: "/Paris",
    name: "Flights",
    component: () => import("../views/Paris.vue")
  },
  {
    path: "/Shanghai",
    name: "Flights",
    component: () => import("../views/Shanghai.vue")
  },
  {
    path: "/Chengdu",
    name: "Flights",
    component: () => import("../views/Chengdu.vue")
  },
  {
    path: "/Mumbai",
    name: "Flights",
    component: () => import("../views/Mumbai.vue")
  },
  {
    path: "/Hotels",
    name: "Flights",
    component: () => import("../views/Hotels.vue")
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
