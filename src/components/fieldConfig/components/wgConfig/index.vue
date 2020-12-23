<template>
  <div class="text-config">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="基础设置" name="1">
        <component :is="wgMap[selectWg.type]" :item="selectWg" />
      </el-collapse-item>
      <el-collapse-item title="外观样式" name="2">
        <component :is="wgMap1[selectWg.type]" :item="selectWg" />
        <div class="margin">
          <label class="el-form-item__label">外边距（上 右 下 左 、空格隔开）</label>
          <el-input size="mini" :value="selectWg.style.margin" @input="value=>$store.commit('widgetData/setStyle', { key: 'margin', value })"></el-input>
        </div>
        <div class="font_size">
          <label class="el-form-item__label">背景颜色</label>
          <el-color-picker :value="selectWg.style.backgroundColor" @change="value=>$store.commit('widgetData/setStyle', { key: 'backgroundColor', value })"></el-color-picker>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>

import { mapState } from 'vuex';
export default {
  name: 'widgetConfig',
  components: {
    /* eslint-disable */
    textContent: () => import('./contentConfig/textConfig'), // 文本基础属性
    textStyle: () => import('./styleConfig/textConfig'), // 文本样式属性
    imgContent: () => import('./contentConfig/imgConfig'), // 图片基础属性
    imgStyle: () => import('./styleConfig/imgConfig'), // 图片样式属性
    collapseContent: () => import('./contentConfig/collapseConfig'), // 折叠面板属性
    swiperContent: () => import('./contentConfig/swiperConfig'), // 轮播图基础属性
    swiperStyle: () => import('./styleConfig/swiperConfig'), // 轮播图样式属性
    videoContent: () => import('./contentConfig/videoConfig'), // 视频基础属性
    videoStyle: () => import('./styleConfig/videoConfig') // 视频样式属性
    /* eslint-enable */
  },
  data () {
    return {
      radio1: '正常',
      activeName: '1',
      wgMap: {
        text: 'textContent',
        img: 'imgContent',
        collapse: 'collapseContent',
        swiper: 'swiperContent',
        video: 'videoContent'
      },
      wgMap1: {
        text: 'textStyle',
        img: 'imgStyle',
        swiper: 'swiperStyle',
        video: 'videoStyle'
      }
    };
  },
  computed: {
    ...mapState({
      selectWg: (state) => state.widgetData.selectWg
    })
  }
};
</script>

<style lang="less" scoped>
.el-form-item__label {
  float: none;
}
.el-input-number {
  display: block;
}
.el-color-picker {
  display: block;
}
</style>
