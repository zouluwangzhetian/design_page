<template>
  <div class="img-config2">
    <div class="line_hight">
      <label class="el-form-item__label">高</label>
      <el-input-number v-model="lineHightNum" :step="1" @change="setLineHeight"></el-input-number>
    </div>
    <div class="show_position">
      <label class="el-form-item__label">显示类型</label>
      <div class="el-form-item__group">
        <el-button-group>
          <el-button 
            v-for="(item, index) in listType" 
            :key="index" 
            size="mini" 
            :type="selectWg.col === item.value ? 'primary' : ''"
            @click="clickType(item.value)"
          >
            {{item.label}}
          </el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'imgConfig2',
  data () {
    return {
      lineHightNum: 250,
      listType: [
        {
          label: '单列',
          value: 24
        },
        {
          label: '双列',
          value: 12
        },
        {
          label: '三列',
          value: 8
        },
        {
          label: '四列',
          value: 6
        }
      ]
    };
  },
  computed: {
    ...mapState({
      selectWg: (state) => state.widgetData.selectWg
    })
  },
  methods: {
    setLineHeight (value) {
      this.$store.commit('widgetData/setStyle', { key: 'height', value });
    },
    clickType (value) {
      console.log(value);
      this.$store.commit('widgetData/setimgCol', value)
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
