<template>
  <div class="page-config">
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
  </div>
</template>

<script>
export default {
  name: 'pageConfig',
  data () {
    return {
      radio1: '正常'
    };
  }
}
</script>

<style lang="less" scoped>
.el-form-item__label {
  float: none;
}
</style>
