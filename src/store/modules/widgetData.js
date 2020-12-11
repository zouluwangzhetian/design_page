import untils from '@/utils/index'
const setListData = (state, payload) => {
  state.pageData.list.splice(state.selectIndex, 1, untils.deepClone(payload))
}
const setImgList = (state, { key, index, value }) => {
  console.log(state.selectWg)
  let data = untils.deepClone(state.selectWg.imglist[index])
  data[key] = value
  state.selectWg.imglist.splice(index, 1, data)
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
  selectIndex: null,
  // 当前点击选中的组件
  selectWg: {},
  configTab: ''
};

const mutations = {
  // 设置整体页面初始状态(beta版)
  setPageData (state, payload) {
    state.pageData = payload
  },
  // 设置组件列表
  setList (state, payload) {
    state.pageData.list = payload
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
    setListData(state, state.selectWg)
  },
  // 设置图片显示列数
  setimgCol (state, payload) {
    state.selectWg.col = payload
    setListData(state, state.selectWg)
  },
  // 设置组件样式
  setStyle (state, payload) {
    state.selectWg.style[payload.key] = payload.value
    setListData(state, state.selectWg)
  },
  // 设置图片基础设置
  setImgCt (state, { key, index, value }) {
    setImgList(state, { key, index, value })
  },
  // 添加图片
  addImgCt (state, payload) {
    state.selectWg.imglist.push({
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
      link: 'https://www.baidu.com'
    })
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
