const fatherImg = require('@/assets/img/4.png')
const sonImg = require('@/assets/img/6.png')
export default [{
  type: 'collapse',
  name: '折叠面板',
  sonlist: [
    {
      name: '',
      img: fatherImg,
      expand: true,
      list: [
        {
          name: '',
          img: sonImg,
          link: ''
        },
        {
          name: '',
          img: sonImg,
          link: ''
        }
      ]
    },
    {
      name: '',
      img: fatherImg,
      expand: true,
      list: [
        {
          name: '',
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
