<template>
  <div class="findWrapper">
    <Recommend v-if="index === 0"/>
    <div class="tip" v-if="index !== 0">
      模块正在开发中...
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Recommend from './Recommend/'
  export default {
    name: 'Find',
    data() {
      return {
        index: 0
      }
    },
    components: {
      Recommend
    },
    watch: {
      $route() {
        this.index = this.$route.params.index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .findWrapper
    width 100%
    height 100%
    position relative
    .tip
      position absolute
      top 50%
      left 50%
      transform translate(-50%,-50%)
      font-size 20px

</style>
