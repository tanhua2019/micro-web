import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../views/index";
import Select from "../views/select";
const routes = [
  // 首页
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  // 选车内容
  {
    path: "/select",
    name: "Select",
    component: Select,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
