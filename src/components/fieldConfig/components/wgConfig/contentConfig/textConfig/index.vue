<template>
  <div class="text-config1">
    <div class="line_hight">
      <label class="el-form-item__label">文本内容</label>
      <el-input :value="this.selectWg.value"  @input="val=>$store.commit('widgetData/settextContent',val)"></el-input>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'textConfig1',
  data () {
    return {
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

</style>
