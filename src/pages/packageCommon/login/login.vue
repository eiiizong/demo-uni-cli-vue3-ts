<template>
  <div class="login">
    <LoginLogo></LoginLogo>
    <LoginAgreement v-model:module-value="isAgree"></LoginAgreement>
    <ZdbButton v-if="!tel" name="获取手机号" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber"></ZdbButton>
    <ZdbButton v-else name="立即登录" @click="handleLogin"></ZdbButton>
  </div>
</template>
<script setup lang="ts">
import ZdbButton from '@/components/project/zdb-button/zdb-button.vue'
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
const handleLogin = () => {
  getUserProfile().then((res) => {
    console.log(res, 987)
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  padding: 200rpx 60rpx;
}
</style>
