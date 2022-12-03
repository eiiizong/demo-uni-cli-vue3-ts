<template>
  <div class="login">
    <LoginLogo></LoginLogo>
    <LoginAgreement v-model:module-value="isAgree"></LoginAgreement>
    <ZdbButton name="登录" openType="getPhoneNumber" @getphonenumber="getPhoneNumber"></ZdbButton>
  </div>
</template>
<script setup lang="ts">
import ZdbButton from '@/components/project/zdb-button/zdb-button.vue'
import LoginLogo from './LoginLogo.vue'
import LoginAgreement from './LoginAgreement.vue'

import { ref } from 'vue'

const isAgree = ref(false)

// 获取手机号弹窗
const getPhoneNumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
  console.log(event, 987)

  const { errMsg } = event.detail
  if (errMsg === 'getPhoneNumber:ok') {
    console.log('用户已允许')
  } else {
    console.log('用户已拒绝')
  }
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  padding: 200rpx 60rpx;
}
</style>
