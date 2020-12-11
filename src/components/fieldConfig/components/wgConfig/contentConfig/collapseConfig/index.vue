<template>
  <div class="collapse-config">
    <div class="collapse-list">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'collapseConfig1',
  data () {
    return {

    }
  },
  computed: {
    ...mapState('widgetData', {
      pageData: state => state.pageData
    })
  }
}
</script>

<style lang="less" scoped>

</style>
