<template>
  <div class="file-upload">
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      class="avatar-uploader"
    >
      <img v-if="img" :src="img" class="avatar" />
      <i v-if="!img" class="el-icon-plus"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'fileUpload',
  props: {
    img: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleAvatarSuccess (res, file, fileList) {
      var fileUrl = file.url
      this.$store.commit('widgetData/setImgCt', { key: 'img', value: fileUrl, index: this.index })
    }
  }
};
</script>

<style lang="less" scoped>
.file-upload{
  height: 120px;
  /deep/.avatar-uploader{
    .el-upload {
      height: 120px;
      width: 120px;
      line-height: 110px;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .el-upload:hover {
      border-color: #409eff;
    }
  }
  /deep/.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  /deep/.avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
