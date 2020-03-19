import Vue from "vue";
import App from "./App";
import { VueRouter } from "./vue-router";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

Vue.use(VueRouter);

const vue_router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/product",
      component: Product
    }
  ]
});

/* eslint-disable no-new */
const vm = new Vue({
  el: "#app",
  template: "<App/>",
  vue_router: vue_router, // 作为vue构造函数的参数传递
  components: { App }
});

console.log(vm);
