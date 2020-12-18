<template>
  <div class="img-config2">
    <div class="line_hight">
      <label class="el-form-item__label">高</label>
      <el-input-number v-model="lineHightNum" :min="30" :max="800" :step="1" @change="setLineHeight"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: 'imgConfig2',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      lineHightNum: 250
    };
  },
  methods: {
    setLineHeight (value) {
      this.$store.commit('widgetData/setStyle', { key: 'height', value });
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
