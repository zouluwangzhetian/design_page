<template>
  <div class="textConfig">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="基础设置" name="1">
        <div class="text_content">
          <label class="el-form-item__label">文本内容</label>
          <el-input v-model="textContent" placeholder="请输入文本内容"></el-input>
        </div>
        <!-- <div class="show_position">
          <label class="el-form-item__label">显示位置</label>
          <div class="el-form-item__group">
            <el-radio-group v-model="radio1" size="mini">
              <el-radio-button label="正常"></el-radio-button>
              <el-radio-button label="顶部悬浮"></el-radio-button>
              <el-radio-button label="底部悬浮"></el-radio-button>
            </el-radio-group>
          </div>
        </div> -->
      </el-collapse-item>
      <el-collapse-item title="外观样式" name="2">
        <div class="margin">
          <label class="el-form-item__label">外边距（上 右 下 左 、空格隔开）</label>
          <el-input v-model="input"></el-input>
        </div>
        <div class="font_size">
          <label class="el-form-item__label">背景颜色</label>
          <el-color-picker v-model="backgroundColor"></el-color-picker>
        </div>
        <text-config></text-config>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import textConfig from './textConfig/index'

export default {
  name: 'widgetConfig',
  components: {
    textConfig
  },
  data () {
    return {
      textContent: '',
      input: '10px 10px 10px 10px',
      backgroundColor: null,
      radio1: '正常',
      activeName: '2'
    };
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
