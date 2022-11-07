<template>
  <YhCardWrapper @click="handlePreviewPdf(renderData.chi215)">
    <div class="iconfont iconfont-file"></div>
    <div class="name">
      {{ renderData.chi051 }}
    </div>
    <div class="info d-f ai-c jc-sb">
      <div class="unit">
        {{ renderData.chi037Desc || renderData.chi037_desc }}
      </div>
      <div class="time">{{ renderData.aae036.substr(0, 10) }}</div>
    </div>
  </YhCardWrapper>
</template>

<script setup>
import YhCardWrapper from '@/components/common/yh-card-wrapper/yh-card-wrapper.vue'
import { previewPDFWeixin } from '@/utils/custom-api'

const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
})

// 预览政策文件
const handlePreviewPdf = (chi215) => {
  previewPDFWeixin(chi215)
}
</script>
<style lang="scss" scoped>
.name {
  font-size: 26rpx;
  font-weight: 400;
  line-height: 40rpx;
  color: shade($primary, 70%);
  padding-left: 76rpx - $spacing;
}
.iconfont {
  position: absolute;
  top: 30rpx;
  left: 30rpx;
  line-height: 40rpx;
  font-size: 26rpx;
  color: $primary;
}
.info {
  font-size: 24rpx;
  color: #b1bdd5;
  line-height: 32rpx;
  padding-top: 12rpx;
  padding-left: 76rpx - $spacing;
}
</style>
