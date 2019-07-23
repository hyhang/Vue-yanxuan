<template>
  <div class="cateListWrapper">
    <CateHeader/>
    <Categories/>
  </div>
</template>

<script type="text/ecmascript-6">
  import CateHeader from './CateHeader/'
  import Categories from './Categories/'
  export default {
    name: "CateList",
    components: {
      CateHeader,
      Categories
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cateListWrapper
    height 100%
    background-color #fff

</style>
