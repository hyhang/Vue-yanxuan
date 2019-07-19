<template>
  <div class="categoriesWrapper">
    <ul>
      <li v-for="(category, index) in categories" :key="index">
        <img :src="category.picUrl" alt="">
        <div class="text">{{category.text}}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from 'vuex'
  export default {
    name: 'Categories',
    computed: {
      ...mapState({
        categories: state => state.home.categories
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .categoriesWrapper
    background-color #ffffff
    width 100%
    height 170px
    padding-bottom 17px
    ul
      display flex
      flex-wrap wrap
      text-align center
      li
        width 20%
        height 78px
        padding 5px 10px
        box-sizing border-box
        img
          height 55px
          width 55px
        .text
          font-size 12px
          margin-top 5px
          color #333333
 
</style>
