<template>
  <div class="demo">
    {{ userInfo.userName }}
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStoreUserInfo } from '@/store/modules'

const storeUserInfo = useStoreUserInfo()
const { userInfo } = storeUserInfo
</script>

<style lang="scss" scoped>
.demo {
  width: 100%;
}
</style>
