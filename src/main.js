import Vue from 'vue'
import App from './App.vue'
//引入路由
import VueRouter from 'vue-router'
//use一下
Vue.use(VueRouter)

import faxian from './components/faxian.vue'
import my from './components/my.vue';
import friend from './components/friend.vue';
import shop from './components/shop.vue';
import musician from './components/musician.vue';
import download from './components/download.vue';
Vue.config.productionTip = false

const routes = [{
    path: "/",
    component: faxian
  },
  {
    path: "/find",
    component: faxian
  },
  {
    path: "/my",
    component: my
  },
  {
    path: "/friend",
    component: friend
  },
  {
    path: "/shop",
    component: shop
  },
  {
    path: "/musician",
    component: musician
  },
  {
    path: "/download",
    component: download
  }
]
const router = new VueRouter({
  routes
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')