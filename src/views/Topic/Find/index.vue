<template>
  <div class="findWrapper">
    <div class="scroll">
      <Recommend/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Recommend from './Recommend/'
  export default {
    name: 'Find',
    data() {
      return {
        index: '0'
      }
    },
    components: {
      Recommend
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .findWrapper
    width 100%
    .scroll 
      width 100%
 
</style>
