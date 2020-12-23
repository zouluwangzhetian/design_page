import untils from '@/utils/index'
const img = require('@/assets/img/1.png')
const swiper1 = require('@/assets/img/swiper1.png')
const setListData = (state, payload) => {
  state.pageData.list.splice(state.selectIndex, 1, untils.deepClone(payload))
}

const fatherImg = require('@/assets/img/4.png')
// const partition = require('@/assets/img/5.png')
const sonImg = require('@/assets/img/6.png')

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
    console.log('aaaa', payload);
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
    state.selectWg.imglist[index][key] = value
    setListData(state, state.selectWg)
  },
  // 添加图片
  addImgCt (state) {
    state.selectWg.imglist.push({
      img: img,
      link: ''
    })
    setListData(state, state.selectWg)
  },
  // 删除图片
  delImgCt (state, payload) {
    state.selectWg.imglist.splice(payload, 1)
    setListData(state, state.selectWg)
  },
  // 设置轮播图基础设置
  setSwiperCt (state, { key, index, value }) {
    state.selectWg.imglist[index][key] = value
    setListData(state, state.selectWg)
  },
  // 添加轮播图片
  addSwiperCt (state) {
    state.selectWg.imglist.push({
      img: swiper1,
      link: ''
    })
    setListData(state, state.selectWg)
  },
  // 删除轮播图片
  delSwiperCt (state, payload) {
    state.selectWg.imglist.splice(payload, 1)
    setListData(state, state.selectWg)
  },
  // 设置轮播图基础设置
  setSwiper (state, payload) {
    state.selectWg[payload.key] = payload.value
    setListData(state, state.selectWg)
  },
  // 设置视频基础设置
  setVideo (state, payload) {
    state.selectWg.videoAttr[payload.key] = payload.value
    setListData(state, state.selectWg)
  },
  // 添加折叠面板儿子
  addCollapseSonCt (state, index) {
    state.selectWg.sonlist[index].list.push({
      img: sonImg,
      link: ''
    })
    setListData(state, state.selectWg)
  },
  // 添加折叠面板老子
  addCollapseCt (state) {
    state.selectWg.sonlist.push({
      img: fatherImg,
      list: []
    })
    setListData(state, state.selectWg)
  },
  // 添加折叠面板父类类链接
  setCollapseFatherCt (state, { key, index, value }) {
    state.selectWg.sonlist[index][key] = value
    setListData(state, state.selectWg)
  },
  // 添加折叠面板子类链接
  setCollapseSonCt (state, { key, index, value, sonIndex }) {
    state.selectWg.sonlist[index].list[sonIndex][key] = value
    setListData(state, state.selectWg)
  }
};

export default {
  namespaced: true,
  state,
  mutations
};
