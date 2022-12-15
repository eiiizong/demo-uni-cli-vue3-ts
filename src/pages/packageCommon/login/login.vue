<template>
  <div class="login">
    <LoginLogo></LoginLogo>
    <LoginAgreement v-model="isAgree"></LoginAgreement>
    <YhButton
      v-if="!tel"
      block
      type="primary"
      open-type="getPhoneNumber"
      @getphonenumber="getPhoneNumber"
    >
      获取手机号
    </YhButton>
    <YhButton v-else block type="primary" open-type="chooseavatar" @chooseavatar="handleLogin">
      立即登录
    </YhButton>
  </div>
</template>
<script setup lang="ts">
import ZdbButton from '@/components/project/zdb-button/zdb-button.vue'
import YhButton from '@/components/yh/button/button.vue'
import LoginLogo from './LoginLogo.vue'
import LoginAgreement from './LoginAgreement.vue'

import { ref } from 'vue'
import { getUserProfile } from '@/utils/uni-api'

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

// 登录
const handleLogin = (event: any) => {
  console.log('onChooseavatar ===', event)
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  padding: 200rpx 60rpx;
}
</style>
