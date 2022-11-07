<template>
  <view class="yh-panel-wrapper">
    <div class="yh-panel-title-wrapper">
      <div class="yh-panel-title-left" @click.stop="emit('clickTitle')">
        <span class="yh-panel-title-line"></span>
        <span
          class="yh-panel-title-text"
          :class="[titleIconName ? 'hasIcon' : '']"
          >{{ title }}</span
        >
        <div
          class="iconimg"
          v-if="titleIconName"
          :class="[titleIconName ? 'iconimg-' + titleIconName : '']"
        ></div>
      </div>
      <div
        class="yh-panel-title-right"
        v-if="rightText"
        @click.stop="emit('clickRightText')"
      >
        <span>{{ rightText }}</span>
      </div>
    </div>
    <div class="yh-panel-content" :style="panelContentStyle">
      <slot />
    </div>
  </view>
</template>

<script setup>
/**
 * panel
 */
import { computed } from 'vue'

const emit = defineEmits(['clickRightText', 'clickTitle'])
const props = defineProps({
  // 标题
  title: {
    type: [String],
    default: '',
  },
  // 标题右边文字内容
  rightText: {
    type: [String],
    default: '',
  },
  // 顶部距离
  spaceTop: {
    type: [String, Number],
    default: '',
  },
  // 底部距离
  spaceBottom: {
    type: [String, Number],
    default: '',
  },
  // title icon
  titleIconName: {
    type: [String],
    default: '',
  },
})

const panelContentStyle = computed(() => {
  let str = ''
  const { spaceTop, spaceBottom } = props
  if (spaceTop) {
    str += `padding-top: ${parseInt(spaceTop)}rpx; `
  }
  if (spaceBottom) {
    str += `padding-bottom: ${parseInt(spaceBottom)}rpx; `
  }
  return str
})
</script>
<style lang="scss" scoped>
.yh-panel-wrapper {
  width: 690rpx;
  background-color: #ffffff;
  border-radius: 8rpx;
  overflow: hidden;
  margin: 0 auto;
  padding: 0 30rpx;
}
.yh-panel-title-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32rpx;
  font-weight: 700;
  line-height: 1;
  padding-top: 36rpx;
}
.yh-panel-title-left {
  flex: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.yh-panel-title-line {
  width: 8rpx;
  height: 32rpx;
  background-color: $primary;
  border-radius: 2rpx;
  margin-right: 10rpx;
}
.yh-panel-title-text {
  line-height: 1;
  flex: 1;
  overflow: hidden;
  &.hasIcon {
    flex: 0 1 auto;
  }
}
.yh-panel-title-right {
  font-size: 24rpx;
  font-weight: 500;
  color: $primary;
}
.yh-panel-content {
  padding-top: 30rpx;
  padding-bottom: 30rpx;
}
.iconimg-hot {
  width: 30rpx;
  height: 36rpx;
  margin-left: 12rpx;
  background-image: url(data:image/png;base64,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);
}
</style>
