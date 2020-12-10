<template>
  <div class="text-config2">
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
  name: 'textConfig2',
  data () {
    return {
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
    setLineHeight (value) {
      this.$store.commit('widgetData/setStyle', { key: 'lineHeight', value });
    },
    setFontSize (value) {
      this.$store.commit('widgetData/setStyle', { key: 'fontSize', value: `${value}px` });
    },
    setColor (value) {
      this.$store.commit('widgetData/setStyle', { key: 'color', value });
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
