export default [{
  type: 'swiper',
  name: '图片轮播',
  value: [
    {
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
      link: 'https://www.baidu.com'
    },
    {
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
      link: 'https://www.baidu.com'
    },
    {
      img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3922290090,3177876335&fm=26&gp=0.jpg',
      link: 'https://www.baidu.com'
    }
  ],
  interval: 3000, // 自动切换的时间间隔，单位为毫秒
  pagination: false, // 是否展示底部分页器
  loop: true, // 循环
  disableOnInteraction: false, // 触碰之后保持自动轮播
  style: {
    margin: '0px 0px 0px 0px',
    height: 250
  }
}]
