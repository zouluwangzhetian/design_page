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
  setPageData (state, payload) {
    state.pageData = payload
  },
  // 选择的组件
  setSelectWg (state, payload) {
    state.selectWg = untils.deepClone(payload)
  },
  // 选择的组件下标
  setSelectIndex (state, payload) {
    state.selectIndex = payload
  },
  // 组件操作栏/页面操作栏切换
  setConfigTab (state, payload) {
    state.configTab = payload;
  },
  settextContent (state, payload) {
    state.selectWg.value = payload
  },
  // 设置组件样式
  setStyle (state, payload) {
    state.selectWg.style[payload.key] = payload.value
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
