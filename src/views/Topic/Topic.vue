<template>
  <div class="TopicWrapper">
    <Header/>
    <div class="tabs">
      <ul>
        <li :class="currentIndex===index?'active':null" v-for="(tab,index) in tabs" :key="tab.tabId" @click="updateCurrentIndex(index)">
          <router-link :to="{name:'topicIndex',params:{index}}">{{tab.tabName}}</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template> 

<script type="text/ecmascript-6">
  import Header from '../../components/TopicExpertHeader/'
  import { mapState } from 'vuex'
  import BS from 'better-scroll'
  export default {
    name: 'Topic',
    data() {
      return {
        currentIndex: 0
      }
    },
    components: {
      Header
    },
    mounted() {
      this.$store.dispatch('getTopicTabs')
    },
    computed: {
      ...mapState({
        tabs: state => state.topic.tabs,
      })
    },
    watch: {
      tabs() {
        this.$nextTick(() => {
          new BS('.tabs', {
            scrollX: true,
            click: true
          })
        })
      }
    },
    methods: {
      updateCurrentIndex(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../assets/css/mixin.stylus'
  .TopicWrapper
    width 100%
    background-color #f4f4f4
    .tabs
      height 36px
      display flex
      overflow hidden
      background-color #FAFAFA
      bottom-border-1px(#ddd)
      position fixed
      top 50px
      left 0
      ul
        display flex
        flex-shrink 0
        li
          height 36px
          line-height 36px
          font-size 14px
          margin 0 10px
          padding 0 4px 
          flex-shrink 0
          box-sizing border-box
          a
            color #7f7f7f
        li.active
          border-bottom 3px solid #b4282d
          a
            color #b4282d

          
</style>
