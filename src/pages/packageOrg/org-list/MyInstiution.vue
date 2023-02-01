<template>
  <view class="my-instiuition">
    <YhButton block custom-class="custom-button" type="primary" plain @click="onClick">我的合作机构</YhButton>
  </view>
</template>
<!-- 添加之后 组件可以样式穿透 目前未找到setup语法如何编写-->
<script lang="ts">
  export default {
    options: { styleIsolation: 'shared' }
  }
</script>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'

  import { toRefs } from 'vue'
  import { navigateTo } from '@/utils/uni-api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 监听点击事件
  const onClick = () => {
    navigateTo('org-details', 'packageOrg', { id: userInfo.value.userId })
  }
</script>

<style lang="scss" scoped>
  .my-instiuition {
    width: 100%;
    position: fixed;
    left: 0;
    width: 100%;
    bottom: 0;
    padding: 16rpx $spacing 54rpx;
    background-color: $color-page;
    ::v-deep {
      .custom-button {
        height: 100rpx;
        background-color: rgba($primary, 0.09);
        border-radius: 8rpx;
        border: solid 1px $primary;
        color: $primary;
        font-size: 36rpx;
        border-radius: 8rpx;
      }
    }
  }
</style>
