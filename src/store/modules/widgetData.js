import untils from '@/utils/index'
const setListDate = (state, payload) => {
  console.log(state.pageData.list);
  state.pageData.list.splice(state.selectIndex, 1, untils.deepClone(payload))
  // state.pageData.list[state.selectIndex] = untils.deepClone(payload)
}
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
  // 设置文本框文字内容
  settextContent (state, payload) {
    state.selectWg.value = payload
    setListDate(state, state.selectWg)
  },
  // 设置组件样式
  setStyle (state, payload) {
    state.selectWg.style[payload.key] = payload.value
    setListDate(state, state.selectWg)
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
