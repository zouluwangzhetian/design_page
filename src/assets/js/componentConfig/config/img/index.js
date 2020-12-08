import img from './img.js';
import swiper from './swiper.js'

export default [
  {
    name: '图片展示',
    icon: 'el-icon-picture-outline',
    content: '添加单张图片',
    value: 'img',
    data: img
  },
  {
    name: '轮播图',
    icon: 'el-icon-files',
    content: '多张图片滚动播放',
    value: 'swiper',
    data: swiper
  }
]
