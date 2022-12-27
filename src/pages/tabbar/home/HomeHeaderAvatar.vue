<template>
  <view class="home-header-avatar">
    <img
      src="https://wx.qlogo.cn/mmhead/Q3auHgzwzM6Zm26cZtBll0wqkWdwen2wJBo9nDY0QOhI3iaedib0Rq5w/0"
      class="avatar"
      alt="avatar"
    />
    <div class="info">
      <template v-if="userInfo.user_id">
        <div class="user-name">{{ userInfo.userName }}</div>
        <div class="user-unit">单位：{{ userInfo.company || '暂无' }}</div>
      </template>
      <template v-else>
        <div class="no-login">未登录</div>
      </template>
    </div>
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
  padding-left: 42rpx;
  display: flex;
  align-items: center;
  .avatar {
    width: 84rpx;
    height: 84rpx;
    border-radius: 50%;
    margin-right: 28rpx;
  }
  .info {
    .no-login,
    .user-name {
      font-size: 32rpx;
      font-weight: 700;
      line-height: 1;
    }
    .user-unit {
      font-size: 24rpx;
      line-height: 1;
      color: rgba(#fff, 0.8);
      padding-top: 20rpx;
    }
  }
}
</style>
