<template>
  <div class="slide-bar-page">
    <div class="slide-left">
      <div 
        v-for="(item, index) in slideBar" 
        :key="index" 
        class="slide-item" 
        :class="{'active': slideIndex === index}" 
        @click="clickBar(item, index)"
      >
        <i class="icon" :class="item.icon"></i>
        <!-- <i class="el-icon-menu"></i> -->
        <p class="slide-name">{{item.name}}</p>
      </div>
    </div>
    <div class="slide-right">
      <div 
        v-for="item in slideBar" 
        v-show="item.value === slideBarSon.value"
        :key="item.name"
        class="slide-item-right"
      >
        <div
          v-for="itemSon in item.data" 
          :key="itemSon.value"
          class="component-son"
        >
          <h4 class="component-title">{{itemSon.name}}</h4>
          <Draggable 
            v-model="itemSon.data"
            :clone="cloneData"
            :group="{ name:'widget', pull:'clone', put:false }"
            :sort="false"
            tag="ul"
            ghostClass="ghost"
            @end="dragEnd"
          >
            <li class="component-item">
              <i class="icon" :class="itemSon.icon"></i>
              <div class="component-text">
                <p class="item-title">{{itemSon.name}}</p>
                <p class="item-content">{{itemSon.content}}</p>
              </div>
            </li>
          </Draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vuedraggable'
import componentConfig from '@/assets/js/componentConfig'
export default {
  name: 'slideBar',
  components: {
    Draggable
  },
  data () {
    return {
      slideIndex: 0,
      slideBar: componentConfig,
      slideBarSon: componentConfig[0]
    }
  },
  mounted () {
    this.$nextTick(function () {
      // 防止火狐浏览器拖拽的时候以新标签打开
      document.body.ondrop = function (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    })
  },
  methods: {
    // 点击回调
    clickBar (item, index) {
      console.log(item);
      console.log(this.slideBar);
      this.slideBarSon = item;
      this.slideIndex = index;
    },
    // 移动结束,清除拷贝数据
    dragEnd () {
      console.log('导航栏end拖拽')
      // this.$store.commit('setDragWg', '')
    },
    // 拷贝数据
    cloneData (obj) {
      const elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000);
      let newObj = this.$util.deepClone(obj);
      newObj.key = newObj.type + '_' + elKey;
      // this.$store.commit('setDragWg', newObj)
      console.log('克隆拖拽')
      return newObj;
    }
  }
}
</script>

<style lang="less" scoped>
  .slide-bar-page{
    display: flex;
    height: 100%;
    .slide-left{
      width: 75px;
      border-right: 1px solid #EEF2F8;
      .slide-item{
        margin-top: 10px;
        width: 100%;
        cursor: pointer;
        border-left: 2px solid transparent;
        .icon{
          display: block;
          font-size: 20px;
          text-align: center;
        }
        .slide-name{
          margin-top: 6px;
          font-size: 14px;
          font-weight: 400;
          // color: #2553F4;
          line-height: 17px;
          text-align: center;
        }
        &.active{
          color: #2553F4;
          border-left: 2px solid #2553F4;
        }
      }
    }
    .slide-right{
      padding: 0 23px 0px 25px;
      width: 329px;
      box-sizing: border-box;
      .slide-item-right{
        .component-son{
          .component-title{
            margin-top: 21px;
            margin-bottom: 18px;
            font-size: 16px;
            font-weight: 600;
            color: #000000;
            line-height: 22px;
          }
          .component-item{
            box-sizing: border-box;
            display: flex;
            align-items: center;
            padding: 15px 0 15px 21px;
            background: #F6F7F9;
            border-radius: 4px;
            user-select: none;
            cursor: move;
            .icon{
              font-size: 20px;
            }
            .component-text{
              margin-left: 23px;
              .item-title{
                font-size: 14px;
                font-weight: 600;
                color: #151515;
                line-height: 20px;
              }
              .item-content{
                margin-top: 4px;
                font-size: 12px;
                font-weight: 400;
                color: #878E99;
                line-height: 17px;
              }
            }
          }
        }
      }
    }
  }
</style>
