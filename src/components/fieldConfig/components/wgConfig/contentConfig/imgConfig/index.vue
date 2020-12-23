<template>
  <div class="img-config1">
    <div 
      v-for="(typeItem, index) in item.imglist"
      :key="index"
      class="img_content"
    >
      <i class="el-icon-delete" @click="removeWg(index)"></i>
      <div class="upload-img">
        <label class="el-form-item__label">上传图片：</label>
        <File-upload :img="typeItem.img" :index="index" :commitFun="commitImg"></File-upload>
      </div>
      <div class="url-img">
        <label class="el-form-item__label">跳转链接</label>
        <el-input size="mini" :value="typeItem.link" @input="value=>$store.commit('widgetData/setImgCt', { key: 'link', value, index })"></el-input>
      </div>
    </div>
    <el-button type="text" @click="addDomain">添加选项</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FileUpload from '@/components/fileUpload'
export default {
  name: 'imgConfig1',
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
    addDomain () {
      this.$store.commit('widgetData/addImgCt')
    },
    removeWg (index) {
      if (this.item.imglist.length > 1) {
        this.$store.commit('widgetData/delImgCt', index)
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
    commitImg ({ fr, name, index }) {
      this.$store.commit('widgetData/setImgCt', { key: 'img', value: fr, index })
      this.$store.commit('widgetData/setImgCt', { key: 'name', value: name, index })
    }
  }
};
</script>

<style lang="less" scoped>
  .img_content{
    padding: 20px 10px 10px;
    margin-top: 10px;
    border: 1px dotted #ccc;
    background-color: #f9f9f9;
    i{
      font-size: 20px;
      float: right;
      cursor: pointer;
    }
  }
</style>
