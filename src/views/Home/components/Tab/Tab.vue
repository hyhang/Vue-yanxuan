<template>
  <div>
    <div class="tabWrap">
      <div class="scroll" v-show="!isShowTabList">
        <ul class="tabInner">
          <li :class="index===currentIndex?'active':null" v-for="(item,index) in tab" :key="index" @click="handleClick(index)">{{item}}</li>
        </ul>
      </div>
      <div class="tabAlter" v-show="isShowTabList">
        全部频道
      </div>
      <div class="toggleWrap">
          <div class="liner"></div>
          <transition name="rotate">
            <div class="toggle" @click="showTabList" :class="{rotate:isShowTabList}">
              <div class="icon"></div>
            </div>
          </transition>
      </div>
    </div>
    <div class="tabList" v-show="isShowTabList">
      <ul>
        <li v-for="(item,index) in tab" :key="index" @click="handleClick(index)" :class="index===currentIndex?'active':null">{{item}}</li>
      </ul>
    </div>
    <div class="mask" v-show="isShowTabList"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BS from 'better-scroll'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        currentIndex: 0,
        isShowTabList: false
      }
    },
    mounted() {
      this.$store.dispatch('getTabData')
    },
    computed: {
      ...mapState({
        tab: state => state.home.tab
      })
    },
    methods: {
      handleClick(index) {
        this.currentIndex = index
      },
      showTabList() {
        this.isShowTabList = !this.isShowTabList
      }
    },
    watch: {
      tab() {
        this.$nextTick(() => {
          new BS('.scroll', {
            click: true,
            scrollX: true
          })
        })
      }
    }
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
    z-index 5
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
            border-bottom 2px solid #b4282d
    .tabAlter
      height 30px
      line-height 30px
      padding-left 15px
      box-sizing border-box
      font-size 14px
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
        display flex
        justify-content center
        align-items center
        .icon
          width 15px
          height 15px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
          background-size 15px 15px
          background-position center
          background-repeat no-repeat
          transform rotate(0deg)
          transition: all 0.5s
      .toggle.rotate .icon 
        transform rotate(180deg)
  .tabList
    width 100%
    height 156px
    position fixed
    left 0
    top 74px
    z-index 5
    background-color #fff
    padding-top 12px
    ul
      display flex
      width 100%
      flex-wrap wrap
      li
        width 75px
        height 28px
        box-sizing border-box
        line-height 28px
        font-size 12px
        margin 0 0 20px 15px
        border 1px solid #cccccc
        border-radius 2px
        background-color #fafafa
        text-align center
        color #333
        &.active
          border 1px solid #b4282d
          color #b4282d
  .mask
    width 100%
    height 100%
    position fixed
    left 0
    top 0
    z-index 3
    background-color rgba(0,0,0,0.5)
</style>
