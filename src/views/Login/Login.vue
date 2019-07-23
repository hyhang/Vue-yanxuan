<template>
  <div class="loginWrapper" :style="loginType===0?'background-color:#f2f5f4;':'background-color:#fff;'">
    <div class="loginHeader">
      <router-link to="/" class="home" replace></router-link>
      <router-link to="/" class="logo"></router-link>
      <div class="right">
        <router-link to="/" class="search"></router-link>
        <router-link to="/cart" class="cart"></router-link>
      </div>
    </div>
    <div class="bigLogo" v-show="loginType===0">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
    </div>
    <div class="smallLogo" v-show="loginType!==0">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="logo">
    </div>
    <div class="btnWrapper" v-show="loginType===0">
      <div class="phone" @click="loginType=1">
        <i></i>
        <span>手机号码登录</span>
      </div>
      <div class="email" @click="loginType=2">
        <i></i>
        <span>邮箱帐号登录</span>
      </div>
      <div class="register">
        <span>手机号快捷注册</span>
        <i></i>
      </div>
    </div>
    <Input :loginType="loginType" v-show="loginType!==0"/>
    <div class="thirdWrapper" v-show="loginType===0">
      <div class="itemWrapper">
        <i class="iconWX"></i><span>微信</span>
      </div>
      <div class="itemWrapper">
        <i class="iconQQ"></i><span>QQ</span>
      </div>
      <div class="itemWrapper">
        <i class="iconWB"></i><span>微博</span>
      </div>
    </div>
    <div class="toggleWrapper" v-show="loginType!==0">
      <div class="toggleType" @click="loginType=0">
        <span to='login'>其他登录方式</span>
      </div>
      <div class="register">
        <span>注册账号</span>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Input from './Input/Input'
  export default {
    name: 'Login',
    data() {
      return {
        loginType: 0, // 0未选择，1手机登录, 2邮箱登录
      }
    },
    components: {
      Input
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginWrapper
    width 100%
    height 100%
    position relative
    .loginHeader
      padding 0 12px  
      height 44px
      box-sizing border-box
      background-color #FAFAFA
      vertical-align middle
      display flex
      align-items center
      position relative
      display flex
      justify-content space-between
      a
        display inline-block
        width 24px
        height 22px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-b1aa4c35e6.png)
        background-size 86px 210px
        background-position 0 -37px
      .logo
        width 86px
        height 27px
        position absolute
        margin auto
        left 0
        right 0
        background-position 0 -63px
      .search
        width 30px
        height 30px
        background-position 0 -178px
        margin-right 10px
      .cart
        width 30px
        height 30px
        background-position 0 0px
    .bigLogo
      width 100%
      height 205px
      display flex
      justify-content center
      align-items center
      img 
        width 134px
        height 45px
    .smallLogo
      margin-top 28px
      width 100%
      height 32px
      display flex
      justify-content center
      align-items center
      img 
        width 96px
        height 32px
    .btnWrapper
      box-sizing border-box
      padding 0 20px
      i 
        display inline-block
        width 20px
        height 20px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-156f617841.png)
        background-size 20px 145px
        margin-right 8px
      .phone,.email,.register
        display flex
        justify-content center
        align-items center
      .phone,.email
        height 45px
        width 100%
        border 1px solid #b4282d
        color #b4282d
        border-radius 3px
        margin-bottom 16px
        font-size 14px
      .phone
        color #ffffff
        background-color #b4282d
        i 
          background-position 0 -25px
    .thirdWrapper
      width 100%
      height 20px
      position absolute
      bottom 40px
      display flex
      justify-content center
      align-items center
      .itemWrapper
        box-sizing border-box
        padding 0 20px  
        font-size 14px
        border-right 1px solid #7f7f7f
        color #7f7f7f
        i 
          display inline-block
          width 20px
          height 20px
          margin-right 2px
          vertical-align middle
        span 
          vertical-align middle
        .iconWB
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUJBRTQ1ODkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUJBRTQ1NzkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4DmdgDAAAEUUlEQVR42uxYa2iOYRjeZlhOMwyLzWFTzsc55jj2Qw5FTEQWkR+OOS2SJWnL4QfSHHOsGRp+YDQk50aKwuaQmTRiK2ezfa67rq+enp73/b7nm8NW311Xz/s+x/u9n/v4hno8npDaRGEhtYyCDAcZDjL8jyncZnJ6enp1z2sIHARGAi3Y9xa4B5wBsnHG55ok4VHAFIVZoRhgPLAXeAmG57ltEGoTOP6AhFsCt4D2lGw4+0K1eSeAmTjv539l2LQefU0p4ZVAT43paRj3/EmVaAzMoF5eBa4Ay4E6Fh9RDhzFY19gkzI0FVhULaNTqBmQBswHIrUxMahojpsYlOs/CSQDIr07wFb056Fdy1tYw+kb8X4EKKuOhOcChbzCSIc5KT48xSTeThMyfgFMbeD4euChcoOzA1IJbBhFyewDmvuY3tRlH3Fb04FtwH7gK4fWYWwU8ItjXppgrRLYJF6kACT4+X3PlOd61M/u2Ec+9It4Cjwf595Z9BzhVDGxg/PK+t5WEsaGidwwwUJtXgITgRzgA9eLn80AdgAF2PeE6DNQwHGh7jyzlB/mtRf/JIyFPdBccrtiFx1O8TFHAsgY7t+YfV94rniZ+uyr9EvCWNQuQGZtKJ5tIduzbLspwiz2KWEwG8HFrf5yqH7OVoxwOc4t4XtHZc4Nf1RiixZ1TFQE5AOPgSfAN+AT84TWXD8cGGAIvd7rv0YBVaEpUcbyqP8isI2uoRmLB6O56cCkHLIb2AM89VOKkjcsYNRqoPR7GCEP4Mzr/l6JieHbaAYa5h4ClgFlAV5/HCCubJBh7DKQirNfWyXwWDDEwGwFk5BUjVnxqaupFi/oe88BcxxUTYxnNGCSZhJ9c5xtxTHLMGcGNsrR+2gwGTysAy1+LKPXXaCNwZi/0sC+G86R+TttGU7S3kW/Tmp9IsFjLnmEUB+G8VAD0yVMHU00jumm3wx31N4ztXepDrY77HUa+Ki8i66OcJj7wIWfGBuGVd0rxdcWGlShoeJDN1AFyoFVWg4h1MvJ2F14KrUpQotpzV5j06kLW/G9iUqmVaFEK90Nmmi4Q/8dCOmjjYTzVCPA4mht/APbXIVZJ8bEX1406HBX0VUHfjJtjU7y0F/KtS006Km3fInl82QGBp2y9DwAzErgOOxQQp3CeK6tH5YQq1aKaegbprzfYnrYicxIOD6l6LWXJJ9dqvVFsb+fgQ9xg6mB/vmRQnCXknxL+TJNGV/CQlPUI0Jb+wZYzCpYLdHl/ZGD7oraJPv6geKzzMcGog6bFaYu8j2f+in9/RkwKpgMSTJexfn1qasrgMGGI37Qy2TirMqAcwlDaZTBZNtLr8j0barFO35AXaAt0JUeJNmgKl5jzGENV2SbkPj1IwUbd6Zhpfhy7C4kiU22ZHvY73mgCbTtn58wBoOhQA8ilmG6kVLSvOdNiBHfZ2H5SP+L89cZrgkU/KEdZDjIcJBhd/otwADLKFf6Fop5QwAAAABJRU5ErkJggg==') no-repeat
          background-size 100% 100%
        .iconWX
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUI5M0JDMTkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDMDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6ex4WyAAADVklEQVR42uyZfWiNURzH77VJGEqjeV+LeZu2+MNbyQh/IKFtJaKRl1IrLyWSmz+UoigarXlZIrIQeWkihVLSRC62P7D4wyUhL9ts1+dXv9Vaz3nuee59HjXdU5/O2nn7nvOc8/v9zrnheDwe6k6pR6ibpbTgtODuLjjTtmIkEpHJzYTFMA3GwkDtoxU+QxQewjV4BHFDX8EJpnOpsw62Q56hWk/IUYphFzTCQajWCQW/JRA7maweKl3EmtJobfcUpgYuGLFl+nknpjjGeLivXykYwYhdTnYWevl4Vqpgs++CESuHqcYwmXfQkKDPX/AEmh3KDsMcv1f4KPRxWnjIZUL55McM/YmVGAVTdN+2O4xXTR+9fRFMRzPI5hrqnqG8w0zVGercgJj+LYfto0OdXCj3y6ytcjcakQryFpcBV0KtHtYyNXNOqVy/pOcU7hxeIkg+6bgEbdogI0GdP10W47VOQmzzD21/iPHaUhXc6sX7JUjS1wk4DsNhARTBMBgA3+CDbp3rcIvxW7wK9iuafwzrYR5sg0EWbWTvHxBLgo5mWyvhhwu9ABvVju+3FBvSelK/HsGTbAVHUxRbp7b2jsVZMCVp9wDRxTaCb6cg9hPsgKvQP8WJ94PLavNdBVeZQkKLtAf2asjZNV2ES4Z2L9URxbr8XyZdg+iwm+OQxqeSECsn/jksdCgToSWwDE46lM9m3E3kSxzKxFsuSuSat8Ibj4JvwlJDWZ66+r6Q71A+QfMiQ/vVRrPWaaWlk3uQbSlYJlnqEvd+VWeR5VDWri7c5BVj6BmcKLx8QTbLw0q/dxkwpI4iy8VS5SQwd1YBfFSjrlcWguPqsoNI7V5uzeL3h1h0Ku72bUCCG7xcQud3sqlN6jpDuvIFMBQkth0Dd/UC6ne64kVwqQrdJ4FMR3BiuKaPVFuc4aPY33DEi2CJotbaRFF6fZLOK3wUvJuxm6wFU/mcxwF2iiOAQh/E1uq7RqBPVT81pHyWYj/iHVc4hbtBvK3F9EnrdJLtxX2XmLZhUI+B32ENTNfozYuNbnG7OoWT+ckgice8bL2NF6o1yVJ33ai3E9lCG2ALfIERpttPZujfJImVzyumCYtFqNQQtcB0DsLpH2XSgtOC04L/L8F/BRgAYafuBxC0r5MAAAAASUVORK5CYII=') no-repeat
          background-size 100% 100%
        .iconQQ
          background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ODI0OUYwQzUzMjA2ODExODIyQUREODlBNDY0MUIzRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFOUJBRTQ1MDkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFOUI5M0JDODkyREQxMUU2QTVFMDgxQzNGODlGQkY1RCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTgyNDlGMEM1MzIwNjgxMTgyMkFERDg5QTQ2NDFCM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4pjhZyAAACIUlEQVR42uyZPUjDQBTHU621gq2KHdSiIurQrdgOOlhpQfzCuSAoFCelFNRdCm4u4iCujl2cRFHo5qKguDjoIC4VRBCs+K1Y/4cnhKLF9N5LKeTBjzva3OXHy+WSu9hyuZxWTlGhlVlYwpZwXtiLaZRMJn/7eQCMgyBoBTXgBWTACdgC6QLt+YTzwgdWweAf/3eAfpAA+2AOHJdqSIyC0wKy+SHEj5DhaCmEA2C7yD5SkA6bKewAe4pXZwfSdWYJL4NGRWEnWDPayGb00YysuFFkCWeqZvR5zZnhqEYbU9xDYoxYeIRbOEgsHMCQcLAIo2MvCi+xsAt0cWWYWvYnWriEa5mEXVzCj0zCT1zCHiZhD5dwgkk4Tv6kkzNEhvHd3IdznFFmeIZ5MRGnHhLTzMKTyLCNRBgdhVA0MQu75RKLJMMxk9aYMeWbTl6mW9BggvCrOA/O+ayS4V6TZEVUg4jqkAhr5kZYVbhHV88ySd7p6n5V4U5ZrjDOxQtgUdbbVIX98uab1+TODUMcov8lWe9WFRaSE7IuZosrYtl7cKFbLqWpV81iEZoiFJ5Fn+tsy3wpvYtiiED2AH31mbGRMgw2FGU3jcqqCIutVdWPIx8QjhhtZGhI4ARi31dsmbYTjuEbEELf5/852Oj+sFtm9lL73hCsklfpU2RMvgsIHoB4H3DKhatTPnbtuuPfwRuoBPWsN10pw/ooYwmXu/CXAAMA+zyBlSoNLhoAAAAASUVORK5CYII=') no-repeat
          background-size 100% 100%
    .toggleWrapper
      padding 0 20px
      box-sizing border-box
      .toggleType
        height 45px
        width 100%
        border 1px solid #b4282d
        border-radius 3px
        margin-bottom 16px
        box-sizing border-box
        display flex
        justify-content center
        align-items center
        span
          font-size 14px
          color #b4282d
    .register
      color #333333
      font-size 14px
      height 20px
      display flex
      justify-content center
      i 
        display inline-block
        width 14px
        height 14px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-8d47138d73.png)
        background-size 100% 100%
        margin-left 2px

</style>
