<template>
  <div class="login">
    <YhNavBar title="登录" background-color="transparent" color="#fff" :border="false"></YhNavBar>

    <div class="main-wrapper">
      <div class="main">
        <LoginLogo></LoginLogo>
        <YhButton
          block
          type="primary"
          open-type="getPhoneNumber"
          :disabled="!isAgree"
          @getphonenumber="onGetPhoneNumber"
        >
          登 录
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
import { showModal } from '@/utils/uni-api'
import { requestGetRealPhone } from '@/server/api'

// 用户是否同意协议
const isAgree = ref(false)
// 用户手机号
const tel = ref('')

// 获取用户手机号登录
const onGetPhoneNumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
  console.log('onGetPhoneNumber', event)
  const { errMsg, code, encryptedData, cloudID, iv } = event.detail
  if (errMsg === 'getPhoneNumber:ok') {
    tel.value = '13222222222'
    requestGetRealPhone(encryptedData, iv, '').then((res) => {
      console.log('res', res)
    })
  } else {
    showModal('请点击允许同意')
  }
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
