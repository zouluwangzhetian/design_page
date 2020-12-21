<template>
  <div class="wg-img">
    <!-- <el-row>
      <el-col 
        v-for="(imgItem, index) in item.imglist"
        :key="index"
        class="img-box"
        :span="item.col"
      >
        <img 
          class="item-img" 
          :style="{ margin: item.style.margin, height: item.style.height + 'px', backgroundColor: item.style.backgroundColor }" 
          :src="imgItem.img" 
          @click="$toPatch(imgItem.link)"
        />
      </el-col>
    </el-row> -->
    <div
      class="img-box"
    >
      <img 
        v-for="(imgItem, index) in item.imglist"
        :key="index"
        class="item-img" 
        :style="{ 
          margin: item.style.margin, 
          width: (100 / item.col) + '%',
          height: item.style.isAuto ? 'auto' : item.style.height + 'px', 
          backgroundColor: item.style.backgroundColor 
        }" 
        :src="imgItem.img" 
        @click="$toPatch(imgItem.link)"
      />
    </div>
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
