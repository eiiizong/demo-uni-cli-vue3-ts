<template>
  <div class="login">
    <LoginLogo></LoginLogo>
    <LoginAgreement v-model:module-value="isAgree"></LoginAgreement>
    <ZdbButton name="登录"></ZdbButton>
  </div>
</template>
<script setup lang="ts">
import ZdbButton from '@/components/project/zdb-button/zdb-button.vue'
import LoginLogo from './LoginLogo.vue'
import LoginAgreement from './LoginAgreement.vue'

import { ref, computed } from 'vue'

const isAgree = ref(false)
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  padding: 200rpx 60rpx;
}
</style>
