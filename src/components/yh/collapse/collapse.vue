<template>
  <view class="yh-collapse" :class="getClass">
    <slot />
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const emit = defineEmits(['change', 'close', 'open'])

const props = defineProps({
  // 当前展开面板的 name
  // 非手风琴模式：(string | number)[]
  // 手风琴模式：string | number
  modelValue: {
    type: [String, Number, Array],
    default: () => '',
  },
  // 是否开启手风琴模式
  accordion: {
    type: Boolean,
    default: () => false,
  },
  // 是否显示外边框
  border: {
    type: Boolean,
    default: () => false,
  },
  customClass: {
    type: String,
    default: () => '',
  },
})

const getClass = computed(() => {
  let str = ''
  const { customClass, border } = props

  if (border) {
    str += `yh-hairline--top-bottom`
  }

  if (customClass) {
    str += ` ${customClass}`
  }
  return str
})

const updateExpanded = () => {
  // this.children.forEach((child) => {
  //   child.updateExpanded()
  // })
}

const _switch = (name, expanded) => {
  // const { accordion, value } = this.data
  // if (!accordion) {
  //   name = expanded
  //     ? (value || []).concat(name)
  //     : (value || []).filter((activeName) => activeName !== name)
  // } else {
  //   name = expanded ? name : ''
  // }
  // this.$emit('change', name)
  // this.$emit('input', name)
}
</script>

<style lang="scss" scoped>
.yh-hairline--top-bottom {
  position: relative;
  &::after {
    position: absolute;
    box-sizing: border-box;
    -webkit-transform-origin: center;
    transform-origin: center;
    content: ' ';
    pointer-events: none;
    top: -50%;
    right: -50%;
    bottom: -50%;
    left: -50%;
    border: 0 solid #eee;
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    border-width: 1px 0;
  }
}
</style>
