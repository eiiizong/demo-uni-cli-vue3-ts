<template>
  <div class="login">
    <YhNavBar title="登录" background-color="transparent" color="#fff" :border="false"></YhNavBar>

    <div class="main-wrapper">
      <div class="main">
        <LoginLogo></LoginLogo>
        <YhButton
          block
          type="primary"
          :disabled="!isAgree"
          :open-type="tel ? 'chooseAvatar' : 'getPhoneNumber'"
          @getphonenumber="getPhoneNumber"
          @chooseavatar="handleLogin"
        >
          {{ tel ? '立即登录' : '获取手机号' }}
        </YhButton>
        <LoginAgreement v-model="isAgree"></LoginAgreement>
        <LoginFooter></LoginFooter>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import YhButton from '@/components/yh/button/button.vue'
import YhNavBar from '@/components/yh/nav-bar/nav-bar.vue'
import LoginLogo from './LoginLogo.vue'
import LoginAgreement from './LoginAgreement.vue'
import LoginFooter from './LoginFooter.vue'

import { ref, computed } from 'vue'

// 用户是否同意协议
const isAgree = ref(false)
// 用户手机号
const tel = ref('')

// 获取手机号弹窗
const getPhoneNumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
  console.log(event, 987)

  const { errMsg } = event.detail
  if (errMsg === 'getPhoneNumber:ok') {
    console.log('用户已允许')
    tel.value = '13222222222'
  } else {
    console.log('用户已拒绝')
  }
}

// 登录 获取用户头像
const handleLogin = (event: any) => {
  const { avatarUrl } = event.detail
  console.log('onChooseavatar ===', avatarUrl)
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  background-image: linear-gradient(to bottom, #1a2970, #1ba2ca);
  .main-wrapper {
    padding: 14rpx $spacing $spacing * 2;
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .main {
    width: 100%;
    flex: 1;
    overflow: hidden;
    background-color: #fff;
    padding: 0 74rpx 110rpx;
    position: relative;
    border-radius: 4rpx;
  }
}
</style>
