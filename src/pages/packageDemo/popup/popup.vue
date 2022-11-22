<template>
  <div class="demo-popup">
    <DemoBlock title="基础用法">
      <div class="cells">
        <div class="cell" @click="showBasic = true">
          <div class="left">展示弹出层</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
      </div>

      <YhPopup
        :show="showBasic"
        custom-style="padding: 30px 50px"
        @close="showBasic = false"
      >
        内容
      </YhPopup>
    </DemoBlock>

    <DemoBlock title="弹出位置">
      <div class="cells">
        <div class="cell" @click="showTop = true">
          <div class="left">顶部弹出</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
        <div class="cell" @click="showBottom = true">
          <div class="left">底部弹出</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
        <div class="cell" @click="showLeft = true">
          <div class="left">左侧弹出</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
        <div class="cell" @click="showRight = true">
          <div class="left">右侧弹出</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
      </div>

      <YhPopup
        :show="showTop"
        position="top"
        custom-style="height: 20%"
        @close="showTop = false"
      />
      <YhPopup
        :show="showBottom"
        position="bottom"
        custom-style="height: 20%"
        @close="showBottom = false"
      />
      <YhPopup
        :show="showLeft"
        position="left"
        custom-style="width: 20%; height: 100%"
        @close="showLeft = false"
      />
      <YhPopup
        :show="showRight"
        position="right"
        custom-style="width: 20%; height: 100%"
        @close="showRight = false"
      />
    </DemoBlock>

    <DemoBlock title="关闭图标">
      <div class="cells">
        <div class="cell" @click="showCloseIcon = true">
          <div class="left">关闭图标</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
        <div class="cell" @click="showCustomCloseIcon = true">
          <div class="left">自定义图标</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
        <div class="cell" @click="showCustomIconPosition = true">
          <div class="left">图标位置</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
      </div>

      <YhPopup
        :show="showCloseIcon"
        closeable
        position="bottom"
        custom-style="height: 20%"
        @close="showCloseIcon = false"
      />

      <YhPopup
        :show="showCustomCloseIcon"
        closeable
        close-icon="close"
        position="bottom"
        custom-style="height: 20%"
        @close="showCustomCloseIcon = false"
      />

      <YhPopup
        :show="showCustomIconPosition"
        closeable
        close-icon-position="top-left"
        position="bottom"
        custom-style="height: 20%"
        @close="showCustomIconPosition = false"
      />
    </DemoBlock>

    <DemoBlock title="圆角弹窗">
      <div class="cells">
        <div class="cell" @click="showRound = true">
          <div class="left">圆角弹窗</div>
          <YhIcon name="arrow-right" color="#969799"></YhIcon>
        </div>
      </div>

      <YhPopup
        :show="showRound"
        round
        position="bottom"
        custom-style="height: 20%"
        @close="showRound = false"
      />
    </DemoBlock>
  </div>
</template>
<script setup>
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhPopup from '@/components/yh/popup/popup.vue'
import YhIcon from '@/components/yh/icon/icon.vue'

import { ref } from 'vue'

const showBasic = ref(false)
const showTop = ref(false)
const showBottom = ref(false)
const showLeft = ref(false)
const showRight = ref(false)

const showCloseIcon = ref(false)
const showCustomCloseIcon = ref(false)
const showCustomIconPosition = ref(false)

const showRound = ref(false)
</script>

<style lang="scss" scoped>
.demo-popup {
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
</style>
