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
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
