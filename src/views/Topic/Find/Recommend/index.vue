<template>
  <div class="recommendWrapper">
    <div class="scroll">
      <div class="ad" v-if="recommend[0]">
        <img :src="recommend[0].ad.picUrl" alt="">
      </div>
      <div class="bigImgTopic" v-if="recommend[0]">
        <div class="author">
          <div class="avatar">
            <img :src="recommend[0].topics[0].avatar" alt="">
          </div>
          <div class="nickName">{{recommend[0].topics[0].nickname}}</div>
        </div>
        <div class="title">{{recommend[0].topics[0].title}}</div>
        <img :src="recommend[0].topics[0].picUrl" alt="">
        <div class="readCounted">
          <i class="icon"></i>
          <span class="count">{{recommend[0].topics[0].readCount}}</span>
        </div>
      </div>
      <div class="customTopic">
        <div class="info">
          <div class="author">
            <div class="avatar">
              <img :src="recommend[0].topics[0].avatar" alt="">
            </div>
            <div class="nickName">{{recommend[0].topics[0].nickname}}</div>
          </div>
        </div>
        <img src="" alt="">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
    name: 'Recommend',
    mounted() {
      this.$store.dispatch('getRecommend')
      this.index = this.$route.params.index
    },
    computed: {
      ...mapState({
        recommend: state => state.topic.recommend
      }),
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendWrapper
    width 100%
    height 100%
    padding-top 86px
    padding-bottom 50px
    margin-bottom -50px
    .scroll
      width 100%
      display flex
      flex-shrink 0
      flex-wrap wrap
      .ad
        width 100%
        height 224px
        box-sizing border-box
        background-color #ffffff
        margin 10px 0
        padding 18px 15px
        img 
          width 100%
      .bigImgTopic
        width 100%
        background-color #ffffff
        margin 10px 0
        padding 18px 15px
        box-sizing border-box
        .author
          height 28px
          margin-bottom 12px
          display flex
          align-items center
          .avatar
            width 27px
            height 27px
            border-radius 50%
            overflow hidden
            img 
              width 27px
              height 27px
          .nickName
            font-size 14px
            color #333333
            margin-left 8px
        .title
          color #333
          font-size 18px
          margin -4px 0 8px
          line-height 1.5
        img 
          height 188px
          border-radius 4px
        .readCounted
          margin 9px 0 -8px
          .icon
            display inline-block
            width 14px
            height 10px
            vertical-align middle
            background url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAUCAYAAACeXl35AAAAAXNSR0IArs4c6QAAAgFJREFUSA3FVk1LAkEYbtdYNCHK6BJdrKNg+UFElyIoirp1Kgg8RD8hO3osj9GlguhSXjqW1SHqGOFHCeIpvXgUC8IURe15xZFp21mXKBuYnXfer2ffmWdmV+oy0CKRSI8syyv1en0Z7qPoI82wNHRp2C5qtdq51+v9aJdO0nNIJBL95XI5AB8fei+6XnuH8cRisQQcDkde5CgEjEajPgQFUcGgKFigz6Fiv9vtPtayfwPMZDLmfD5/CKB1rQCjOkmSTm0224bdbi/xMV8AU6nUQKFQCMNhgnf6qQzQCF58EXubYzlagPF4vK9ard7C4GbGXxqfFEWZdTqdr5RPpkcymVTAskuI7cCy2J81+A1Rb8pZyHptvFKphAmDnLrpUSqV9lD6FMk6LQsGjqkYGEKim2Kx+Iy4YVEsck8CYx/2TQlsXIDiSuTM9FQNmBdic36MxWKrWKEzXqclm0ymJVrSXS2jWoeE92odm+vZmA+N4MhOYw955V/LBOg3AoIlnRH56dn4GCzptuzxeK5xXg54g5aMZQuCIDa1jXRkU+vVc2AcuVyucOMcEmXBojsjTEU1W2zPqLImmJChBAywB7PZPA2Gl//n4NNboNw3q9U6D/GR5r/R6GpDnjl2y1DOVoUMoKOXNwOlsWOfJx60ox9gHljwiyGB1Wn4vYCthn8xPgEMNuuoL/qqaAAAAABJRU5ErkJggg==") no-repeat 0/100%
            margin-right 4px
          .count
            font-size 11px
            color #999
            vertical-align middle

</style>
