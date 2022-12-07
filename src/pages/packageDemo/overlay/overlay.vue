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
<script setup lang="ts">
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
  background-color: #f8f8f8;
}
</style>
