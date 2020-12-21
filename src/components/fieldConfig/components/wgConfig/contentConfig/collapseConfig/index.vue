<template>
  <div class="collapse-config">
    <el-collapse accordion>
      <el-collapse-item v-for="(typeItem, index) in item.sonlist" :key="index">
        <template slot="title">
          <!-- <p>111</p> -->
          <div class="upload-img">
            <File-upload :img="typeItem.img" :index="index" :type="item.type"></File-upload>
          </div>
        </template>
        <div 
          v-for="(sonItem, sonIndex) in typeItem.list"
          :key="sonIndex"
        >
          <div class="upload-img1">
            <File-upload :img="sonItem.img" :index="index" :type="item.type"></File-upload>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import FileUpload from '@/components/fileUpload'
export default {
  name: 'collapseConfig1',
  components: {
    FileUpload
  },
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
</style>
