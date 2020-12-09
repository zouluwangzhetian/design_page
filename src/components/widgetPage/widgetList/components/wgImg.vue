<template>
  <div class="wg-img">
    <el-row>
      <el-col 
        v-for="(imgItem, index) in item.imglist"
        :key="index"
        class="img-box"
        :span="item.col"
      >
        <img class="item-img" :style="item.style" :src="imgItem.img" @click="$toPatch(imgItem.link)"  />
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
      width: 100%;
    }
  }
</style>
