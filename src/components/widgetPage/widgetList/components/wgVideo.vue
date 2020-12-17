<template>
  <div 
    class="wg-video" 
    :style="{ 
      height: item.style.height + 'px',
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
export default {
  name: 'wgVideo',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
