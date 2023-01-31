<template>
  <div class="demo-icon">
    <demo-block title="基础用法">
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;" />
      <YhIcon name="female" size="64rpx" custom-style="margin: 0 32rpx;" />
    </demo-block>

    <demo-block title="提示信息">
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;" dot />
      <YhIcon name="female" size="64rpx" custom-style="margin: 0 32rpx;" info="99+" />
    </demo-block>

    <demo-block title="图标颜色">
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;" color="#f0f" />
      <YhIcon name="female" size="64rpx" custom-style="margin: 0 32rpx;" color="#f0f" />
    </demo-block>

    <demo-block title="图标大小">
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;" />
      <YhIcon name="male" size="80rpx" custom-style="margin: 0 32rpx;" />
    </demo-block>

    <demo-block title="所有图标">
      <div class="items">
        <template v-for="(item, index) in renderList" :key="index">
          <div class="item">
            <YhIcon :name="item" size="64rpx" />
            <div class="name">{{ item }}</div>
          </div>
        </template>
      </div>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
  import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
  import YhIcon from '@/components/yh/icon/icon.vue'

  const renderList = [
    'plus',
    'minus',

    'female',
    'male',
    'picker',
    'tick',
    'loading',
    'radio',
    'radio-checked',
    'back',
    'arrow-right',
    'close',
    'close-round-fill',
    'search',
    'checkbox',
    'checkbox-checked'
  ]
</script>

<style lang="scss" scoped>
  .demo-icon {
    width: 100%;
    background-color: #f8f8f8;
    .items {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .item {
        text-align: center;
        margin-bottom: 32rpx;
        margin: 0 32rpx;
        .name {
          font-size: 24rpx;
          line-height: 48rpx;
          color: #666;
        }
      }
    }
  }
</style>
