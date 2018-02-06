// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
let Bootstrap = require('bootstrap')
var VueFire = require('vuefire')

import jQuery from 'jquery'
global.jQuery = jQuery
global.$ = jQuery

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Vuex from 'vuex' */
import { store } from './store.js'

import Main from './Main.vue'
import Home from './Home.vue'
import OtherStuff from './OtherStuff.vue'
import Sorter from './pages/Sorter.vue'

Vue.use(VueRouter)
Vue.use(VueFire)
/* Vue.use(Vuex) */
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/acao', component: OtherStuff, name: 'OtherStuff' },
  { path: '/sorter', component: Sorter, name: 'Sorter' }
]

const router = new VueRouter({
  routes: routes
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { Main, Home, OtherStuff },
  template: '<Main/>'
})
