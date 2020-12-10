<template>
  <!-- :class="[item.wgClassName?item.wgClassName:'widget-view',{active: selectWg.key === item.key}]" -->
  <div 
    class="widget-view"
    :class="{active:  selectWg.key === item.key}"
    @click.stop="handleSelectWidget"
  >
    <component :is="wgMap[item.type]" :item="item" />
    <div class="tools-box">
      <i class="icon el-icon-close"></i>
      <i class="icon el-icon-document-copy"></i>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'widgetList',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  components: {  
    /* eslint-disable */
    WgText: () => import('./components/wgText'), // 文本组件
    WgImg: () => import('./components/wgImg'), // 图片组件
    WgSwiper: () => import('./components/wgSwiper') // 轮播图组件
    /* eslint-enable */
  },
  data () {
    return {
      wgMap: {
        text: 'WgText', // 文本选择
        img: 'WgImg',
        swiper: 'WgSwiper'
      }
    }
  },
  computed: {
    ...mapState('widgetData', {
      selectWg: state => state.selectWg
    })
  },
  methods: {
    handleSelectWidget () {
      console.log('选中配置组件')
      // setSelectWg
      this.$store.commit('widgetData/setSelectWg', this.item)
      this.$store.commit('widgetData/setConfigTab', 'widget')
    }
  }
}
</script>

<style lang="less" scoped>
  .widget-view{
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      display: block;
      z-index: 1001;
    }
    &.active{
      box-shadow: 0px 1px 10px 1px rgba(37, 83, 244, .5);
      z-index: 100;
      .tools-box{
        display: block;
      }
    }
    .tools-box{
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      padding: 4px 10px;
      color: #fff;
      background-color: rgba(36, 83, 244, .84);
      border-radius: 4px;
      z-index: 1010;
      .el-icon-document-copy{
        margin-left: 10px;
      }
    }
  }
</style>
