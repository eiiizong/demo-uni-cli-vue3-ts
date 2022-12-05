<template>
  <view class="zdb-card-policy" @click="handleClick">
    <div class="name">{{ renderData.chi051 }}</div>
    <div class="info">
      <div class="unit">{{ renderData.chi037_desc }}</div>
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
  padding: 0 $spacing;
  height: 214rpx;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    left: 0;
    height: 80px;
    background-image: linear-gradient(180deg, #f6f7f8 0%, #ffffff 100%);
    z-index: 1;
  }
  .name {
    padding-top: 24rpx;
    position: relative;
    z-index: 2;
    font-size: 28rpx;
    line-height: 42rpx;
    height: 106rpx;
    font-weight: 500;
    color: $color-text;
    @include textOverflow(2);
  }
  .info {
    position: relative;
    padding-top: 18rpx;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    color: $color-text-placeholder;
    font-size: 24rpx;
    .unit {
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>
