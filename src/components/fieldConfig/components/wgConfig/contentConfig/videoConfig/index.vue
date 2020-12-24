<template>
  <div class="video-config1">
    <div class="upload-poster">
      <label class="el-form-item__label">上传封面图：</label>
      <File-upload :img="item.videoAttr.poster" :index="0" :commitFun="commitPoster"></File-upload>
    </div>
    <div class="upload-video">
      <label class="el-form-item__label">上传视频：</label>
      <File-upload :img="item.videoAttr.src" :index="0" :fileType="'video'" :accept="'.avi,.mp4,.rmvb'" :commitFun="commitVideo"></File-upload>
    </div>

    <div class="line_hight">
      <label class="el-form-item__label">展示功能栏</label>
      <div class="el-form-item__group">
        <el-button-group>
          <el-button
            v-for="(typeItem, index) in listType"
            :key="index"
            size="mini"
            :type="item.videoAttr.controls === typeItem.value ? 'primary' : ''"
            @click="clickControls(typeItem.value)"
          >
            {{typeItem.label}}
          </el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FileUpload from '@/components/fileUpload'
export default {
  name: 'videoConfig1',
  components: {
    FileUpload
  },
  data () {
    return {
      listType: [
        {
          label: '是',
          value: true
        },
        {
          label: '否',
          value: false
        }
      ]
    };
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
    clickUpload () {
      this.$refs.uploadInput.click()
    },
    // 提交视频
    commitVideo ({ fr, name }) {
      this.$store.commit('widgetData/setVideo', { key: 'src', value: fr });
      this.$store.commit('widgetData/setVideoName', { key: 'videoName', value: name })
    },
    // 提交封面图
    commitPoster ({ fr, name }) {
      this.$store.commit('widgetData/setVideo', { key: 'poster', value: fr });
      this.$store.commit('widgetData/setVideoName', { key: 'posterName', value: name })
    },
    clickLoop (value) {
      this.$store.commit('widgetData/setVideo', { key: 'loop', value });
    },
    clickControls (value) {
      this.$store.commit('widgetData/setVideo', { key: 'controls', value });
    },
    clickAutoplay (value) {
      this.$store.commit('widgetData/setVideo', { key: 'autoplay', value });
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
  .line_hight{
    .el-form-item__label{
      float: none;
    }
    .el-input-number {
      display: block;
    }
  }
  .upload-video{
    margin-top: 10px;
  }
</style>
