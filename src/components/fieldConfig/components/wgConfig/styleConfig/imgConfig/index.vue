<template>
  <div class="img-config2">

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'imgConfig2',
  data () {
    return {
      lineHightNum: '1.6',
      fontSizeNum: '16'
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
