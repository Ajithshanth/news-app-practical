// Imports
import Vue from "vue";
import Router from "vue-router";
import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: { name: "Home" },
    },

    {
      path: "/home",
      name: "Home",
      component: () => import("../views/Home/HomePage.vue"),
    },

 
  ],
});
router.beforeEach((to, from, next) => {
  const date = new Date(); 
  if (to.name == "Home") {
    var path = to.path.substring(1);
    var history = { path, date }; 
    store.dispatch("addHistory", {
      history,
    });
  } 
  next();
});

export default router;
