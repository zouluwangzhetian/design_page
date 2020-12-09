<template>
  <div class="slide-bar-page">
    <div class="text_content">
      <label class="el-form-item__label">文本内容</label>
      <el-input v-model="textContent" @change="setTextContent"></el-input>
    </div>
    <div class="line_hight">
      <label class="el-form-item__label">行高</label>
      <el-input-number v-model="lineHightNum" :min="1" :max="10" :step="0.1" @change="setLineHeight"></el-input-number>
    </div>
    <div class="font_size">
      <label class="el-form-item__label">字体大小</label>
      <el-input-number v-model="fontSizeNum" :min="12" :max="30" @change="setFontSize"></el-input-number>
    </div>
    <div class="font_size">
      <label class="el-form-item__label">字体颜色</label>
      <el-color-picker v-model="fontSizeColor" @change="setColor"></el-color-picker>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'textConfig',
  data () {
    return {
      textContent: '这是一段文本',
      lineHightNum: '1.6',
      fontSizeNum: '16',
      fontSizeColor: '#000'
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
    },
    setLineHeight (value) {
      this.$store.commit('widgetData/setlineHeight', value);
    },
    setFontSize (value) {
      this.$store.commit('widgetData/setfontSize', value);
    },
    setColor (value) {
      this.$store.commit('widgetData/setcolor', value);
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
