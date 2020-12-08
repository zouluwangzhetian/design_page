import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/assets/css/reset.css'
import util from './utils';

Vue.config.productionTip = false
Vue.prototype.$util = util;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
