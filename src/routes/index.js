import Vue from "vue";
import VueRouter from "vue-router";

import { Home, Catalog, Lab } from "../pages";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Home },
  { path: "/catalogo", component: Catalog },
  { path: "/orcamento", component: Lab }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
