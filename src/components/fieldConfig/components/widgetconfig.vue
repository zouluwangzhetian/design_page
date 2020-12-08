<template>
  <div class="slide-bar-page">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="基础设置" name="1">
        <div class="show_position">
          <label class="el-form-item__label">显示位置</label>
          <div class="el-form-item__group">
            <el-radio-group v-model="radio1" size="mini">
              <el-radio-button label="正常"></el-radio-button>
              <el-radio-button label="顶部悬浮"></el-radio-button>
              <el-radio-button label="底部悬浮"></el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item title="外观样式" name="2">
        <label class="el-form-item__label"
        >外边距（上 右 下 左 、空格隔开）</label
        >
        <el-input v-model="input"></el-input>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'widgetConfig',
  data () {
    return {
      input: '10px 10px 10px 10px',
      radio1: '正常',
      activeName: '1'
    };
  }
};
</script>

<style lang="less" scoped>
</style>
