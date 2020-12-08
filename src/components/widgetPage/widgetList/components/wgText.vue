<template>
  <div class="wg-text">
    <p :style="item.style">{{item.value}}</p>
  </div>
</template>

<script>
export default {
  name: 'wgText',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created () {
    console.log(this.item)
  }
}
</script>

<style lang="less" scoped>

</style>
