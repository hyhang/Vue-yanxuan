<template>
  <div class="recommendWrapper">
    <div class="scroll" v-if="recommend[0]" ref="topics">
      <div class="ad">
        <img :src="recommend[0].ad.picUrl" alt="">
      </div>
      <div class="recommends" v-for="(item,index) in recommend" :key="index">
        <div class="topics" v-for="(topic,index) in recommend[index].topics" :key="index">
          <div class="bigImgTopic" v-if="topic.style===1">
            <div class="author">
              <div class="avatar">
                <img :src="topic.avatar" alt="">
              </div>
              <div class="nickName">{{topic.nickname}}</div>
            </div>
            <div class="title">{{topic.title}}</div>
            <img :src="topic.picUrl" alt="">
            <div class="readCounted">
              <i class="icon"></i>
              <span class="count">{{topic.readCount}}</span>
            </div>
          </div>
          <div class="customTopic" v-if="topic.style===2">
            <div class="info">
              <div class="author">
                <div class="avatar">
                  <img :src="topic.avatar" alt="">
                </div>
                <div class="nickName">{{topic.nickname}}</div>
              </div>
              <div class="title">{{topic.title}}</div>
              <div class="subTitle">{{topic.subTitle}}</div>
              <div class="readCounted">
                <i class="icon"></i>
                <span class="count">{{topic.readCount}}</span>
              </div>
            </div>
            <img :src="topic.picUrl" alt="">
          </div>
        </div>
      </div>
      <div class="autoTopicWrapper" v-if="autotopic[0]">
        <div class="autotopic" v-for="(autotopicObj,index) in autotopic" :key="index">
          <div class="recommends" v-for="(topicObj,index) in autotopicObj.result" :key="index">
            <div class="topics" v-for="(topic,index) in topicObj.topics" :key="index">
              <div class="bigImgTopic" v-if="topic.style===1">
                <div class="author">
                  <div class="avatar">
                    <img :src="topic.avatar" alt="">
                  </div>
                  <div class="nickName">{{topic.nickname}}</div>
                </div>
                <div class="title">{{topic.title}}</div>
                <img :src="topic.picUrl" alt="">
                <div class="readCounted">
                  <i class="icon"></i>
                  <span class="count">{{topic.readCount}}</span>
                </div>
              </div>
              <div class="customTopic" v-if="topic.style===2">
                <div class="info">
                  <div class="author">
                    <div class="avatar">
                      <img :src="topic.avatar" alt="">
                    </div>
                    <div class="nickName">{{topic.nickname}}</div>
                  </div>
                  <div class="title">{{topic.title}}</div>
                  <div class="subTitle">{{topic.subTitle}}</div>
                  <div class="readCounted">
                    <i class="icon"></i>
                    <span class="count">{{topic.readCount}}</span>
                  </div>
                </div>
                <img :src="topic.picUrl" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import BS from 'better-scroll'
  export default {
    name: 'Recommend',
    data() {
      return {
        limitScrollValue: 581,
        page: 1,
        topicsHeight: 0
      }
    },
    mounted() {
      this.$store.dispatch('getRecommend')
      this.index = this.$route.params.index
      window.addEventListener('scroll', this.handleScroll)
    },
    computed: {
      ...mapState({
        recommend: state => state.topic.recommend,
        autotopic: state => state.topic.autotopic,
      }),
      result() {
        return this.recommend
      }
    },
    methods: {
      handleScroll () {
        let scrollHeight = document.documentElement.scrollTop
        this.topicsHeight = this.$refs.topics.offsetHeight
        console.log(this.topicsHeight - scrollHeight , this.limitScrollValue);
        let isSending = false
          if (Math.floor(this.topicsHeight - scrollHeight) <= this.limitScrollValue && !isSending) {
            isSending = !isSending
            console.log(isSending)
            setTimeout(() => {
              isSending = !isSending
            }, 5000)
            this.$store.dispatch('getAutoTopic',this.page)
            this.page = this.page + 1
          }
      }
    },
    // watch: {
    //   recommend() {
    //     new BS('.recommendWrapper', {
    //       scrollY: true,
    //       click: true
    //     })
    //   }
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendWrapper
    width 100%
    height 100%
    padding-top 86px
    .scroll
      width 100%
      display flex
      flex-shrink 0
      flex-wrap wrap
      padding-bottom 50px
      margin-bottom -50px
      // padding-top 86px
      // margin-top -86px
      .ad
        width 100%
        height 224px
        box-sizing border-box
        background-color #ffffff
        margin 10px 0
        padding 18px 15px
        img 
          width 100%
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
      .bigImgTopic
        width 100%
        background-color #ffffff
        margin-bottom 10px
        padding 18px 15px
        box-sizing border-box
        img 
          height 188px
          width 345px
          border-radius 4px
      .customTopic
        width 100%
        background-color #ffffff
        margin-bottom 10px
        padding 18px 15px
        box-sizing border-box
        display flex
        justify-content space-between
        .info
          width 200px
          .subTitle
            color #7f7f7f
            font-size 14px
            padding-top 4px
        img 
          width 136px
          border-radius 4px
</style>
