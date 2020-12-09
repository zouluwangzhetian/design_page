<template>
  <div class="wg-swiper">
    <div class="swiper-box" :style="{margin: item.style.margin}">
      <el-carousel 
        arrow="never" 
        trigger="none"
        :type="item.card"
        :direction="item.direction"
        :style="{height: item.style.height}" 
        :interval="item.interval" 
      >
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
