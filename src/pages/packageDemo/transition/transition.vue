<template>
  <div class="demo-transition">
    <DemoBlock title="基础用法" padding>
      <div class="cells">
        <div class="cell" @click="handleClick('fade')">
          <div class="left">Fade</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
        <div class="cell" @click="handleClick('fade-up')">
          <div class="left">Fade-Up</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
        <div class="cell" @click="handleClick('fade-down')">
          <div class="left">Fade-Down</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
        <div class="cell" @click="handleClick('fade-left')">
          <div class="left">Fade-Left</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
        <div class="cell" @click="handleClick('fade-right')">
          <div class="left">Fade-Right</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
        <div class="cell" @click="handleClick('slide-up')">
          <div class="left">Slide-Up</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
        <div class="cell" @click="handleClick('slide-down')">
          <div class="left">Slide-Down</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
        <div class="cell" @click="handleClick('slide-left')">
          <div class="left">Slide-Left</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
        <div class="cell" @click="handleClick('slide-right')">
          <div class="left">Slide-Right</div>
          <YhIcon name="arrow-right"></YhIcon>
        </div>
      </div>
    </DemoBlock>

    <YhTransition :show="show" :name="name" :customStyle="customStyle">
    </YhTransition>
  </div>
</template>
<script setup>
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhTransition from '@/components/yh/transition/transition.vue'
import YhIcon from '@/components/yh/icon/icon.vue'

import { ref } from 'vue'

const show = ref(false)
const name = ref('')
const customStyle = `
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  background-color: #1989fa;
`

const handleClick = (a_name) => {
  name.value = a_name
  show.value = true
  setTimeout(() => {
    show.value = false
  }, 500)
}
</script>

<style lang="scss" scoped>
.demo-transition {
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
