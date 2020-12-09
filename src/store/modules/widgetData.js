import untils from '@/utils/index'
const state = {
  pageData: {
    list: [],
    title: '页面标题',
    statsCode: '',
    theme: 'theme1',
    fixedTop: [],
    fixedBottom: [],
    fixedCustom: [],
    style: {
      backgroundColor: '#fff',
      width: '375px',
      minHeight: '640px'
    }
  },
  selectIndex: 0,
  // 当前点击选中的组件
  selectWg: {},
  configTab: ''
};

const mutations = {
  setSelectWg (state, payload) {
    state.selectWg = untils.deepClone(payload)
  },
  setSelectIndex (state, payload) {
    state.selectIndex = payload
  },
  setConfigTab (state, payload) {
    state.configTab = payload;
  },
  settextContent (state, payload) {
    state.selectWg.value = payload
  },
  setStyle (state, payload) {
    state.selectWg.style[payload.key] = payload.value
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
