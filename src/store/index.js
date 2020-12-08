import Vue from 'vue'
import Vuex from 'vuex'
import pageData from './modules/pageData'
import widgetData from './modules/widgetData'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pageData,
    widgetData
  }
});
