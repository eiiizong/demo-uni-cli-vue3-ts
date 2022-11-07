<template>
  <view
    v-if="(info !== null && info !== '') || dot"
    class="yh-info"
    :class="getClass"
    :style="customStyle"
    >{{ dot ? '' : info }}</view
  >
</template>

<script setup>
import YhTransition from '../transition/transition.vue'

import { computed } from 'vue'
import { bem } from '../common/utils'

const emit = defineEmits(['click'])

const props = defineProps({
  // 自定义样式
  customStyle: {
    type: String,
    default: () => '',
  },
  // 是否显示图标右上角小红点
  dot: {
    type: Boolean,
    default: () => false,
  },
  // 图标右上角文字提示
  info: {
    type: [String],
    default: () => '',
  },
})

const getClass = computed(() => {
  let str = ''
  const { dot } = props
  str = bem('info', { dot })
  return str
})

// for prevent touchmove
const noop = () => {}
</script>

<style lang="scss" scoped>
.yh-info {
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  white-space: nowrap;
  text-align: center;
  -webkit-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
  min-width: 16px;
  min-width: var(--info-size, $info-size);
  padding: 0 3px;
  padding: var(--info-padding, $info-padding);
  color: #fff;
  color: var(--info-color, $info-color);
  font-weight: 500;
  font-weight: var(--info-font-weight, $info-font-weight);
  font-size: 12px;
  font-size: var(--info-font-size, $info-font-size);
  font-family: PingFang SC, Helvetica Neue, Arial, sans-serif;
  font-family: var(--info-font-family, $info-font-family);
  line-height: 14px;
  line-height: calc(
    var(--info-size, $info-size) - var(--info-border-width, $info-border-width) *
      2
  );
  background-color: #ee0a24;
  background-color: var(--info-background-color, $info-background-color);
  border: 1px solid #fff;
  border: var(--info-border-width, $info-border-width) solid
    var(--white, $white);
  border-radius: 16px;
  border-radius: var(--info-size, $info-size);
}
.yh-info--dot {
  min-width: 0;
  border-radius: 100%;
  width: 8px;
  width: var(--info-dot-size, $info-dot-size);
  height: 8px;
  height: var(--info-dot-size, $info-dot-size);
  background-color: #ee0a24;
  background-color: var(--info-dot-color, $info-dot-color);
}
</style>
