<template>
  <div class="collapse-config">
    <div 
      v-for="(typeItem, index) in item.sonlist"
      :key="index"
      class="img_content"
    >
      <i class="el-icon-delete" @click="removeFatherWg(index)"></i>
      <div class="upload-img">
        <File-upload :img="typeItem.img" :index="index"  :commitFun="commitImg"></File-upload>
      </div>
      <div
        v-for="(sonItem, sonIndex) in typeItem.list"
        :key="sonIndex"
        class="collapse-child"
      >
        <i class="el-icon-delete" @click="removeSonWg({index, sonIndex })"></i>
        <div class="upload-son-img">
          <File-upload :img="sonItem.img" :index="index" :sonIndex="sonIndex" :commitFun="commitImg1"></File-upload>
        </div>
        <div class="url-img">
          <label class="el-form-item__label">跳转链接</label>
          <el-input size="mini" :value="sonItem.link" @input="value=>$store.commit('widgetData/setCollapseSonCt', { key: 'link',index, value, sonIndex })"></el-input>
        </div>
      </div>
      <el-button type="text" @click="addDomain(index)">添加当前子类</el-button>
    </div>
    <el-button type="text" @click="addDomain1">添加父类</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FileUpload from '@/components/fileUpload'
import eventBus from '@/eventBus/eventBus.js';
export default {
  name: 'collapseConfig1',
  components: {
    FileUpload
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  computed: {
    ...mapState('widgetData', {
      pageData: state => state.pageData,
      selectIndex: state => state.selectIndex
    })
  },
  methods: {
    async addDomain (index) {
      await this.$store.commit('widgetData/addCollapseSonCt', index)
      await eventBus.$emit('updateCollapse');
    },
    async addDomain1 () {
      await this.$store.commit('widgetData/addCollapseCt')
      await eventBus.$emit('updateCollapse');
    },
    // 父类
    async commitImg ({ fr, name, index }) {
      await this.$store.commit('widgetData/setCollapseFatherCt', { key: 'img', value: fr, index })
      await this.$store.commit('widgetData/setCollapseFatherCt', { key: 'name', value: name, index })
      await eventBus.$emit('updateCollapse');
    },
    // 子类
    async commitImg1 ({ fr, name, index, sonIndex }) {
      await this.$store.commit('widgetData/setCollapseSonCt', { key: 'img', value: fr, index, sonIndex })
      await this.$store.commit('widgetData/setCollapseSonCt', { key: 'name', value: name, index, sonIndex })
      await eventBus.$emit('updateCollapse');
    },
    // 删除父类
    async removeFatherWg (index) {
      if (this.item.sonlist.length > 1) {
        await this.$store.commit('widgetData/delCollapseFatherCt', index)
        await eventBus.$emit('updateCollapse');
      } else {
        let list = [...this.pageData.list]
        let wgIndex = this.selectIndex
        let data = this.pageData.list[wgIndex + 1] || {}
        let configTab = 'widget'
        list.splice(this.selectIndex, 1)
        if (!list.length) {
          wgIndex = null 
          data = {}
          configTab = ''
        }
        if (this.pageData.list.length > 1 && this.selectIndex === (this.pageData.list.length - 1)) {
          wgIndex = this.selectIndex - 1
          data = this.pageData.list[wgIndex]
        }
        console.log('list', list)
        console.log('data', data)
        console.log('configTab', configTab)
        console.log('wgIndex', wgIndex)
        this.$store.commit('widgetData/setList', list)
        this.$store.commit('widgetData/setSelectWg', data)
        this.$store.commit('widgetData/setConfigTab', configTab)
        this.$store.commit('widgetData/setSelectIndex', wgIndex)
      }
    },
    // 删除子类
    async removeSonWg ({ index, sonIndex }) {
      await this.$store.commit('widgetData/delCollapseSonCt', index, sonIndex)
      await eventBus.$emit('updateCollapse');
    }
  }
}
</script>

<style lang="less" scoped>
.upload-img{
  /deep/.el-upload{
    width: 100% !important;
  }
}

.collapse-child-imgs{
  width: 100%;
}
.collapse-child{
  /deep/.el-upload{
    width: 80% !important;
    display: block;
    margin:0 auto;
  }
}
.url-img{
  margin-bottom: 10px;
}
.el-icon-delete{
  font-size: 20px;
  float: right;
  cursor: pointer;
}
</style>
