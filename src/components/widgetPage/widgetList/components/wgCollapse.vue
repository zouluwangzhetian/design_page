<template>
  <div 
    class="wg-collapse" 
    :style="{ 
      margin: item.style.margin,
      backgroundColor: item.style.backgroundColor 
    }"
  >
    <div 
      v-for="(collapseItem, index) in list"
      :key="index"
      class="collapse-box"
    >
      <img 
        class="collapse-img" 
        :src="collapseItem.img" 
        :style="{ height: item.style.isAuto ? 'auto' : item.style.height + 'px' }" 
        alt=""
        @click="showSon(index)"
      />
      <div 
        v-for="(sonItem, sonIndex) in collapseItem.list"
        v-show="collapseItem.expand"
        :key="sonIndex"
        class="collapse-son-box"
      >
        <img 
          class="collapse-son-img" 
          :src="sonItem.img" 
          :style="{
            height: item.style.isAuto ? 'auto' : item.style.height + 'px'
          }" 
          alt=""
          @click="$toPatch(sonItem.link)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '@/eventBus/eventBus.js';
export default {
  name: 'wgCollapse',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    console.log(this.item)
    this.list = [...this.item.sonlist]
    eventBus.$on('updateCollapse', data => {
      this.list = [...this.item.sonlist]
      console.log(this.item)
      console.log(this.list)
    });
    console.log(this.list)
  },
  methods: {
    showSon (index) {
      this.list[index].expand = !this.list[index].expand
      // this.selectIndex = this.selectIndex !== index ? index : null
    }
  }
}
</script>
