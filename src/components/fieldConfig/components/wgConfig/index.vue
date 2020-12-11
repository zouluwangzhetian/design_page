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
          <el-input :value="selectWg.style.margin" @input="value=>$store.commit('widgetData/setStyle', { key: 'margin', value })"></el-input>
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
    textContent: () => import('./contentConfig/textConfig/index'), //文本基础属性
    textStyle: () => import('./styleConfig/textConfig/index'), //文本样式属性
    imgContent: () => import('./contentConfig/imgConfig/index'), //图片基础属性
    imgStyle: () => import('./styleConfig/imgConfig/index') //图片样式属性
    /* eslint-enable */
  },
  data () {
    return {
      radio1: '正常',
      activeName: '1',
      wgMap: {
        text: 'textContent',
        img: 'imgContent'
      },
      wgMap1: {
        text: 'textStyle',
        img: 'imgStyle'
      }
    };
  },
  created () {
    console.log('aaaaaaaaaa', this.selectWg);
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
