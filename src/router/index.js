// Imports
import Vue from "vue";
import Router from "vue-router";
//import store from "../store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/", 
      redirect: { name: 'HeadLines' } 
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
      path: "/head-lines/:id", 
      name:"DetailView",
      component: () => import("../views/NewsDetails.vue"),
    },
  ],
});
router.beforeEach((to, from, next) => {
 // console.log("From:",from)
 // console.log("To:",to)
  next();
});


export default router;
