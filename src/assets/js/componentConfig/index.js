import Text from './config/text';
import Img from './config/img';
import Collapse from './config/collapse';
import Video from './config/video';

export default [
  {
    name: '文本',
    value: 'text',
    icon: 'el-icon-tickets',
    data: Text
  },
  {
    name: '图片',
    value: 'img',
    icon: 'el-icon-picture-outline',
    data: Img
  },
  {
    name: '折叠面板',
    value: 'collapse',
    icon: 'el-icon-s-unfold',
    data: Collapse
  },
  {
    name: '视频',
    value: 'video',
    icon: 'el-icon-video-camera-solid',
    data: Video
  }
]
