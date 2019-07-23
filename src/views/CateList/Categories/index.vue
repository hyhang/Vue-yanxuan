<template>
  <div class="Wrapper">
    <div class="CategoriesWrapper">
      <ul>
        <li @click="handleClick(category.id)" v-for="(category, index) in categoryList" :class="currentId*1===category.id?'active':null" :key="index">
          <router-link :to="{path:'category',query:{id:category.id}}" replace>{{category.name}}</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from "vuex"
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        currentId: null
      }
    },
    methods: {
      handleClick(id) {
        this.currentId = id
      }
    },
    mounted() {
      this.$store.dispatch('getCategories')
      this.currentId = this.$route.query.id ? this.$route.query.id : '1022001'
      new BScroll('.CategoriesWrapper', {
        scrollY: true,
        click: true
      })
    },
    computed: {
      ...mapState({
        categoryList: state => state.categoryList.categoryList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .Wrapper
    width 100%
    display flex
    .CategoriesWrapper
      display flex
      width 81px
      padding 20px 0
      box-sizing border-box
      background-color #fff
      ul
        width 81px
        height 534px
        display flex
        flex-wrap wrap
        flex-direction column
        justify-content space-between
        li
          width 100%
          height 24px
          font-size 14px
          line-height 24px
          box-sizing bord
          text-align center
          a
            color #333
          &.active
            border-left 3px solid #AB2B2B
            text-indent -3px
            a
              color #AB2B2B

</style>
