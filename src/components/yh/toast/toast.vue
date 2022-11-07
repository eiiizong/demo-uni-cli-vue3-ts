<template>
  <yh-overlay
    v-if="mask || forbidClick"
    :show="show"
    :z-index="zIndex"
    :custom-style="getOverlayStyle"
  />
  <YhTransition :show="show" :custom-style="getTransitionStyle">
    <view class="yh-toast" :class="getToastClass" @touchmove="noop">
      <!-- text only -->
      <text v-if="type === 'text'">{{ message }}</text>

      <!-- html only -->
      <rich-text v-else-if="type === 'html'" :nodes="message"></rich-text>

      <!-- with icon -->
      <block v-else>
        <yh-loading
          v-if="type === 'loading'"
          color="white"
          :type="loadingType"
          custom-class="yh-toast__loading"
        />
        <yh-icon v-else class="yh-toast__icon" :name="type" />
        <text v-if="message" class="yh-toast__text">{{ message }}</text>
      </block>
      <slot />
    </view>
  </YhTransition>
</template>

<script setup>
import YhLoading from '../loading/loading.vue'
import YhIcon from '../icon/icon.vue'
import YhOverlay from '../overlay/overlay.vue'
import YhTransition from '../transition/transition.vue'

import { computed, ref, watch } from 'vue'

const emit = defineEmits(['close'])

const props = defineProps({
  // 是否展示组件
  show: {
    type: Boolean,
    default: () => false,
  },
  // 提示类型，可选值为 loading success fail html
  type: {
    type: String,
    default: () => 'text',
  },
  // 位置，可选值为 top middle bottom
  position: {
    type: String,
    default: () => 'middle',
  },
  // 内容
  message: {
    type: String,
    default: () => '',
  },
  // 是否显示遮罩层
  mask: {
    type: Boolean,
    default: () => false,
  },
  // 是否禁止背景点击
  forbidClick: {
    type: Boolean,
    default: () => true,
  },
  // 加载图标类型, 可选值为 spinner
  loadingType: {
    type: String,
    default: () => 'circular',
  },
  // z-index 层级
  zIndex: {
    type: Number,
    default: () => 1000,
  },
  // 展示时长(ms)，值为 0 时，toast 不会消失
  duration: {
    type: Number,
    default: () => 2000,
  },
  // 自定义选择器
  selector: {
    type: String,
    default: () => 'yh-toast',
  },
  // 选择器的选择范围，可以传入自定义组件的 this 作为上下文
  context: {
    type: Object,
    default: () => null,
  },
})

const timer = ref(null)

const closeToast = () => {
  const { duration } = props
  if (duration != null && duration > 0) {
    timer.value = setTimeout(() => {
      emit('close')
      clearTimeout(timer.value)
    }, duration)
  }
}

const getOverlayStyle = computed(() => {
  let str = ''
  const { mask } = props
  if (!mask) {
    str = `background-color: transparent;`
  }
  return str
})

const getTransitionStyle = computed(() => {
  let str = `position: fixed; top: 50%; left: 50%;  width: fit-content; transform: translate(-50%, -50%); max-width: var(--toast-max-width, 70%); `
  const { zIndex } = props
  if (zIndex) {
    str += `z-index: ${zIndex};`
  }
  return str
})

const getToastClass = computed(() => {
  let str = ''
  const { type, position } = props
  if (type === 'text' || type === 'html') {
    str += `yh-toast--text `
  } else {
    str += `yh-toast--icon `
  }

  if (position) {
    str += `yh-toast--${position} `
  }
  return str
})

// for prevent touchmove
const noop = () => {}

watch(
  () => props.show,
  (val) => {
    if (val) {
      closeToast()
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.yh-toast {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  color: var(--toast-text-color, $toast-text-color);
  font-size: var(--toast-font-size, $toast-font-size);
  line-height: var(--toast-line-height, $toast-line-height);

  // allow newline charactor
  white-space: pre-wrap;
  word-wrap: break-word;
  background-color: var(--toast-background-color, $toast-background-color);
  border-radius: var(--toast-border-radius, $toast-border-radius);

  &--text {
    min-width: var(--toast-text-min-width, $toast-text-min-width);
    padding: var(--toast-text-padding, $toast-text-padding);
  }

  &--icon {
    width: var(--toast-default-width, $toast-default-width);
    min-height: var(--toast-default-min-height, $toast-default-min-height);
    padding: var(--toast-default-padding, $toast-default-padding);

    .yh-toast__icon {
      font-size: var(--toast-icon-size, $toast-icon-size);
    }

    .yh-toast__text {
      padding-top: $padding-xs;
    }
  }

  &__loading {
    margin: 10px 0;
  }

  &--top {
    transform: translate(0, -30vh);
  }

  &--bottom {
    transform: translate(0, 30vh);
  }
}
</style>
