<template>
  <div class="img-config1">
    <div class="uploadImg">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-success="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus">添加图片</i>
      </el-upload>
    </div>
    <div class="urlImg">
      <label class="el-form-item__label">跳转链接</label>
      <el-input :value="this.selectWg.imglist[0].link" @input="value=>$store.commit('widgetData/setImgCt', { key: 'margin', value })"></el-input>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'imgConfig1',
  data () {
    return {
    };
  },
  computed: {
    ...mapState({
      selectWg: (state) => state.widgetData.selectWg
    })
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (res, file, fileList) {
      var s = file.url
      this.$store.commit('widgetData/setImgCt', { key: 'img', s })
    }
  }
};
</script>

<style lang="less" scoped>
.el-upload--picture-card i {
  font-size: 14px
}
/deep/.el-upload {
  width: 258px;
  height: 148px;
  line-height: 148px;
}
/deep/.el-upload-list__item{
  width: 258px;
  height: 148px;
}
</style>
