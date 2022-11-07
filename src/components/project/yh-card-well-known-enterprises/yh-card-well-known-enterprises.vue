<template>
  <YhCardWrapper
    padding="24rpx"
    @click="
      navigateTo('common', 'packageEnterprises', { aab220: renderData.aab220 })
    "
  >
    <div class="wrapper d-f ai-c">
      <image
        class="img"
        v-if="renderData.aab225"
        :src="'data:image/png;base64,' + renderData.aab225"
        mode="aspectFit"
      />
      <div class="info">
        <div class="name">{{ renderData.aab012 || '暂无' }}</div>
        <div class="desc">{{ renderData.aab229 || '暂无' }}</div>
      </div>
    </div>
  </YhCardWrapper>
</template>

<script setup>
import YhCardWrapper from '@/components/common/yh-card-wrapper/yh-card-wrapper.vue'

import { navigateTo } from '@/utils/uni-api'

const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.img {
  width: 118rpx;
  height: 118rpx;
  margin-right: 24rpx;
}
.info {
  flex: 1;
  overflow: hidden;
  font-size: 30rpx;
  font-weight: 700;
  line-height: 40rpx;
  color: shade($primary, 70%);
  .name {
    @include textOverflow(2);
  }
  .desc {
    font-size: 24rpx;
    line-height: 32rpx;
    padding-top: 8rpx;
    color: #9fadc8;
    @include textOverflow(1);
  }
}
</style>
