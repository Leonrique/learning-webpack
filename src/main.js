// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Vue from "vue";
import VueRouter from "vue-router";
import Main from "./Main.vue";
import Home from "./Home.vue";
import OtherStuff from "./OtherStuff.vue";
import VueFire from "vuefire"

Vue.use(VueRouter);
Vue.use(VueFire);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home, name:"Home" },
  { path: "/acao", component: OtherStuff, name:"OtherStuff" }
];

const router = new VueRouter({
  routes: routes
});

new Vue({
  el: "#app",
  router: router,
  components: { Main, Home, OtherStuff },
  template: "<Main/>"
});
