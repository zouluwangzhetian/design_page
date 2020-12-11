<template>
  <div class="img-config2">
    <div class="line_hight">
      <label class="el-form-item__label">高</label>
      <el-input-number v-model="lineHightNum" :min="30" :max="800" :step="1" @change="setLineHeight"></el-input-number>
    </div>
    <div class="show_position">
      <label class="el-form-item__label">显示类型</label>
      <div class="el-form-item__group">
        <el-button-group>
          <el-button 
            v-for="(typeItem, index) in listType" 
            :key="index" 
            size="mini" 
            :type="item.col === typeItem.value ? 'primary' : ''"
            @click="clickType(typeItem.value)"
          >
            {{typeItem.label}}
          </el-button>
        </el-button-group>
      </div>
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
