<template>
  <div class="img-config1">
    <div 
      v-for="(typeItem, index) in item.imglist"
      :key="index"
      class="img_content"
    >
      <i class="el-icon-delete" @click="removeWg(index)"></i>
      <div class="upload-img">
        <label class="el-form-item__label">上传图片：</label>
        <File-upload :img="typeItem.img" :index="index" :type="item.type"></File-upload>
      </div>
      <div class="url-img">
        <label class="el-form-item__label">跳转链接</label>
        <el-input :value="typeItem.link" @input="value=>$store.commit('widgetData/setSwiperCt', { key: 'link', value, index })"></el-input>
      </div>
    </div>
    <el-button type="text" @click="addDomain">添加选项</el-button>
    <div class="line_hight">
      <label class="el-form-item__label">时间间隔</label>
      <el-input-number v-model="intervalNum" :min="3000" :max="8000" :step="1000" @change="setSwiper"></el-input-number>
    </div>
    <div class="line_hight">
      <label class="el-form-item__label">是否循环</label>
      <div class="el-form-item__group">
        <el-button-group>
          <el-button 
            v-for="(typeItem, index) in listType"
            :key="index"
            size="mini"
            :type="item.loop === typeItem.value ? 'primary' : ''"
            @click="clickLoop(typeItem.value)"
          >
            {{typeItem.label}}
          </el-button>
        </el-button-group>
      </div>
    </div>
    <div class="line_hight">
      <label class="el-form-item__label">是否展示底部分页器</label>
      <div class="el-form-item__group">
        <el-button-group>
          <el-button
            v-for="(typeItem, index) in listType"
            :key="index"
            size="mini"
            :type="item.pagination === typeItem.value ? 'primary' : ''"
            @click="clickPagination(typeItem.value)"
          >
            {{typeItem.label}}
          </el-button>
        </el-button-group>
      </div>
    </div>
    <div class="line_hight">
      <label class="el-form-item__label">触碰之后保持自动轮播</label>
      <div class="el-form-item__group">
        <el-button-group>
          <el-button
            v-for="(typeItem, index) in listType"
            :key="index"
            size="mini"
            :type="item.disableOnInteraction === typeItem.value ? 'primary' : ''"
            @click="clickDisableOnInteraction(typeItem.value)"
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
  name: 'swiperConfig1',
  components: {
    FileUpload
  },
  data () {
    return {
      intervalNum: 3000,
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
    addDomain () {
      this.$store.commit('widgetData/addSwiperCt')
    },
    removeWg (index) {
      if (this.item.value.length > 1) {
        this.$store.commit('widgetData/delSwiperCt', index)
      } else {
        let list = [...this.pageData.list]
        let wgIndex = this.selectIndex
        let data = this.pageData.list[wgIndex + 1] || {}
        let configTab = 'widget'
        list.splice(this.selectIndex, 1)
        if (!list.length) {
          wgIndex = null 
          data = {}
          configTab = ''
        }
        if (this.pageData.list.length > 1 && this.selectIndex === (this.pageData.list.length - 1)) {
          wgIndex = this.selectIndex - 1
          data = this.pageData.list[wgIndex]
        }
        console.log('list', list)
        console.log('data', data)
        console.log('configTab', configTab)
        console.log('wgIndex', wgIndex)
        this.$store.commit('widgetData/setList', list)
        this.$store.commit('widgetData/setSelectWg', data)
        this.$store.commit('widgetData/setConfigTab', configTab)
        this.$store.commit('widgetData/setSelectIndex', wgIndex)
      }
    },
    setSwiper (value) {
      this.$store.commit('widgetData/setSwiper', { key: 'interval', value });
    },
    clickLoop (value) {
      this.$store.commit('widgetData/setSwiper', { key: 'loop', value });
    },
    clickPagination (value) {
      this.$store.commit('widgetData/setSwiper', { key: 'pagination', value });
    },
    clickDisableOnInteraction (value) {
      this.$store.commit('widgetData/setSwiper', { key: 'disableOnInteraction', value });
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
