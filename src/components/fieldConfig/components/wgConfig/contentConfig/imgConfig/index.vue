<template>
  <div class="img-config1">
    <el-upload
      action="https://upload.qiniup.com/"
      list-type="picture-card"
      :before-upload="beforeAvatarUpload"
      :on-success="uploadImgSuccess"
      :on-error="uploadImgError"
      :show-file-list="false">
      <img v-if="formCourse.cover" :src="formCourse.cover">
      <i class="el-icon-plus">添加图片</i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'imgConfig1',
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      formCourse: {
        cover: ''
      }
    };
  },
  computed: {
    ...mapState({
      selectWg: (state) => state.widgetData.selectWg
    })
  },
  methods: {
    beforeAvatarUpload (file) {
      console.log(file);
    },
    uploadImgSuccess (file, fileList) {
      console.log(file, fileList);
    },
    uploadImgError (file, fileList) {
      console.log(file, fileList);
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
  height: 91px;
  line-height: 91px;
}
</style>
