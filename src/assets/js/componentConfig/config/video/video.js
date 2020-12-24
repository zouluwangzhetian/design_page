const bgImg = require('@/assets/img/2.png')
const video = require('@/assets/img/视频.mp4')
const poster = require('@/assets/img/视频.png')
export default [{
  type: 'video',
  name: '视频',
  videoAttr: {
    src: video, // 视频地址
    poster, // 视频头图
    controls: true // 工具栏
  },
  posterName: '', // 头图文件名称
  videoName: '', // 视频名称
  bgImgName: '', // 背景图名称
  backgroundImg: bgImg, // 背景图
  style: {
    margin: '0px 0px 0px 0px',
    backgroundColor: '',
    videoWidth: 100, // 视频宽度 百分比
    videoHeight: 100, // 视频高度 百分比
    videoTop: 0, // 视频距父级顶部距离
    videoLeft: 0 //  视频距父级左边距离
  }
}]
