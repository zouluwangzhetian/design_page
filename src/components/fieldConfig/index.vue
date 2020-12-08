<template>
  <div>
    <el-header class="flex" height="45px">
      <div class="config-tab flex-auto" @click="handleConfigSelect('widget')">
        字段属性
      </div>
      <div class="config-tab flex-auto" @click="handleConfigSelect('page')">
        页面属性
      </div>
    </el-header>
    <el-main>
      <page-config v-show="configTab=='page'"></page-config>
      <widget-config v-show="configTab=='widget'"></widget-config>
    </el-main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import pageConfig from './components/pageConfig'
import widgetConfig from './components/widgetconfig'

export default {
  name: 'fieldConfig',
  components: {
    pageConfig,
    widgetConfig
  },
  data () {
    return {

    };
  },
  computed: {
    ...mapState({
      configTab: (state) => state.pageConfig.configTab
    })
  },
  methods: {
    handleConfigSelect (value) {
      this.$store.commit('pageConfig/setConfigTab', value);
    }
  }
};
</script>

<style lang="less" scoped>
.el-form-item__label {
  float: none;
}
.flex {
  border-bottom: solid 2px #e4e7ed;
  display: flex;
  justify-content: space-around;
  .config-tab {
    height: 45px;
    line-height: 45px;
    display: inline-block;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    cursor: pointer;
  }
  &.active {
    border-bottom: solid 2px #409eff;
  }
}
</style>
