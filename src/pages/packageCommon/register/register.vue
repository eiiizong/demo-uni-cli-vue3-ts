<template>
  <div class="register">
    <YhNavBar title="企业注册" background-color="transparent" color="#fff" :border="false" />

    <div class="main-wrapper">
      <div class="main">
        <RegisterLogo />
        <RegisterTip />
        <RegisterForm v-model="formData" />
        <YhButton block type="primary" :disabled="!isInputCompleted" @click="onClickRegister"> 立即注册 </YhButton>
        <YhButton block plain custom-style="border:0;" type="primary" @click="onClickCancelRegister">
          取消注册
        </YhButton>
        <RegisterFooter />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'
  import YhNavBar from '@/components/yh/nav-bar/nav-bar.vue'

  import RegisterLogo from './RegisterLogo.vue'
  import RegisterTip from './RegisterTip.vue'
  import RegisterForm from './RegisterForm.vue'
  import RegisterFooter from './RegisterFooter.vue'

  import { reactive, toRefs, computed } from 'vue'
  import { navigateBack, showModal, showToast } from '@/utils/uni-api'
  import { requestGetRealPhone, requestLogin } from '@/server/api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 用户输入完成
  const isInputCompleted = computed(() => {
    return false
  })

  const formData = reactive({
    a: ''
  })

  // 注册
  const onClickRegister = () => {}

  // 取消注册
  const onClickCancelRegister = () => {
    navigateBack(1)
  }
</script>

<style lang="scss" scoped>
  .register {
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
