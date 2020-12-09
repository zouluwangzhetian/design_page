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
      backgroundImage: ''
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
  setlineHeight (state, payload) {
    state.selectWg.style.lineHeight = payload
  },
  setfontSize (state, payload) {
    state.selectWg.style.fontSize = payload
  },
  setcolor (state, payload) {
    state.selectWg.style.fontColor = payload
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
