import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from './routers';
import App from './App'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource);

const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  transitionOnLoad: false,
});

routerMap(router);

router.start(App, '#app');
