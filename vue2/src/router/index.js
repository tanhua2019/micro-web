import Vue from "vue";
import VueRouter from "vue-router";
import Energy from "../views/energy/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/energy",
    name: "home",
    component: Energy,
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;
