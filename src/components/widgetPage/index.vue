<template>
  <div class="widget-bg-page">
    <div class="widget-page" :style="{...pageData.style}">
      <Draggable
        v-model="pageData.list"
        class="components-list"
        :style="{ width: pageData.style.width, minHeight: pageData.style.minHeight}"
        filter=".disdraggable"
        ghostClass="ghost"
        :animation="100"
        :group="{ name:'widget',put:true}"
        :swapThreshold="0.7"
        @add="handleWidgetAdd"
        @end="dragEnd"
        @start="dragStart"
      >
        <template v-for="(item,index) in pageData.list">
          <Widget-list :key="item.key"  :list="pageData.list" :index="index" :item="item" />
        </template>
      </Draggable>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import WidgetList from './widgetList'
export default {
  name: 'widgetBgPage',
  components: {
    Draggable,
    WidgetList
  },
  computed: {
    ...mapState('widgetData', {
      pageData: state => state.pageData
    })
  },
  methods: {
    handleWidgetAdd (e) {
      console.log('元素添加回调', e);
      this.$store.commit('widgetData/setSelectWg', this.pageData.list[e.newIndex])
      this.$store.commit('widgetData/setSelectIndex', e.newIndex)
      this.$store.commit('widgetData/setConfigTab', 'widget')
    },
    dragEnd (e) {
      console.log('移动结束', e);
      console.log(this.pageData.list);
      this.$store.commit('widgetData/setSelectIndex', e.newIndex)
    },
    dragStart (e) {
      console.log('元素移动回调', e);
    }
  }
}
</script>

<style lang="less" scoped>
  .widget-bg-page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    background: #EEF2F8;
    &::-webkit-scrollbar {
      display: none;
    }
    .widget-page{
      position: relative;
      // width: 375px;
      // min-height: 640px;
      margin: 20px auto;
      -webkit-box-shadow: 0 2px 5px 1px rgba(124,124,124,0.2);
      box-shadow: 0 2px 5px 1px rgba(124,124,124,0.2);
      cursor: default;
      overflow: hidden;
      .components-list{
        // min-height: 640px;
        /deep/li.ghost {
          position: relative;
          height: 40px;
          line-height: 40px;
          border: 1px dashed #2553F4;
          overflow: hidden;
          &::after {
            content: '放到这里';
            display: block;
            background: #fff;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            text-align: center;
            font-size: 16px;
            color: #999;
            z-index: 10;
          }
        }
      }
    }
  }
</style>
