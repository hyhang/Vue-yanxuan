<template>
  <div>
    <div class="tabWrap">
      <div class="scroll">
        <ul class="tabInner">
          <li class="active">推荐</li>
          <li>居家生活</li>
          <li>服饰鞋包</li>
          <li>美食酒水</li>
          <li>个护清洁</li>
          <li>母婴亲子</li>
          <li>运动旅行</li>
          <li>数码家电</li>
          <li>数码家电</li>
        </ul>
      </div>
      <div class="toggleWrap">
        <div class="liner"></div>
        <div class="toggle"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../../assets/css/mixin.stylus';
  .tabWrap
    background-color #fff
    position fixed
    left 0
    top 44px
    height 31px
    width 100%
    display flex
    padding-right 80px
    box-sizing border-box
    z-index 2
    border-bottom 1px solid #ddd
    .scroll
      display flex
      overflow hidden
      .tabInner
        display flex
        flex-wrap nowrap
        flex-shrink 0
        height 30px
        padding-left 15px
        box-sizing border-box
        li
          line-height 30px
          height 30px
          font-size 14px
          padding 0 8px
          margin-right 5px
          box-sizing border-box
          color #333
          &.active
            color #b4282d
            border-bottom 3px solid #b4282d
    .toggleWrap
      display flex
      position absolute
      top 0px
      right 0px
      .liner
        width 30px
        height 30px
        background-image linear-gradient(to right, rgba(255,255,255,0) 0, rgba(255,255,255,1))
      .toggle
        width 50px
        height 30px
        background-color #fff
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
        background-size 15px 15px
        background-position center
        background-repeat no-repeat
    
</style>
