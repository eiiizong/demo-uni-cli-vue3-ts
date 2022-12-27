<template>
  <div class="login" :style="loginStyle">
    <YhNavBar
      title="登录"
      background-color="transparent"
      color="#fff"
      :border="false"
      @change="handleChangeNavBar"
    ></YhNavBar>
    <div class="main">
      <LoginLogo></LoginLogo>
      <YhButton
        v-if="!tel"
        block
        type="primary"
        height="90rpx"
        open-type="getPhoneNumber"
        @getphonenumber="getPhoneNumber"
      >
        获取手机号
      </YhButton>
      <YhButton v-else block type="primary" open-type="chooseavatar" @chooseavatar="handleLogin">
        立即登录
      </YhButton>
      <LoginAgreement v-model="isAgree"></LoginAgreement>
      <LoginFooter></LoginFooter>
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
const navBarHeight = ref(0)

const handleChangeNavBar = (e: number) => {
  navBarHeight.value = e
}

// 控制样式
const loginStyle = computed(() => {
  let str = ''
  if (navBarHeight.value) {
    str += `padding-top: ${navBarHeight.value}px;`
  }
  return str
})

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

// 登录
const handleLogin = (event: any) => {
  console.log('onChooseavatar ===', event)
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  padding: 0 $spacing $spacing * 2;
  background-image: linear-gradient(to bottom, #1a2970, #1ba2ca);
  .main {
    margin-top: 14rpx;
    background-color: #fff;
    flex: 1;
    overflow: hidden;
    padding: 0 74rpx 110rpx;
    position: relative;
  }
}
</style>
