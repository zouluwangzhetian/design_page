<template>
  <div class="file-upload">
    <div class="avatar-uploader">
      <div class="el-upload" @click="clickUpload">
        <img v-if="img && fileType === 'img'" :src="img" class="avatar" />
        <video v-if="img && fileType === 'video'" :src="img" class="video-file"></video>
        <i v-show="img" class="el-icon-plus"></i>
      </div>
    </div>
    <input v-show="false" ref="uploadInput" type="file" :accept="accept" @change="selectImg">
    <p v-if="fileType === 'img'" class="tips">请保证图片名称与交付开发者图片名称相同</p>
    <p v-else class="tips">请保证视频名称与交付开发者视频名称相同</p>
  </div>
</template>

<script>
import eventBus from '@/eventBus/eventBus.js';
export default {
  name: 'fileUpload',
  data () {
    return {
    }
  },
  props: {
    img: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    fileType: {
      type: String,
      default: 'img'
    },
    commitFun: {
      type: Function,
      required: true
    },
    sonIndex: {
      type: Number
    },
    accept: {
      type: String,
      default: '.jpg,.png,.jpeg'
    }
  },
  methods: {
    clickUpload () {
      this.$refs.uploadInput.click()
    },
    // input上传
    selectImg (e) {
      // console.log(e.target.files)
      let file = e.target.files || e.dataTransfer.files
      // console.log(file)
      let fr = new FileReader()
      fr.readAsDataURL(file[0])
      fr.onload = () => {
        // console.log(fr.result)
        this.commitFun({ fr: fr.result, name: file[0].name, index: this.index, sonIndex: this.sonIndex })
      }
    }
  }
};
</script>

<style lang="less" scoped>
.file-upload{
  // height: 120px;
  .tips{
    margin-top: 5px;
    text-align: center;
  }
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
  /deep/.avatar {
    width: 100%;
    height: 100%;
    display: block;
  }
  .video-file{
    width: 100%;
    height: 100%;
  }
}
</style>
