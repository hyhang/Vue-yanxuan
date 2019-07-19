<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="slideItem swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="slideItem swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/2f9c81a130447f34424a16a40d66cbba.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted(){
      new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'custom',
          autoplay: true,
          renderCustom: function (swiper, current, total) {
            var _html = '';
            for ( var i = 1; i <= total; i++ ) {
            if ( current == i ) {
              _html += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
            } else {
              _html += '<span class="swiper-pagination-customs"></span>';
            }
              }
            return _html; //返回所有的页码html
          }
        }
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper-container
    height 185px
    width 100%
    .swiper-wrapper
      img 
        height 185px
        width 100%
    .swiper-pagination
      /deep/ .swiper-pagination-customs
        width 20px
        height 2px
        display inline-block
        background-color rgba(255,255,255,0.5)
        margin 0 5px 0 0
      /deep/ .swiper-pagination-customs-active
        width 20px
        height 2px
        background-color #fff
        display inline-block
</style>
