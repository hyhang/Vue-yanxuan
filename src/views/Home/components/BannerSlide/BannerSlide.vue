<template>
  <div class="bannerSlideWrapper">
    <div class="banner"></div>
    <div class="slide">
      <ul>
        <li>
          <img src="https://yanxuan.nosdn.127.net/431a09a43914483f4d70aeda8ecb8a59.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span class="name"></span>
          <div class="priceWrapper">
            <span class="price">￥29.4</span>
            <span class="oldPrice">￥49</span>
          </div>
          <div class="tagWrapper">
            <span class="tag"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'BannerSlide'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .bannerSlideWrapper
    background-color #fff
    width 100%
    .banner
      width 100%
      height 185px
      background-image url(https://yanxuan.nosdn.127.net/a415cf841405c9c5e14e435d8c57408b.jpg?imageView&thumbnail=750x0&quality=75)
      background-size 100% 100%
      margin-bottom 10px
    .slide
      padding 0 15px
      ul 
        display flex
        li

</style>
