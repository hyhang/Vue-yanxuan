<template>
  <div class="searchWrapper" v-if="keywords.defaultKeyword">
    <div class="searchHeader">
      <div class="inputWrapper">
        <i class="icon"></i>
        <input @input="autoComplete" type="text" v-model="keywordPrefix" :placeholder="keywords.defaultKeyword.keyword">
        <i class="clear" v-if="keywordPrefix" @click="keywordPrefix=''"></i>
      </div>
      <span class="cancel" @click="$router.back()">取消</span>
    </div>

    <div class="hotKeywords" v-if="!keywordPrefix">
      <div class="header">热门搜索</div>
      <div class="content">
        <ul>
          <li v-for="keywordObj in keywords.hotKeywordVOList" :key="keywordObj.keyword" :class="keywordObj.highlight===1?'highlight':null">{{keywordObj.keyword}}</li>
        </ul>
      </div>
    </div>

    <ul class="autoCompleteTip" v-if="keywordPrefix">
      <li v-for="(word,index) in autoCompleteWord" :key="index">{{word}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  import throttle from 'lodash/throttle'
  export default {
    name: 'Search',
    data() {
      return {
        keywordPrefix: ''
      }
    },
    mounted() {
      this.$store.dispatch('getKeywords')
    },
    computed: {
      ...mapState({
        keywords: state => state.search.keywords,
        autoCompleteWord: state => state.search.autoCompleteWord
      }),
      haha(){
        return throttle(() =>{
          this.$store.dispatch('getCompleteWord',this.keywordPrefix)
        },700,{leading:true})
      }
    },
    methods: {
      autoComplete() {
        this.$store.dispatch('getCompleteWord',this.keywordPrefix)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../assets/css/mixin.stylus"
  .searchWrapper
    width 100%
    .searchHeader
      width 100%
      height 44px
      box-sizing border-box
      padding 0 15px
      display flex
      font-size 14px
      background-color #fff
      color #333333
      align-items center
      .inputWrapper
        display flex
        align-items center
        flex-grow 1
        height 28px
        background-color #f4f4f4
        box-sizing border-box
        padding 0 10px  
        position relative
        .clear
          width 25px
          height 25px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/clearIpt-0821f71561.png)
          background-size 100% 100%
          position absolute
          right 0
        i 
          display inline-block
          width 14px
          height 14px
          background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png)
          background-size 100% 100%
          background-repeat no-repeat
          margin-right 8px
        input  
          padding-bottom 1px
          background-color #f4f4f4
          outline none
    .cancel
      color #333333
      margin-left  15px
    .hotKeywords
      width 100%
      box-sizing border-box
    .header
      height 45px
      line-height 45px
      background-color #ffffff
      padding 0 15px
      color #999999
      font-size 14px
    .content
      padding-left  15px
      display flex
      background-color #fff
      ul
        display flex
        flex-wrap wrap
        li
          color #333333
          border 1px solid #aaa
          margin 0 16px 16px 0
          padding 0 7px
          font-size 12px
          line-height 2
          border-radius 3px
          box-sizing border-box
        li.highlight
          color #b4282d
          border 1px solid #b4282d
    .autoCompleteTip
      width 100%
      padding-left 15px
      background #ffffff
      li
        font-size 14px
        color #333333
        height 49px
        line-height 49px
        bottom-border-1px(#ddd)

</style>
