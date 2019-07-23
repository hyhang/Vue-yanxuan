<template>
    <div class="InputWrapper">
      <div class="phone" v-show="loginType===1">
        <div class="phoneNumberWrapper">
          <input @focus="resetTip" maxlength="11" type="text" v-model="phoneNumber" class="phoneNumber" placeholder="请输入手机号">
          <div class="clear" v-if="phoneNumber" @click="phoneNumber='';resetTip()"></div>
        </div>
        <div class="codeWrapper">
          <input maxlength="6" type="text" v-model="code" class="code" placeholder="请输入短信验证码">  
          <div class="getCode" v-if="checkType">获取验证码</div>
        </div>
        <div class="tip" v-if="phoneLoginTip">{{phoneLoginTip}}</div>

        <div class="login">
          <div class="tool">
            <span class="forgetPwd">{{checkType?'遇到问题？':'忘记密码？'}}</span>
            <span class="toggleCheckType" @click="toggleCheck">使用{{checkType?'短信':'密码'}}验证登录</span>
          </div>
          <div class="loginBtn" @click="phoneLoginCheck">登录</div>
        </div>
      </div>
      <div class="email" v-show="loginType===2">
        <div class="emailWrapper">
          <input type="text" @focus="resetTip" class="emailNumber" v-model="email" placeholder="邮箱账号">
          <div class="clear" v-if="email" @click="email='';resetTip()"></div>
        </div>
        <div class="passwordWrapper">
          <input type="text" @focus="resetTip" class="emailPassword" v-model="password" placeholder="密码">
          <div class="clear" v-if="password" @click="password='';resetTip()"></div>
        </div>
        <div class="tip" v-if="emailLoginTip">{{emailLoginTip}}</div>

        <div class="login">
          <div class="tool">
            <span>注册账号</span>
            <span>忘记密码</span>
          </div>
          <div class="loginBtn" @click="emailLoginCheck">登录</div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['loginType'],
    data() {
      return {
        checkType: true, //true为验证码，fase为密码
        phoneNumber: '',
        code: '',
        email: '',
        password: '',
        phoneLoginTip: '',
        emailLoginTip: ''
      }
    },
    methods: {
      toggleCheck(){
        this.checkType=!this.checkType
      },
      phoneLoginCheck() {
        if(this.phoneNumber.length === 0) {
          this.phoneLoginTip = '请输入手机号'
        } else if (!/^1[3-9]\d{9}$/.test(this.phoneNumber)) {
          this.phoneLoginTip = '手机号格式错误'
        } else if (this.code.length === 0) {
          this.phoneLoginTip = '请输入短信验证码'
        } else if (this.code.length < 6) {
          this.phoneLoginTip = '短信验证码格式错误'
        } else if (/^1[3-9]\d{9}$/.test(this.phoneNumber)&&this.code.length === 6) {
          this.phoneLoginTip = ''
        }
      },
      emailLoginCheck() {
        if (this.email.length === 0) {
          this.emailLoginTip = '请输入账号'
        } else if (!/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})$/.test(this.email)) {
          this.emailLoginTip = '邮箱格式错误'
        } else if (this.password.length === 0) {
          this.emailLoginTip = '请输入密码'
        } else if (/^([a-zA-Z0-9_\-\.])+\@([a-zA-Z0-9_\-\.])+\.([a-zA-Z]{2,4})$/.test(this.email)) {
          this.emailLoginTip = ''
        }
      },
      resetTip() {
        this.phoneLoginTip = ''
        this.emailLoginTip = ''
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .InputWrapper
    padding 85px 20px 0
    .tip
      color #b4282d
      font-size 12px
    .phoneNumberWrapper,.codeWrapper,.emailWrapper,.passwordWrapper
      height 45px
      width 100%
      box-sizing border-box
      border-bottom 1px solid #eeeeee
      display flex
      justify-content space-between
      align-items center
      margin-bottom 10px
      input 
        font-size 14px
        margin 14px 0 
        outline:none
      .phoneNumber
        width 300px
      .code
        width 190px
    .codeWrapper .getCode
      width 84px
      height 29px
      line-height 29px
      font-size 14px
      color #333
      text-align center
      border 1px solid #7f7f7f
      border-radius 4px
    .login
      padding 20px 0
      font-size 14px
      .tool
        display flex
        justify-content space-between
        align-items center
        color #333
      .loginBtn
        height 45px
        width 100%
        border 1px solid #b4282d
        color #ffffff
        background-color #b4282d
        box-sizing border-box
        border-radius 3px
        margin-top 16px
        font-size 14px
        text-align center
        line-height 45px
    .clear
      width 31px
      height 31px
      background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAp1JREFUSA29lr9v2kAUx8/mh0BCMGQAxRMC0REKqtQOVafskeiUvyVj/pYubaXsnaoMrVRBYUD8WMqAUwnhCQkGI+j7XnyXs302kJCeZHz33rv34fne3T2DHdB6vd7r7XZ7Sc97MrcMwzjHtN1ud08v2zTNO3puG43Gb8jjmhGn7Ha7HwlyQzav4uwU3ZjA181m84si83W1wH6/X95sNp8ogrc+6wMH9AV+JpPJq3q9/ic4JQSkqD5QVF/J8CxofOTYoWjbFO13dZ4P6MG+kUFKNXpG3yXohQqVQHxG13V/kfPnRhb8f04qlXojPq8ptFizF4DB/Znnm6M4ENn41AThXvb8wDcYMONAL/W109LpNCuVSoyyTqsXwmw2y4rFIqMMFSLfWzAMbGoKuevTKgPALMti6/WaTSYTRraK9qGby+VYtVpliUSCDYdDtlqtQjYQ0J9umkS+1Go94WKx4DBEUKvVQpGqMMdxImFwBxaAOK4iGyJCZIgwCA3CptNppB8owMIaWrFWpNRBC4WC/IyIbB/MY1imOIiPhVYqFb5mR8CQUOdyH+4DQo9IbdvGLcGzEePZbHbIVG5D83YmPbhiDmpYs3K5LGHYKrpEinH2FxHaMQZSFUyQwWCgTSQ5Qd/B3Wne6XWP0iAMCaJLpH2HA1gA3j66DvewFcSmDiaIDkr+wk48CVimVxaMo6zy+XxsNgahmUwmytUYLH5AEvmaNuVnneV8PmfL5TL2BAF0NBoxwKKONTDgX560nU7nB2Xsk0oK3R9VZSg5Wq3WO8jkB6cFv6KxoxqeqO94vrk7CcSNTGG3SeqeCAQ3KDHa4raHQAIxQO1BBhfUPUWkKKJ89QwYcg0xEO2/lokCijfKAsrely+EVSj6pyz1/wFrT2LaPTPA3AAAAABJRU5ErkJggg==') no-repeat 50% 50%
      background-size 50% 50%
      background-position center center


 
</style>
