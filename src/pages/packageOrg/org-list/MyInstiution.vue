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

  // 监听点击事件
  const onClick = () => {}
</script>

<style lang="scss" scoped>
  .my-instiuition {
    width: 100%;
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 54rpx;
    padding: 0 $spacing;
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
