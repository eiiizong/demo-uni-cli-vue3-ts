<template>
  <div class="demo-overlay">
    <DemoBlock title="基础用法">
      <div class="cells">
        <div class="cell" @click="showBasic = true">
          <div class="left">显示遮罩层</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
      </div>

      <YhOverlay :show="showBasic" @click="showBasic = false"> </YhOverlay>
    </DemoBlock>

    <DemoBlock title="嵌入内容">
      <div class="cells">
        <div class="cell" @click="showEmbedded = true">
          <div class="left">嵌入内容</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
      </div>

      <YhOverlay :show="showEmbedded" @click="showEmbedded = false">
        <view class="wrapper">
          <div class="block" @click.stop="noop" />
        </view>
      </YhOverlay>
    </DemoBlock>
  </div>
</template>
<script setup>
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhOverlay from '@/components/yh/overlay/overlay.vue'
import YhIcon from '@/components/yh/icon/icon.vue'

import { ref } from 'vue'

const showBasic = ref(false)
const showEmbedded = ref(false)

const noop = () => {}
</script>

<style lang="scss" scoped>
.demo-overlay {
  color: #323233;
  font-size: 16px;
  font-family: 'PingFang SC', Helvetica, Arial, sans-serif;
  background: #f7f8fa;
  -webkit-font-smoothing: antialiased;
}
.cells {
  background-color: #fff;
  font-size: 28rpx;
  padding: 0 30rpx;
  .cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 48rpx;
    padding: 20rpx 0;
    border-bottom: 1px solid #ebedf0;
    &:last-child {
      border-bottom: 0;
    }
    .yhiconfont {
      color: #969799;
      font-size: 24rpx;
    }
  }
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 120px;
  height: 120px;
  background-color: #fff;
}
</style>
