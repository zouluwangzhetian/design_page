import Vue from 'vue'
import Vuex from 'vuex'
import pageData from './modules/pageData'
import widgetData from './modules/widgetData'
import pageConfig from './modules/pageConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pageData,
    widgetData,
    pageConfig
  }
});
