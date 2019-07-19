<template>
  <div id="home">
    <HomeHeader/>
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
    <Swiper/>
    <div class="ServicePolicy">
      <ul>
        <li class="item">
          <i></i><span>网易自营品牌</span>
        </li>
        <li class="item">
          <i></i><span>30天无忧退货</span>
        </li>
        <li class="item">
          <i></i><span>48小时快速退款</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import HomeHeader from '../../components/HomeHeader/HomeHeader'
  import Swiper from './components/Swiper.vue'
  export default {
    name: 'Home',
    components: {
      HomeHeader,
      Swiper
    }
  }
</script>

<style lang="stylus" scoped>
  @import '../../assets/css/mixin.stylus';
  #home
    width 100%
    .tabWrap
      position relative
      height 30px
      width 100%
      display flex
      padding-right 80px
      box-sizing border-box
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
          bottom-border-1px(#fff)
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
    .ServicePolicy
      padding 0 15px  
      height 36px
      ul
        display flex
        justify-content space-between
        .item
          display flex
          line-height 36px
          align-items center
          span 
            font-size 12px
            color #333333
            margin-left 4px
          i 
            width 16px
            height 16px
            background-repeat no-repeat
            background-size 100% 100%
          i:nth-child(1)
            background-image:url(http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png)
</style>
