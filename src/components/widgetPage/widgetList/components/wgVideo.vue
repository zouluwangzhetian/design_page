<template>
  <div 
    class="wg-video" 
    :style="{ 
      height: item.style.height + 'px',
      margin:item.style.margin,
      backgroundColor: item.style.backgroundColor
    }"
  >
    <video v-bind="item.videoAttr" style="width:100%;height:100%">您的浏览器不支持视频播放哦~</video>
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

<style lang="less" scoped>

</style>
