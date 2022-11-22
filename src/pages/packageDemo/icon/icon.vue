<template>
  <div class="demo-icon">
    <demo-block title="基础用法" padding>
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;"></YhIcon>
      <YhIcon
        name="female"
        size="64rpx"
        custom-style="margin: 0 32rpx;"
      ></YhIcon>
    </demo-block>
    <demo-block title="提示信息" padding>
      <YhIcon
        name="male"
        size="64rpx"
        custom-style="margin: 0 32rpx;"
        dot
      ></YhIcon>
      <YhIcon
        name="female"
        size="64rpx"
        custom-style="margin: 0 32rpx;"
        info="99+"
      ></YhIcon>
    </demo-block>
    <demo-block title="图标颜色" padding>
      <YhIcon
        name="male"
        size="64rpx"
        custom-style="margin: 0 32rpx;"
        color="#f0f"
      ></YhIcon>
      <YhIcon
        name="female"
        size="64rpx"
        custom-style="margin: 0 32rpx;"
        color="#f0f"
      ></YhIcon>
    </demo-block>
    <demo-block title="图标大小" padding>
      <YhIcon name="male" size="64rpx" custom-style="margin: 0 32rpx;"></YhIcon>
      <YhIcon name="male" size="80rpx" custom-style="margin: 0 32rpx;"></YhIcon>
    </demo-block>
    <demo-block title="所有图标" padding>
      <div class="items">
        <template v-for="item in renderList">
          <div class="item">
            <YhIcon :name="item" size="64rpx"></YhIcon>
            <div class="name">{{ item }}</div>
          </div>
        </template>
      </div>
    </demo-block>
  </div>
</template>
<script setup>
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhIcon from '@/components/yh/icon/icon.vue'

const renderList = [
  'arrow-right',
  'picker',
  'search',
  'edit',
  'male',
  'female',
  'wifi',
  'scan',
  'hook',
  'fail',
  'success',
  'loading',
  'details',

  'add',
  'move',

  'delete_light',
  'delete_fill',

  'close',
  'close_light',
  'close_round',
  'close_round_fill',

  'back',
  'back_light',

  'radio',
  'radio-checked',
  'radio-checked_fill',
  'radio-checked_hook',

  'voice',
  'voice_fill',

  'checkbox',
  'checkbox_checked',
  'checkbox_checked_fill',
]
</script>

<style lang="scss" scoped>
.demo-icon {
  width: 100%;
  color: #323232;
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      width: 25%;
      text-align: center;
      margin-bottom: 32rpx;
      .name {
        font-size: 24rpx;
        line-height: 48rpx;
        color: #666;
      }
    }
  }
}
</style>
