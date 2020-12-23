<template>
  <div class="collapse-config">
    <div 
      v-for="(typeItem, index) in item.sonlist"
      :key="index"
      class="img_content"
    >
      <div class="upload-img">
        <File-upload :img="typeItem.img" :index="index"  :commitFun="commitImg"></File-upload>
      </div>
      <div
        v-for="(sonItem, sonIndex) in typeItem.list"
        :key="sonIndex"
        class="collapse-child"
      >
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
  methods: {
    addDomain (index) {
      this.$store.commit('widgetData/addCollapseSonCt', index)
    },
    addDomain1 () {
      this.$store.commit('widgetData/addCollapseCt')
    },
    // 父类
    commitImg ({ fr, name, index }) {
      this.$store.commit('widgetData/setCollapseFatherCt', { key: 'img', value: fr, index })
      this.$store.commit('widgetData/setCollapseFatherCt', { key: 'name', value: name, index })
      eventBus.$emit('updateCollapse');
    },
    // 子类
    commitImg1 ({ fr, name, index, sonIndex }) {
      this.$store.commit('widgetData/setCollapseSonCt', { key: 'img', value: fr, index, sonIndex })
      this.$store.commit('widgetData/setCollapseSonCt', { key: 'name', value: name, index, sonIndex })
      eventBus.$emit('updateCollapse');
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
</style>
