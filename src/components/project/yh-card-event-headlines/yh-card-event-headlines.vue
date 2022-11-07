<template>
  <YhCardWrapper
    class="yh-card-event-headlines-wrapper"
    padding="20rpx 28rpx"
    @click="handleJumpRoute"
  >
    <image
      class="img"
      v-if="renderData.chi215"
      :src="imageUrl + renderData.chi215"
      mode="aspectFit"
    />
    <div class="info">
      <div class="name">{{ renderData.chm651 }}</div>
      <div class="desc">
        {{ renderData.chm652 }}
      </div>
    </div>
    <div class="cell d-f ai-c jc-sb">
      <div class="time">信息来源：{{ renderData.chm653 }}</div>
      <div class="time">{{ renderData.aae036.substr(0, 19) }}</div>
    </div>
  </YhCardWrapper>
</template>

<script setup>
import YhCardWrapper from '@/components/common/yh-card-wrapper/yh-card-wrapper.vue'

import config from '@/config'
import { navigateTo } from '@/utils/uni-api'

const imageUrl = config.requestUrl + '/upload/downFileByFileId?fileId='

const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
})

// 跳转路由
const handleJumpRoute = () => {
  const { chm650 } = props.renderData
  navigateTo('news', 'packageCommunity', { chm650 })
}
</script>
<style lang="scss" scoped>
.yh-card-event-headlines-wrapper {
  width: 100%;
  position: relative;
  .img {
    position: absolute;
    top: 28rpx;
    right: 28rpx;
    width: 130rpx;
    height: 94rpx;
  }
  .info {
    font-size: 24rpx;
    line-height: 34rpx;
    color: #999;
    padding-right: 172rpx - 28rpx;
    .name {
      font-size: 26rpx;
      font-weight: 700;
      line-height: 36rpx;
      color: #333;
    }
    .desc {
      padding-top: 8rpx;
      font-size: 24rpx;
      line-height: 34rpx;
      @include textOverflow(2);
    }
  }
  .cell {
    width: 100%;
    padding-top: 34rpx;
    .time {
      font-size: 22rpx;
      line-height: 30rpx;

      color: rgba(153, 153, 153, 0.69);
    }
  }
}
</style>
