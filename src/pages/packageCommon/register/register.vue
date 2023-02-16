<template>
  <div class="register">
    <YhNavBar title="企业注册" :background-color="navBarBackgroundColor" color="#fff" :border="false" />

    <div class="main-wrapper">
      <div class="main">
        <RegisterLogo />
        <RegisterTip />
        <RegisterForm v-model:company-name="formData.companyName" v-model:user-name="formData.userName" />
        <YhButton block type="primary" :disabled="isInputCompleted" @click="onClickRegister"> 立即注册 </YhButton>
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

  import { ref, reactive, toRefs, computed } from 'vue'
  import { onPageScroll, onUnload } from '@dcloudio/uni-app'
  import { navigateBack, showModal } from '@/utils/uni-api'
  import { requestRegisterCompany } from '@/server/api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 表单数据
  const formData = reactive({
    companyName: '',
    userName: ''
  })

  const navBarBackgroundColor = ref('transparent')
  const scrollTimer = ref<any>(null)

  // 用户是否输入完成
  const isInputCompleted = computed(() => {
    let result = false
    const { companyName, userName } = formData

    if (!companyName) {
      result = true
    }
    if (!userName) {
      result = true
    }
    return result
  })

  // 校验表单数据是否填写正确
  const checkFormData = () => {
    const { companyName, userName } = formData

    if (companyName.length < 2) {
      showModal('请输入正确的企业名称或个体工商户名称')
      return false
    }

    if (userName.length < 2) {
      showModal('请输入正确的用户名')
      return false
    }

    return true
  }

  // 注册
  const onClickRegister = () => {
    const checkResult = checkFormData()
    if (!checkResult) {
      return
    }

    const { openId, tel } = userInfo.value
    const { companyName, userName } = formData

    requestRegisterCompany(openId || '', tel || '', companyName, userName).then((res) => {
      console.log('res', res)
    })
  }

  // 取消注册
  const onClickCancelRegister = () => {
    navigateBack(1)
  }

  // 监听页面滚动
  onPageScroll((e) => {
    const { scrollTop } = e
    scrollTimer.value && clearTimeout(scrollTimer.value)
    scrollTimer.value = setTimeout(() => {
      if (scrollTop > 10) {
        navBarBackgroundColor.value = '#1a2970'
      } else {
        navBarBackgroundColor.value = 'transparent'
      }
    }, 300)
  })

  // 监听页面卸载
  onUnload(() => {
    scrollTimer.value && clearTimeout(scrollTimer.value)
  })
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
