<template>
  <div class="wg-collapse" :style="{ backgroundColor: item.style.backgroundColor }">
    <div 
      v-for="(collapseItem, index) in item.sonlist"
      :key="index"
      :style="{ marginTop: item.style.parentMargin + 'px'}"
      class="collapse-box"
    >
      <!-- :style="{ marginTop: index !== 0? item.style.parentMargin + 'px': 'none'}" -->
      <img 
        class="collapse-img" 
        :src="collapseItem.img" 
        :style="{ height: item.style.height + 'px' }" 
        alt=""
        @click="showSon(index)"
      />
      <div 
        v-for="(sonItem, sonIndex) in collapseItem.list"
        v-show="selectIndex === index"
        :key="sonIndex"
        class="collapse-son-box"
      >
        <img 
          class="collapse-son-img" 
          :src="sonItem.img" 
          :style="{
            height: item.style.sonHeight + 'px',
            marginTop: item.style.sonMargin + 'px'
          }" 
          alt=""
          @click="$toPatch(sonItem.link)"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
      selectIndex: null
    }
  },
  methods: {
    showSon (index) {
      this.selectIndex = this.selectIndex !== index ? index : null
    }
  }
}
</script>

<style lang="less" scoped>
  .wg-collapse{
    width: 100%;
    .collapse-box{
      width: 100%;
      .collapse-img{
        display: block;
        width: 100%;
      }
      .collapse-son-box{
        width: 100%;
        .collapse-son-img{
          display: block;
          width: 100%;
        }
      }
    }
  }
</style>
