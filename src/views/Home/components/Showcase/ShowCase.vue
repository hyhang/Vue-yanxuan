<template>
  <div class="showCaseWrapper">
    <div class="moduleHeader">
      <div class="moduleTitle">人气推荐</div>
      <div class="more">
        更多
        <i></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'ShowCase'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .showCaseWrapper
    background-color #fff
    width 100%
    box-sizing border-box
    padding 0 15px 15px 15px
    margin-bottom 10px
    .moduleHeader
      height 50px
      display flex
      align-items center
      justify-content space-between
      font-size 16px
      color #333333
      .more
        margin-right 3px
        i
          display inline-block
          width 6px
          height 11px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/index-titleArrow-193a1a730c.png)
          background-repeat no-repeat
          background-size 100% 100%
 
</style>
