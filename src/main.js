import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import '@/assets/css/reset.css'
import '@/assets/css/components/img.css'
import '@/assets/css/components/text.css'
import '@/assets/css/components/swiper.css'
import util from './utils';

Vue.config.productionTip = false
Vue.prototype.$util = util;
Vue.prototype.$toPatch = function toPatch (path) {
  console.log(process.env.VUE_APP_btn)
  // eslint-disable-next-line
  let urlRep = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  urlRep.test(path)
  if (process.env.VUE_APP_btn === 'false' || !urlRep.test(path)) {
    return
  }
  window.location = path
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
