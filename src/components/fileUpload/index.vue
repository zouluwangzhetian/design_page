<template>
  <div class="file-upload">
    <div class="avatar-uploader" @click="clickUpload">
      <div class="el-upload">
        <img v-if="img" :src="img" class="avatar" />
        <i v-else class="el-icon-plus"></i>
      </div>
    </div>
    <input v-show="false" ref="uploadInput" type="file" @change="selectImg">
    <p class="tips">请保证图片名称与交付开发者图片名称相同</p>
  </div>
</template>

<script>
import eventBus from '@/eventBus/eventBus.js';
export default {
  name: 'fileUpload',
  data () {
    return {
      loading: false
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
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    clickUpload () {
      this.$refs.uploadInput.click()
    },
    // input上传
    selectImg (e) {
      console.log(e.target.files)
      let file = e.target.files || e.dataTransfer.files
      console.log(file)
      let fr = new FileReader()
      fr.readAsDataURL(file[0])
      fr.onload = () => {
        // console.log(fr.result)
        console.log(this.type)
        this.$store.commit('widgetData/setImgCt', { key: 'img', value: fr.result, index: this.index })
        this.$store.commit('widgetData/setImgCt', { key: 'name', value: file[0].name, index: this.index })
        if (this.type === 'swiper') {
          eventBus.$emit('updateSwiper', { type: 'update', index: this.index, value: fr.result });
        }
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
}
</style>
