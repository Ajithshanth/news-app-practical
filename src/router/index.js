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
    // {
    //   path: "/api-key",
    //   name: "ApiKey",
    //   component: () => import("../components/ApiKey.vue"),
    // },
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

  // console.log("History:", to);
  //console.log("date:", date);

  if (to.name == "NewsDetails") {
    var path = to.path.substring(1);
    var history = { path, date };
    // console.log(history);
    // console.log(history.path);
    // console.log(history.date);

    store.dispatch("addHistory", {
      history,
    });
  }

  next();
});

export default router;
