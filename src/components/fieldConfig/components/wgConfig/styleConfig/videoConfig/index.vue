<template>
  <div class="text-config2">
    <div class="line_hight">
      <label class="el-form-item__label">视频宽度(%)</label>
      <el-input-number v-model="item.style.videoWidth" :min="20" :max="100" :step="1" @change="setVideoWidth"></el-input-number>
    </div>
    <div class="font_size">
      <label class="el-form-item__label">视频高度(%)</label>
      <el-input-number v-model="item.style.videoHeight" :min="20" :max="100" :step="1" @change="setVideoHeight"></el-input-number>
    </div>
    <div class="font_size">
      <label class="el-form-item__label">视频距高(%)</label>
      <el-input-number v-model="item.style.videoTop" :min="0" :max="100" :step="1" @change="setVideoTop"></el-input-number>
    </div>
    <div class="font_size">
      <label class="el-form-item__label">视频距左(%)</label>
      <el-input-number v-model="item.style.videoLeft" :min="0" :max="100" :step="1" @change="setVideoLeft"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textConfig2',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  methods: {
    setVideoWidth (value) {
      this.$store.commit('widgetData/setStyle', { key: 'videoWidth', value });
    },
    setVideoHeight (value) {
      this.$store.commit('widgetData/setStyle', { key: 'videoHeight', value });
    },
    setVideoTop (value) {
      this.$store.commit('widgetData/setStyle', { key: 'videoTop', value });
    },
    setVideoLeft (value) {
      this.$store.commit('widgetData/setStyle', { key: 'videoLeft', value });
    }
  }
};
</script>

<style lang="less" scoped>
.el-form-item__label{
  float: none;
}
.el-input-number {
  display: block;
}
.el-color-picker {
  display: block;
}
</style>
