const state = {
  pageData: {
    list: [
      // {
      //   type: 'text',
      //   name: '文本描述',
      //   value: '这是一段文本',
      //   link: '',
      //   key: 123123123,
      //   backgroundColor: '',
      //   style: {
      //     margin: '0px 0px 0px 0px'
      //   }
      // }
    ],
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
  // 当前点击选中的组件
  selectWg: {},
  configTab: ''
};

const mutations = {
  setSelectWg (state, payload) {
    console.log(payload)
    state.selectWg = payload
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
