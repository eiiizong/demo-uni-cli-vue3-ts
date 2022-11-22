<template>
  <div class="demo-loading">
    <demo-block title="加载类型" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" />
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" type="spinner" />
    </demo-block>

    <demo-block title="自定义颜色" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" color="#1989fa" />
      <yh-loading
        custom-style="margin: 8rpx 32rpx 8rpx 0;"
        type="spinner"
        color="#1989fa"
      />
    </demo-block>

    <demo-block title="加载文案" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" size="24px"
        >加载中...</yh-loading
      >
    </demo-block>

    <demo-block title="垂直排列" padding>
      <yh-loading custom-style="margin: 8rpx 32rpx 8rpx 0;" size="24px" vertical
        >加载中...</yh-loading
      >
    </demo-block>
  </div>
</template>
<script setup>
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhLoading from '@/components/yh/loading/loading.vue'
</script>

<style lang="scss" scoped>
.demo-loading {
  width: 100%;
}
</style>
