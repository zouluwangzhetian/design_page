const swiper1 = require('@/assets/img/swiper1.png')
const swiper2 = require('@/assets/img/swiper2.png')
const swiper3 = require('@/assets/img/swiper3.png')
export default [{
  type: 'swiper',
  name: '图片轮播',
  imglist: [
    {
      img: swiper1,
      link: ''
    },
    {
      img: swiper2,
      link: ''
    },
    {
      img: swiper3,
      link: ''
    }
  ],
  interval: 3000, // 自动切换的时间间隔，单位为毫秒
  pagination: false, // 是否展示底部分页器
  loop: true, // 循环
  disableOnInteraction: false, // 触碰之后保持自动轮播
  style: {
    isAuto: true,
    margin: '0px 0px 0px 0px',
    height: 250
  }
}]
