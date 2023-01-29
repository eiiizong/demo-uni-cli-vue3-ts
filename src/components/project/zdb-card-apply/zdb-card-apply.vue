<template>
  <view class="zdb-card-apply" :class="space ? 'space' : ''">
    <div class="title">
      <div class="icon"></div>
      <div class="name">担保费补贴申请</div>
      <div class="status">进行中</div>
    </div>
    <div class="cells">
      <div class="cell">
        <div class="key">申报机构：</div>
        <div class="value">担保融资公司</div>
      </div>
      <div class="cell">
        <div class="key">申报时间：</div>
        <div class="value">担保融资公司</div>
      </div>
    </div>
    <div class="footer">
      <div class="left">如需查看数据详情，请登录“蓉易贷”网站端查看</div>
      <div class="right">
        <span>流程一览</span>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

interface Item {
  key: string
  value: string | number
  unit: string
}

const emit = defineEmits(['click'])
const props = defineProps({
  // renderData: {
  //   type: Array as PropType<Item[]>,
  //   required: true,
  // },
  renderData: {
    type: Object,
    required: true,
  },
  space: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.zdb-table {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid $color-border;
  &.space {
    margin-top: 40rpx;
  }
  .col {
    width: 50%;
    font-size: 30rpx;
    line-height: 42rpx;
    .key {
      height: 72rpx;
      color: #999999;
      background-color: #f2f2f2;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid $color-border;
    }
    .value {
      height: 72rpx;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid $color-border;
    }
    &:nth-of-type(2n + 1) {
      border-right: 1px solid $color-border;
    }
    &:nth-last-of-type(1),
    &:nth-last-of-type(2) {
      .value {
        border-bottom: 0;
      }
    }
  }
}
</style>
