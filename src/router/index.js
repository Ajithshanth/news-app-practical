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
      redirect: { name: "HeadLines" },
    },

    {
      path: "/head-lines",
      name: "HeadLines",
      component: () => import("../views/HeadLines.vue"),
    },
    {
      path: "/history",
      name: "HistoryDetails",
      component: () => import("../views/HistoryDetails.vue"),
    },
    {
      path: "/:id",
      name: "NewsDetails",
      component: () => import("../views/NewsDetails.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  const date = new Date(); 
  if (to.name == "NewsDetails") {
    var path = to.path.substring(1);
    var history = { path, date }; 
    store.dispatch("addHistory", {
      history,
    });
  } 
  next();
});

export default router;
