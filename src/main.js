// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';
import './common/stylus/index.styl';

Vue.config.productionTip = false;
Vue.use(VueRouter);

let router = new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {path: '/goods', component: goods},
    {path: '/seller', component: seller},
    {path: '/ratings', component: ratings}
  ]
});
/* eslint-disable no-new */
new Vue({
  router: router,
  template: '<App/>',
  components: {App}
}).$mount('#app');

router.push('./goods');
