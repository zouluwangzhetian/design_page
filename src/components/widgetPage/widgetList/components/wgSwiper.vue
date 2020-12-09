<template>
  <div class="wg-swiper">
    <el-carousel :style="{...item.height}">
      <el-carousel-item v-for="(swiperItem, index) in item" :key="index">
        <img :style="{...item.margin}" :src="swiperItem.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'wgSwiper',
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
