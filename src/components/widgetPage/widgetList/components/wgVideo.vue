<template>
  <div 
    class="wg-video" 
    :style="{ 
      margin:item.style.margin,
      backgroundColor: item.style.backgroundColor,
    }"
  >
    <img class="video-bg" :src="item.backgroundImg" alt="">
    <video 
      class="video" 
      v-bind="item.videoAttr" 
      :width="item.style.videoWidth+'%'" 
      :height="item.style.videoHeight+'%'"
      :style="{ top: item.style.videoTop + '%', left: item.style.videoLeft + '%' }"
    >
      您的浏览器不支持视频播放哦~
    </video>
  </div>
</template>

<script>
import eventBus from '@/eventBus/eventBus.js';
export default {
  name: 'wgVideo',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created () {
    eventBus.$on('updateSwiper', data => {
      console.log(data)
      if (data.type === 'poster') {

      }
    });
  }
}
</script>
