<template>
  <div class="page-config">
    <div class="vx-share">
      <label class="el-form-item__label">分享标题</label>
      <div class="el-form-item__group">
        <el-input size="mini" :value="pageData.title"  @input="value=>$store.commit('widgetData/setShareText', { key: 'title', value })"></el-input>
      </div>
      <label class="el-form-item__label">分享副标题</label>
      <div class="el-form-item__group">
        <el-input size="mini" :value="pageData.shareContent"  @input="value=>$store.commit('widgetData/setShareText', { key: 'shareContent', value })"></el-input>
      </div>
      <!-- <div class="upload-poster">
        <label class="el-form-item__label">上传封面图：</label>
        <File-upload :img="pageData.shareImg" :index="0" :commitFun="commitPoster"></File-upload>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'pageConfig',
  computed: {
    ...mapState({
      pageData: (state) => state.widgetData.pageData
    })
  }
}
</script>

<style lang="less" scoped>
.el-form-item__label {
  float: none;
}
</style>
