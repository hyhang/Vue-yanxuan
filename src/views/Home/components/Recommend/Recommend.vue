<template>
  <div class="recommendWrapper">
    <div class="moduleHeader">
      <div class="moduleTitle">人气推荐</div>
      <div class="more">
        更多
        <i></i>
      </div>
    </div>
    <div class="recommendContent">
      <div class="spitem">
        <img src="https://yanxuan.nosdn.127.net/85a480bd9a852da923b8d3b5c7f7b759.png?imageView&quality=65&thumbnail=280x280" alt="">
        <div class="spitemContent">
          <span class="statusTag">每满99减15券</span>
          <div class="name">全棉针织条纹大豆纤维夏被 可机洗</div>
          <div class="desc">可裸睡针织棉，植物抗菌柔弹</div>
          <span class="price">￥199</span>
        </div>
      </div>
      <ul>
        <li>
          <img src="https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span class="name">红豆薏米丸 100克</span>
          <span class="price">￥39</span>
          <div class="tagWrapper">
            <p class="statusGradientPrice">加价购</p>
          </div>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span class="name">红豆薏米丸 100克</span>
          <span class="price">￥39</span>
          <div class="tagWrapper">
            <p class="statusGradientPrice">加价购</p>
          </div>
        </li>
        <li>
          <img src="https://yanxuan.nosdn.127.net/4114839cec128a22b8f60ddafec3f944.png?imageView&quality=65&thumbnail=330x330" alt="">
          <span class="name">红豆薏米丸 100克</span>
          <span class="price">￥39</span>
          <div class="tagWrapper">
            <p class="statusGradientPrice">加价购</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Recommend'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendWrapper
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
    .recommendContent
      display flex
      flex-wrap wrap
      .spitem
        width 100%
        background-color #fef0df
        display flex
        align-items center
        margin-bottom 10px
        img 
          width 140px
          height 140px
        .spitemContent
          box-sizing border-box
          padding-left 15px
          .statusTag
            color #b4282d
            padding 0 7px
            line-height 1.4
            font-size 11px
            background-color rgba(255,255,255,0.9)
            background-image url(//yanxuan.nosdn.127.net/ed89ab4f5ad97ad23257f635a9c2fdbb.png),url(//yanxuan.nosdn.127.net/344655c651a5cf17b7d6096b69be7aba.png),url(//yanxuan.nosdn.127.net/6dcff693a2be08725c1313c7e2390840.png)
            background-repeat no-repeat,no-repeat,repeat-x
            background-position left center, right center, right center
            background-size auto 100%, auto 100%, auto 100%
            margin-bottom 4px
          .name
            width 170px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            font-size 14px
            color #333
            margin 8px 0 4px
          .desc
            color #7f7f7f
            margin 4px 0 8px
          .price
            color #b4282d
            font-size 14px
      ul
        width 100%
        display flex
        justify-content space-between
        li
          width 108px
          line-height 1.5
          img 
            width 108px
            height 108px
            background-color #f5f5f5
          .name
            color #333
            font-size 12px
          .price
            color #b4282d
            font-size 12px
          .tagWrapper
            margin-top 4px
            .statusGradientPrice
              display inline-block
              border 1px solid #b4282d
              padding 0 6px
              line-height 1.2
              font-size 11px
              border-radius 20px
              color #b4282d


</style>
