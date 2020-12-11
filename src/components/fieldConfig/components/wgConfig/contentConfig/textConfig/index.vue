<template>
  <div class="text-config1">
    <div class="line_hight">
      <label class="el-form-item__label">文本内容</label>
      <el-input :value="item.value"  @input="val=>$store.commit('widgetData/settextContent',val)"></el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textConfig1',
  data () {
    return {
    };
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="less" scoped>

</style>
