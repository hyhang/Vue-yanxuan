<template>
  <div class="catrgory" v-if="category">
    <div class="inner">
      <img :src="category.bannerUrl" alt="">
      <ul>
        <li v-for="(item,index) in category.subCateList" :key="index">
          <img :src="item.wapBannerUrl" alt="">
          <div class="name">{{item.name}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BS from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: 'Category',
    data() {
      return {
        category: {},
        id: null
      }
    },
    computed: {
      ...mapState({
        categoryList: state => state.categoryList.categoryList
      })
    },
    mounted() {
      this.$store.dispatch('getCategories')
      this.id = this.$route.query.id ? this.$route.query.id : '1022001'
      this.category = this.categoryList.find(item => item.id === this.id * 1)
    },
    watch: {
      $route() {
        this.id = this.$route.query.id
        this.category = this.categoryList.find(item => item.id === this.id * 1)
         new BS('.catrgory', {
          scrollY: true,
          click: true
        })
      },
      categoryList () {
        this.category = this.categoryList.find(item => item.id === this.id * 1)
        this.$nextTick(() => {
          new BS('.catrgory', {
            scrollY: true,
            click: true
          })
        })
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .catrgory
    width 100%
    height 574px
    overflow hidden
    .inner 
      padding 20px 15px 10px
      min-height 575px
      box-sizing border-box
      img 
        width 100%
        height 96px
      ul
        display flex
        flex-wrap wrap
        padding-bottom 50px
        margin-bottom -50px
        li
          width 72px
          margin-right 22px
          line-height 1.5
          img 
            width 72px
            height 72px
            border-radius 50%
        li:nth-child(3n)
          width 72px
          margin-right 0px
</style>
