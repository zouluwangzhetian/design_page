<template>
  <div class="img-config1">
    <div class="img_content">
      <div class="uploadImg">
        <label class="el-form-item__label">上传图片：</label>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="urlImg">
        <label class="el-form-item__label">跳转链接</label>
        <el-input :value="item.imglist[0].link" @input="value=>$store.commit('widgetData/setImgCt', { key: 'margin', value })"></el-input>
      </div>
    </div>
    <el-button type="text">添加选项</el-button>
  </div>
</template>

<script>
export default {
  name: 'imgConfig1',
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      console.log(res, file);
    },
    beforeAvatarUpload (file) {
      console.log(file);
      // var s = file.url
      // this.$store.commit('widgetData/setImgCt', { key: 'img', s })
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
  .avatar-uploader .el-upload {
    border: 1px dashed #000;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
