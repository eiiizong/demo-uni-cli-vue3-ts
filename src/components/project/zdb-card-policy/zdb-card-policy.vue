<template>
  <view class="zdb-card-policy" @click="handleClick" :class="type === '02' ? 'type-02' : ''">
    <div class="name">{{ renderData.chi051 }}</div>
    <div class="desc">{{ renderData.chi037_desc }}</div>
    <div class="info">
      <div class="unit">{{ renderData.chi037_desc }}</div>
      <div class="line">|</div>
      <div class="time">{{ renderData.chi052 }}</div>
    </div>
  </view>
</template>

<script setup lang="ts">
// import { previewPDFWeixin, previewPDFAlipay, previewPDFH5 } from '@/utils/custom-api/index'
/**
 * 政策文件渲染item
 * @description 政策文件渲染item
 */

const props = defineProps({
  // 渲染数据
  renderData: {
    type: [Object],
    required: true,
  },
  type: {
    type: String,
    default: '01',
  },
})

const handleClick = () => {
  const { chi050, chi051, chi056 } = props.renderData
  console.log(chi050, chi051, chi056)
}
</script>

<style lang="scss" scoped>
.zdb-card-policy {
  width: 100%;
  position: relative;
  padding: $spacing;
  background-color: #ffffff;
  border-radius: 20rpx;
  overflow: hidden;
  .name {
    font-size: 28rpx;
    line-height: 38rpx;
    max-height: 76rpx;
    font-weight: 500;
    color: #404040;
    @include textOverflow(2);
  }
  .desc {
    font-size: 24rpx;
    line-height: 38rpx;
    max-height: 76rpx;
    color: #777;
    margin-top: 12rpx;
    @include textOverflow(2);
  }
  .info {
    position: relative;
    padding-top: 24rpx;
    display: flex;
    align-items: center;
    color: #b4bcc8;
    font-size: 24rpx;
    line-height: 1;
    .line {
      padding: 0 10rpx;
    }
  }
  &.type-02 {
    border-bottom: 1px solid $color-border;
    border-radius: 0;
    background-color: transparent;
    padding: $spacing 0;
  }
}
</style>
