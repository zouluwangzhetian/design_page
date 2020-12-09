<template>
  <div class="home">
    <Header />
    <el-container>
      <el-aside width="394px">
        <SlideBar />
      </el-aside>
      <el-container class="center-container" direction="vertical">
        <el-header class="btn-bar" style="height: 45px;">
          <el-button
            class="main-btn"
            icon="el-icon-refresh"
            size="medium"
            type="text"
            @click="handleReset()"
          >
            重置
          </el-button>
          <el-button
            class="main-btn"
            icon="el-icon-view"
            size="medium"
            type="text"
            @click="handlePreview()"
          >
            预览
          </el-button>
          <el-button
            class="main-btn"
            icon="el-icon-document"
            size="medium"
            type="text"
            @click="handleSave()"
          >
            保存
          </el-button>
        </el-header>
        <el-main>
          <widget-page></widget-page>
        </el-main>
      </el-container>
      <el-aside width="384px">
        <field-config></field-config>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Header from '@/components/header'
import SlideBar from '@/components/slideBar'
import WidgetPage from '@/components/widgetPage'
import fieldConfig from '@/components/fieldConfig'

export default {
  name: 'Home',
  components: {
    Header,
    SlideBar,
    WidgetPage,
    fieldConfig
  },
  methods: {
    // 重置
    handleReset () {

    },
    // 预览
    handlePreview () {
      
    },
    // 保存
    handleSave () {

    }
  }
}
</script>
<style lang="less" scoped>
  .home{
    height: calc(100% - 70px);
    /deep/.el-container{
      height: 100%;
    }
    .center-container{
      flex: 1;
      .btn-bar{
        text-align: center;
        .main-btn{
          margin-left: 20px;
        }
      }
      .el-main{
        position: relative;
      }
    }
  }
</style>
