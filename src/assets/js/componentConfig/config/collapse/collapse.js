const fatherImg = require('@/assets/img/4.png')
const partition = require('@/assets/img/5.png')
const sonImg = require('@/assets/img/6.png')
export default [{
  type: 'collapse',
  name: '折叠面板',
  sonlist: [
    {
      img: fatherImg,
      list: [
        {
          img: sonImg,
          link: ''
        },
        {
          img: sonImg,
          link: ''
        }
      ]
    },
    {
      img: fatherImg,
      list: [
        {
          img: sonImg,
          link: ''
        }
      ]
    }
  ],
  style: {
    isAuto: true,
    margin: '0px 0px 0px 0px',
    parentMargin: 11,
    sonMargin: 6.5,
    height: 52,
    sonHeight: 45,
    backgroundColor: ''
  }
}]
