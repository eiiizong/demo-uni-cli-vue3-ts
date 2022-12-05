<template>
  <view class="home-header-avatar">
    <img
      src="https://wx.qlogo.cn/mmhead/Q3auHgzwzM6Zm26cZtBll0wqkWdwen2wJBo9nDY0QOhI3iaedib0Rq5w/0"
      class="avatar"
      alt="avatar"
    />
    <template v-if="userInfo.user_id">
      <div class="user-name">{{ userInfo.userName }}</div>
      <div class="user-unit">成都哈哈</div>
    </template>
    <template v-else>
      <div class="no-login">未登录</div>
    </template>
  </view>
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'

import { useStoreUserInfo } from '@/stores/modules'

const storeUserInfo = useStoreUserInfo()

const { userInfo } = storeUserInfo
</script>

<style lang="scss" scoped>
.home-header-avatar {
  width: auto;
}
</style>
