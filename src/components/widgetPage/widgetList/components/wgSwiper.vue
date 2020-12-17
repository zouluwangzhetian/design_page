<template>
  <div class="wg-swiper">
    <!-- <div class="swiper-box" :style="{margin: item.style.margin}">
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
    </div> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <img 
          v-for="(swiperItem, index) in item.value" 
          :key="index"
          class="swiper-slide swiper-img" 
          :src="swiperItem.img" alt=""
        />
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
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
  },
  created () {
    console.log(this.item)
    let config = {
      pagination: this.item.pagination ? { el: '.swiper-pagination' } : '',
      loop: this.item.loop,
      autoplay: {
        delay: this.item.interval,
        disableOnInteraction: this.item.disableOnInteraction
      }
    }
    console.log(config)
    this.$nextTick(() => {
      var swiper = new window.Swiper('.swiper-container', config);
    })
  }
}
</script>
