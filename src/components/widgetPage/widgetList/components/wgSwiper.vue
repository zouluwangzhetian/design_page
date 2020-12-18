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
          v-for="(swiperItem, index) in item.imglist" 
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
      swiper: null,
      destroyedSwiper: true
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
      },
      observer: true,
      observeParents: true
    }
    console.log(config)
    this.$nextTick(() => {
      this.swiper = new window.Swiper('.swiper-container', config);
      eventBus.$on('updateSwiper', data => {
        this.attrSwiper(data)
      });
    })
  },
  methods: {
    attrSwiper (data) {
      const dom = `<img class="swiper-slide swiper-img" src="${data.value}" />`
      this.swiper.removeSlide(data.index)
      this.swiper.addSlide(data.index, dom);
    }
  }
}
</script>
