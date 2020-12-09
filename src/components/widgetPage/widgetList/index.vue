<template>
  <!-- :class="[item.wgClassName?item.wgClassName:'widget-view',{active: selectWg.key === item.key}]" -->
  <div 
    :class="{active:  selectWg.key === item.key}"
    @click.stop="handleSelectWidget">
    <component :is="wgMap[item.type]" :item="item" />
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
    }
  }
}
</script>

<style lang="less" scoped>
  .active{
    position: relative;
    box-shadow: 0px 1px 10px 1px rgba(37, 83, 244, .5);
    z-index: 100;
  }
</style>
