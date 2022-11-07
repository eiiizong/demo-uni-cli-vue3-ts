<template>
  <YhCardWrapper class="yh-card-publicity-wrapper" @click="handleJumpRoute">
    <div class="status">公示中</div>
    <div class="name-wrapper">
      <div class="city YouSheBiaoTiHei">
        {{ renderData.aab301Desc || '暂无' }}
      </div>
      <div class="name">
        {{ renderData.chi031Desc || '暂无' }}
      </div>
    </div>
    <div class="cells d-f ai-c fw-w">
      <div class="cell d-f ai-c">
        <div class="key">公示日期：</div>
        <div class="value">{{ renderData.chb578.substr(0, 10) }}</div>
      </div>
      <div class="cell right d-f ai-c">
        <div class="key">浏览次数：</div>
        <div class="value">{{ renderData.chb57f || 0 }}</div>
      </div>
      <div class="cell d-f ai-c">
        <div class="key">涉及企业：</div>
        <div class="value">{{ renderData.ab01Total || 0 }}</div>
      </div>
    </div>
  </YhCardWrapper>
</template>

<script setup>
import YhCardWrapper from '@/components/common/yh-card-wrapper/yh-card-wrapper.vue'

import { navigateTo } from '@/utils/uni-api'

const emit = defineEmits(['update'])
const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
})

const handleJumpRoute = () => {
  const { chb570, chb578, chb57f, chi031Desc } = props.renderData
  navigateTo('publicity-details', 'packageProject', {
    chb570,
    chb578: chb578.substr(0, 10),
    chb57f,
    chi031Desc,
  }).then(() => {
    emit('update', props.renderData)
  })
}
</script>
<style lang="scss" scoped>
.status {
  position: absolute;
  top: 0;
  right: 40rpx;
  font-size: 24rpx;
  line-height: 44rpx;
  text-align: center;
  color: #ff7100;
  width: 96rpx;
  height: 50rpx;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAAAyCAMAAACQ9f7LAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURUdwTP+qZP/Yuf+/iv+wb/93AP95AP9zAf90AP+1ev/Hm//Op/+JJv+kWP/Tsf+bSP/v5f/av//hy//p2uSyt6cAAAAQdFJOUwB19ruQDwYpG6vL2TZc50xjmUicAAAAqElEQVRYw+3SWQ6DIBSFYeZJgQL732uv6YO1g8EqSR/OWcD/JVyYLbehK5aBAAECBAgQIECAAAECBAgQf0qINpowXMlJ1AFOqyVJzw2jGWcz91dCVJ+k4rPT7Hna2ah8SOUc9KW+geafoVYF1eNOfZ0hiE4U+l9uqXsVrTOsc0dORPVwrP6m0YkW6NPLPer5RH3vRK2m4Hm2+or664l8EEPq25fr+TLr7nFsD3lSEJtLAAAAAElFTkSuQmCC)
    no-repeat center center;
  background-size: 100% 100%;
}
.name-wrapper {
  .city {
    position: relative;
    font-size: 30rpx;
    font-weight: 700;
    line-height: 1;
    color: $primary;
    z-index: 1;
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      left: 4rpx;
      bottom: 0;
      width: 80rpx;
      height: 12rpx;
      background-image: linear-gradient(
        to right,
        rgba($primary, 0.2),
        rgba($primary, 0.05)
      );
      border-radius: 4rpx;
    }
  }
  .name {
    padding-top: 12rpx;
    padding-bottom: 24rpx;
    font-size: 28rpx;
    font-weight: 700;
    line-height: 40rpx;
    // color: #082a6b;
    color: shade($primary, 70%);
    border-bottom: 1px solid tint($primary, 83%);
  }
}
.cells {
  font-size: 24rpx;
  font-weight: 700;
  color: #b1bdd5;
  line-height: 32rpx;
  padding-top: 20rpx;
  .cell {
    width: 50%;
    margin-bottom: 8rpx;
    &.right {
      justify-content: flex-end;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
