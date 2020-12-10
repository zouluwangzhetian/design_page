<template>
  <div 
    class="widget-view"
    :class="{active:  selectWg.key === item.key}"
    @click.stop="handleSelectWidget"
  >
    <component :is="wgMap[item.type]" :item="item" />
    <div class="tools-box">
      <i class="icon el-icon-close" @click.stop="removeWg"></i>
      <i class="icon el-icon-document-copy" @click.stop="copyWg"></i>
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
    list: {
      type: Array,
      required: true
    }
  },
  components: {  
    /* eslint-disable */
    WgText: () => import('./components/wgText'), // 文本组件
    WgImg: () => import('./components/wgImg'), // 图片组件
    WgSwiper: () => import('./components/wgSwiper'), // 轮播图组件
    wgCollapse: () => import('./components/wgCollapse') // 轮播图组件
    /* eslint-enable */
  },
  data () {
    return {
      wgMap: {
        text: 'WgText', // 文本选择
        img: 'WgImg', // 图片组件
        swiper: 'WgSwiper', // 轮播图组件
        collapse: 'wgCollapse' // 轮播图组件
      }
    }
  },
  computed: {
    ...mapState('widgetData', {
      selectWg: state => state.selectWg
    })
  },
  methods: {
    // 选中配置的组件
    handleSelectWidget () {
      console.log('选中组件')
      this.storeMethods(this.item, 'widget', this.index)
    },
    // 移除配置的组件
    removeWg () {
      let list = [...this.list]
      let index = this.index
      let data = this.list[index + 1] || {}
      let configTab = 'widget'
      list.splice(this.index, 1)
      if (!list.length) {
        index = null 
        data = {}
        configTab = ''
      }
      if (this.list.length > 1 && this.index === (this.list.length - 1)) {
        index = this.index - 1
        data = this.list[index]
      }
      this.$store.commit('widgetData/setList', list)
      this.storeMethods(data, configTab, index)
    },
    // 复制当前选中的组件
    copyWg () {
      const elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000);
      let list = [...this.list]
      let data = this.$util.deepClone(this.item)
      data.key = data.type + '_' + elKey
      list.splice(this.index + 1, 0, data)
      this.$store.commit('widgetData/setList', list)
      this.storeMethods(data, 'widget', this.index + 1)
    },
    storeMethods (wg, configTab, index) {
      this.$store.commit('widgetData/setSelectWg', wg)
      this.$store.commit('widgetData/setConfigTab', configTab)
      this.$store.commit('widgetData/setSelectIndex', index)
    }
  }
}
</script>

<style lang="less" scoped>
  .widget-view{
    position: relative;
    // &:after {
    //   content: '';
    //   position: absolute;
    //   left: 0;
    //   right: 0;
    //   bottom: 0;
    //   top: 0;
    //   display: block;
    //   z-index: 1001;
    // }
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
      .icon{
        cursor: pointer;
      }
      .el-icon-document-copy{
        margin-left: 10px;
      }
    }
  }
</style>
