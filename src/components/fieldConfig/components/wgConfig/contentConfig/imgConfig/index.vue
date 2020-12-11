<template>
  <div class="img-config1">
    <div 
      v-for="(typeItem, index) in item.imglist"
      :key="index"
      class="img_content"
    >
      <div class="upload-img">
        <label class="el-form-item__label">上传图片：</label>
        <File-upload :img="typeItem.img" :index="index"></File-upload>
      </div>
      <div class="url-img">
        <label class="el-form-item__label">跳转链接</label>
        <el-input :value="typeItem.link" @input="value=>$store.commit('widgetData/setImgCt', { key: 'link', value, index })"></el-input>
      </div>
    </div>
    <el-button type="text" @click="addDomain">添加选项</el-button>
  </div>
</template>

<script>
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
  methods: {
    addDomain () {
      this.$store.commit('widgetData/addImgCt')
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
  }
</style>
