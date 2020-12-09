<template>
  <div class="slide-bar-page">
    <div class="line_hight">
      <label class="el-form-item__label">文本内容</label>
      <el-input v-model="textContent" @change="setTextContent"></el-input>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'textConfig1',
  data () {
    return {
      textContent: '这是一段文字'
    };
  },
  computed: {
    ...mapState({
      selectWg: (state) => state.widgetData.selectWg
    })
  },
  created () {
    console.log(this.selectWg);
  },
  methods: {
    setTextContent (value) {
      this.$store.commit('widgetData/settextContent', value);
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
