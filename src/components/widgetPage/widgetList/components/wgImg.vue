<template>
  <div class="wg-img">
    <!-- <div 
      v-for="(imgItem, index) in item.imglist"
      :key="index"
      class="img-box"
    >
      <img class="item-img" :src="imgBtn.img"  />
    </div> -->
    <el-row>
      <el-col 
        v-for="(imgItem, index) in item.imglist"
        :key="index"
        class="img-box"
        :span="item.col"
      >
        <div class="grid-content bg-purple">123</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'wgImg',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
  .wg-img{
    .item-img{

    }
  }
</style>
