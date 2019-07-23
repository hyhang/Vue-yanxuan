<template>
  <div class="CateHeaderWrapper">
    <Input/>
  </div>
</template>

<script type="text/ecmascript-6">
  import Input from '../../../components/Input/Input'
  export default {
    name: 'CateHeader',
    components: {
      Input
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../assets/css/mixin.stylus'
  .CateHeaderWrapper
    bottom-border-1px(#ddd)
    width 100%
    height 44px
    padding 0 15px  
    background-color #fff
    display flex
    justify-content center
    align-items center
    box-sizing border-box
 
</style>
