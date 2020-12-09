<template>
  <div class="wg-swiper">
    <div class="swiper-box" :style="{margin: item.style.margin}">
      <el-carousel :style="{height: item.style.height}" arrow="never" :interval="item.interval" trigger="none">
        <el-carousel-item v-for="(swiperItem, index) in item.value" :key="index">
          <img class="swiper-img" :src="swiperItem.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
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
  .wg-swiper{
    .swiper-img{
      width: 100%;
      height: 100%;
    }
  }
</style>
