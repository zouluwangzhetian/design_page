<template>
  <div class="slide-bar-page">
    <div class="line_hight">
      <label class="el-form-item__label">行高</label>
      <el-input-number v-model="lineHightNum" :min="1" :max="10" label="行高"></el-input-number>
    </div>
    <div class="font_size">
      <label class="el-form-item__label">字体大小</label>
      <el-input-number v-model="fontSizeNum" :min="12" :max="30" label="字体大小"></el-input-number>
    </div>
    <div class="font_size">
      <label class="el-form-item__label">字体颜色</label>
      <el-color-picker v-model="fontSizeColor"></el-color-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textConfig',
  data () {
    return {
      lineHightNum: 1,
      fontSizeNum: 12,
      fontSizeColor: null
    };
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
