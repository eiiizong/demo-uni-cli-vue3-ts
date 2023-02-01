<template>
  <div class="login">
    <YhNavBar title="登录" background-color="transparent" color="#fff" :border="false" />

    <div class="main-wrapper">
      <div class="main">
        <LoginLogo />
        <YhButton
          block
          type="primary"
          open-type="getPhoneNumber"
          :disabled="!isAgree"
          @getphonenumber="onGetPhoneNumber">
          登 录
        </YhButton>
        <LoginAgreement v-model="isAgree" />
        <LoginFooter />
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

  import { ref, toRefs } from 'vue'
  import { navigateBack, showModal, showToast } from '@/utils/uni-api'
  import { requestGetRealPhone, requestLogin } from '@/server/api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 用户是否同意协议
  const isAgree = ref(false)

  // 获取用户手机号登录
  const onGetPhoneNumber = (event: WechatMiniprogram.ButtonGetPhoneNumber) => {
    const { sessionKey, openId } = userInfo.value
    const { errMsg, code, encryptedData, cloudID, iv } = event.detail
    if (errMsg === 'getPhoneNumber:ok') {
      // 获取用户真实手机号
      requestGetRealPhone(encryptedData || '', iv || '', sessionKey || '').then((res) => {
        // 登录
        requestLogin(openId || '', res).then((res) => {
          storeUserInfo.updateStoreUserInfo({
            userId: '1',
            userName: '游客1'
          })
          // 提示用户登录成功后返回上一页
          showToast('登录成功', 'success').then(() => {
            setTimeout(() => {
              navigateBack()
            }, 1500)
          })
        })
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
