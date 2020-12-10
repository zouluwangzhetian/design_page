<template>
  <div class="textConfig">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="基础设置" name="1">
        <component :is="wgMap[this.selectWg.type]" />
      </el-collapse-item>
      <el-collapse-item title="外观样式" name="2">
        <div class="margin">
          <label class="el-form-item__label">外边距（上 右 下 左 、空格隔开）</label>
          <el-input :value="this.selectWg.style.margin" @input="value=>$store.commit('widgetData/setStyle', { key: 'margin', value })"></el-input>
        </div>
        <div class="font_size">
          <label class="el-form-item__label">背景颜色</label>
          <el-color-picker :value="this.selectWg.style.backgroundColor" @change="value=>$store.commit('widgetData/setStyle', { key: 'backgroundColor', value })"></el-color-picker>
        </div>
        <component :is="wgMap1[this.selectWg.type]" />
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
    contentConfig: () => import('./contentConfig/textConfig/index'),
    styleConfig: () => import('./styleConfig/textConfig/index')
    /* eslint-enable */
  },
  data () {
    return {
      radio1: '正常',
      activeName: '1',
      wgMap: {
        text: 'contentConfig'
      },
      wgMap1: {
        text: 'styleConfig'
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
