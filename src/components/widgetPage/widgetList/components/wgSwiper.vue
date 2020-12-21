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
    <div 
      class="swiper-container"
      :style="{
        height: item.style.height + 'px',
        margin: item.style.margin
      }"
    >
      <div class="swiper-wrapper">
        <img 
          v-for="(swiperItem, index) in item.imglist" 
          :key="index"
          class="swiper-slide swiper-img" 
          :src="swiperItem.img" 
          alt=""
        />
        <!-- @click="$toPatch(swiperItem.link)" -->
      </div>
      <!-- Add Pagination -->
      <div v-show="item.pagination" class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus/eventBus.js';
export default {
  name: 'wgSwiper',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      swiper: null
    }
  },
  created () {
    console.log(this.item)
    let config = {
      pagination: { el: '.swiper-pagination' },
      loop: this.item.loop,
      autoplay: {
        delay: this.item.interval,
        disableOnInteraction: this.item.disableOnInteraction
      },
      observer: true,
      observeParents: true
    }
    console.log(config)
    this.$nextTick(() => {
      this.swiper = new window.Swiper('.swiper-container', config);
    })
    eventBus.$on('updateSwiper', data => {
      console.log(data)
      console.log(this.swiper)
      const dom = `<img class="swiper-slide swiper-img" src="${data.value}" />`
      if (data.type === 'update') {
        this.swiper.removeSlide(data.index)
        this.swiper.addSlide(data.index, dom);
      }
      if (data.type === 'add') {
        this.swiper.addSlide(data.index, dom);
      }
      if (data.type === 'remove') {
        this.swiper.removeSlide(data.index)
      }
      if (data.type === 'interval') {
        this.swiper.params.autoplay.delay = data.value
      }
      if (data.type === 'loop') {
        this.swiper.params.loop = data.value
      }
    });
  }
}
</script>
