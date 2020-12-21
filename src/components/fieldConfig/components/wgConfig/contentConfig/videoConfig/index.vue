<template>
  <div class="video-config1">
    <div class="file-upload">
      <div class="avatar-uploader" @click="clickUpload">
        <div class="el-upload">
          <img v-if="item.videoAttr.poster" :src="item.videoAttr.poster" class="avatar" />
          <i v-else class="el-icon-plus"></i>
        </div>
      </div>
      <input v-show="false" ref="uploadInput" type="file" @change="selectImg">
      <p class="tips">请保证图片名称与交付开发者图片名称相同</p>
    </div>

    <div class="line_hight">
      <label class="el-form-item__label">是否循环</label>
      <div class="el-form-item__group">
        <el-button-group>
          <el-button 
            v-for="(typeItem, index) in listType"
            :key="index"
            size="mini"
            :type="item.videoAttr.loop === typeItem.value ? 'primary' : ''"
            @click="clickLoop(typeItem.value)"
          >
            {{typeItem.label}}
          </el-button>
        </el-button-group>
      </div>
    </div>
    <div class="line_hight">
      <label class="el-form-item__label">是否controls</label>
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
    <div class="line_hight">
      <label class="el-form-item__label">自动播放</label>
      <div class="el-form-item__group">
        <el-button-group>
          <el-button
            v-for="(typeItem, index) in listType"
            :key="index"
            size="mini"
            :type="item.videoAttr.autoplay === typeItem.value ? 'primary' : ''"
            @click="clickAutoplay(typeItem.value)"
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
export default {
  name: 'videoConfig1',
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
    // input上传
    selectImg (e) {
      console.log(e)
      // let file = e.target.files || e.dataTransfer.files
      // console.log(file)
      // let fr = new FileReader()
      // fr.readAsDataURL(file[0])
      // fr.onload = () => {
      //   console.log(this.type)
      //   this.$store.commit('widgetData/setImgCt', { key: 'img', value: fr.result, index: this.index })
      // }
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
</style>
