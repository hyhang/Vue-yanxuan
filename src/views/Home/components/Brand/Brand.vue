<template>
  <div class="brandWrapper">
    <div class="moduleHeader">
      <div class="moduleTitle">品牌制造商直供</div>
      <div class="more">
        更多
        <i></i>
      </div>
    </div>
    <div class="brandContent">
      <div class="brand1">
        <p>海外制造商</p>
        <span>9.9元起</span>
      </div>
      <div class="brand2">
        <p>海外制造商</p>
        <span>9.9元起</span>
      </div>
      <div class="brand3">
        <p>海外制造商</p>
        <span>9.9元起</span>
      </div>
      <div class="brand4">
        <p>海外制造商</p>
        <span>9.9元起</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Brand'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .brandWrapper
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
    .brandContent
      margin-bottom 10px
      display flex
      flex-wrap wrap
      div 
        box-sizing border-box
        width 50%
        height 130px
        padding 11px 2px 2px 0
        &.brand1
          background-image:url(http://yanxuan.nosdn.127.net/74e2ea8f81004d0a60f90fc8e4649058.png?imageView&thumbnail=343y260&enlarge=1)
          background-size 100% 100%
        &.brand2
          background-image:url(http://yanxuan.nosdn.127.net/c097be14110f769d58245cdad73e15c3.png?imageView&thumbnail=343y260&enlarge=1)
          background-size 100% 100%
        &.brand3
          background-image:url(http://yanxuan.nosdn.127.net/66a23d776f41cba70d00803a5231124b.png?imageView&thumbnail=343y260&enlarge=1)
          background-size 100% 100%
        &.brand4
          background-image:url(http://yanxuan.nosdn.127.net/3bf5a8a2f6eef284ecb40806ae9ce043.png?imageView&thumbnail=343y260&enlarge=1)
          background-size 100% 100%
        p,span
          display block
          text-align center
          line-height 1.5
          color #7f7f7f
        p
          color #333333
          font-size 14px
</style>
