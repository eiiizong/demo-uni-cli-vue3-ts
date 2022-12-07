<template>
  <YhOverlay
    v-if="overlay"
    :show="show"
    :z-index="zIndex"
    :custom-style="overlayStyle"
    :duration="duration"
    :lockScroll="lockScroll"
    @click="onClickOverlay"
  ></YhOverlay>
  <view v-if="inited" :class="getClass" :style="getStyle">
    <slot />
    <yh-icon
      v-if="closeable"
      :name="closeIcon"
      :custom-style="iconStyle"
      :class="'yh-popup__close-icon yh-popup__close-icon--' + closeIconPosition"
      @click="emit('close')"
    />
  </view>
</template>

<script setup lang="ts">
import YhOverlay from '../overlay/overlay.vue'
import YhIcon from '../icon/icon.vue'

import { computed, ref, watch } from 'vue'
import { bem } from '../common/utils'

const emit = defineEmits([
  // 关闭弹出层时触发
  'close',
  // 点击遮罩层时触发
  'click-overlay',
  // 进入前触发
  'before-enter',
  // 进入中触发
  'enter',
  // 进入后触发
  'after-enter',
  // 离开前触发
  'before-leave',
  // 离开中触发
  'leave',
  // 离开后触发
  'after-leave',
])
const props = defineProps({
  // 是否显示弹出层
  show: {
    type: Boolean,
    default: () => false,
  },
  // z-index 层级
  zIndex: {
    type: Number,
    default: () => 999,
  },
  // 是否显示遮罩层
  overlay: {
    type: Boolean,
    default: () => true,
  },
  // 动画名称
  transition: {
    type: String,
    default: () => '',
  },
  // 弹出位置，可选值为 top bottom right left
  position: {
    type: String,
    default: () => 'center',
  },
  // 动画时长，单位为毫秒
  duration: {
    type: [Object],
    default: () => {
      return {
        enter: 300,
        leave: 300,
      }
    },
  },
  // 是否显示圆角
  round: {
    type: Boolean,
    default: () => false,
  },
  // 自定义弹出层样式
  customStyle: {
    type: String,
    default: () => '',
  },
  // icon自定义样式
  iconStyle: {
    type: String,
    default: () => '',
  },
  // 自定义遮罩层样式
  overlayStyle: {
    type: String,
    default: () => '',
  },
  // 是否在点击遮罩层后关闭
  closeOnClickOverlay: {
    type: Boolean,
    default: () => true,
  },
  // 是否显示关闭图标
  closeable: {
    type: Boolean,
    default: () => false,
  },
  // 关闭图标名称或图片链接
  closeIcon: {
    type: String,
    default: () => 'close_round',
  },
  // 关闭图标展示位置
  closeIconPosition: {
    type: String,
    default: () => 'top-right',
  },
  // 是否为 iPhoneX 留出底部安全距离
  safeAreaInsetBottom: {
    type: Boolean,
    default: () => true,
  },
  // 是否留出顶部安全距离（状态栏高度）
  safeAreaInsetTop: {
    type: Boolean,
    default: () => false,
  },
  // 是否锁定背景滚动
  lockScroll: {
    type: Boolean,
    default: () => true,
  },
  customClass: {
    type: String,
    default: () => '',
  },
  enterClass: {
    type: String,
    default: () => '',
  },
  enterActiveClass: {
    type: String,
    default: () => '',
  },
  enterToClass: {
    type: String,
    default: () => '',
  },
  leaveClass: {
    type: String,
    default: () => '',
  },
  leaveActiveClass: {
    type: String,
    default: () => '',
  },
  leaveToClass: {
    type: String,
    default: () => '',
  },
})

const onClickOverlay = () => {
  emit('click-overlay')
  const { closeOnClickOverlay } = props
  if (closeOnClickOverlay) {
    emit('close')
  }
}

const status = ref('')
const inited = ref(false)
const display = ref(false)
const transitionEnded = ref(true)
const currentDuration = ref(300)
const classes = ref(
  `enter-class enter-active-class enter-to-class leave-class leave-active-class leave-to-class `
)

const getClass = computed(() => {
  let str = ''
  const { round, safeAreaInsetBottom, safeAreaInsetTop, position } = props

  if (classes.value) {
    str += classes.value
  }
  if (position) {
    str += bem('popup', [position, { round, safe: safeAreaInsetBottom, safeTop: safeAreaInsetTop }])
  }
  return str
})

const getStyle = computed(() => {
  let str = ''
  const { customStyle, zIndex } = props
  if (currentDuration.value) {
    str += `-webkit-transition-duration:${currentDuration.value}ms; `
    str += `transition-duration:${currentDuration.value}ms; `
  }
  if (!display.value) {
    str += `display: none; `
  }
  if (zIndex) {
    str += `z-index: ${zIndex}; `
  }
  if (customStyle) {
    str += customStyle
  }

  return str
})

const name = computed(() => {
  let str = ''
  const { transition, position } = props
  str = transition || position

  if (transition === 'none') {
    currentDuration.value = 0
  }
  return str
})

const nextTick = () => new Promise((resolve) => setTimeout(resolve, 1000 / 30))

const getClassNames = (name: string) => {
  const { enterClass, enterActiveClass, enterToClass, leaveActiveClass, leaveClass, leaveToClass } =
    props
  return {
    enter: `yh-${name}-enter yh-${name}-enter-active ${enterClass} ${enterActiveClass} `,
    'enter-to': `yh-${name}-enter-to yh-${name}-enter-active ${enterToClass} ${enterActiveClass} `,
    leave: `yh-${name}-leave yh-${name}-leave-active ${leaveClass} ${leaveActiveClass} `,
    'leave-to': `yh-${name}-leave-to yh-${name}-leave-active ${leaveToClass} ${leaveActiveClass}  `,
  }
}

const checkStatus = (new_status: string) => {
  if (new_status !== status.value) {
    throw new Error(`incongruent status: ${new_status}`)
  }
}

const onTransitionEnd = () => {
  if (transitionEnded.value) {
    return
  }
  transitionEnded.value = true

  if (status.value === 'enter' || status.value === 'leave') {
    emit(`after-${status.value}`)
  }

  const { show } = props
  if (!show && display.value) {
    display.value = false
    inited.value = false
  }
}

const enter = () => {
  const { duration } = props
  const classNames = getClassNames(name.value)
  const current_duration = duration.enter
  status.value = 'enter'
  emit('before-enter')
  Promise.resolve()
    .then(nextTick)
    .then(() => {
      checkStatus('enter')
      emit('enter')
      inited.value = true
      display.value = true
      classes.value = classNames.enter
      currentDuration.value = current_duration
    })
    .then(nextTick)
    .then(() => {
      checkStatus('enter')
      transitionEnded.value = false
      classes.value = classNames['enter-to']
    })
    .catch(() => {})
}

const leave = () => {
  const { duration } = props
  if (!display.value) {
    return
  }
  const classNames = getClassNames(name.value)
  const current_duration = duration.leave
  status.value = 'leave'
  emit('before-leave')
  Promise.resolve()
    .then(nextTick)
    .then(() => {
      checkStatus('leave')
      emit('leave')
      classes.value = classNames.leave
      currentDuration.value = current_duration
    })
    .then(nextTick)
    .then(() => {
      checkStatus('leave')
      transitionEnded.value = false
      setTimeout(() => onTransitionEnd(), current_duration)
      classes.value = classNames['leave-to']
    })
    .catch(() => {})
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      enter()
    } else {
      leave()
    }
  }
)
</script>

<style lang="scss" scoped>
.yh-popup {
  position: fixed;
  box-sizing: border-box;
  max-height: 100%;
  overflow-y: auto;
  transition-timing-function: ease;
  -webkit-animation: ease both;
  animation: ease both;
  -webkit-overflow-scrolling: touch;
  background-color: #fff;
  background-color: var(--popup-background-color, #fff);
}
.yh-popup--center {
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
}
.yh-popup--center.yh-popup--round {
  border-radius: 20px;
  border-radius: var(--popup-round-border-radius, 20px);
}
.yh-popup--top {
  top: 0;
  left: 0;
  width: 100%;
}
.yh-popup--top.yh-popup--round {
  border-radius: 0 0 20px 20px;
  border-radius: 0 0 var(--popup-round-border-radius, 20px) var(--popup-round-border-radius, 20px);
}
.yh-popup--right {
  top: 50%;
  right: 0;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
.yh-popup--right.yh-popup--round {
  border-radius: 20px 0 0 20px;
  border-radius: var(--popup-round-border-radius, 20px) 0 0 var(--popup-round-border-radius, 20px);
}
.yh-popup--bottom {
  bottom: 0;
  left: 0;
  width: 100%;
}
.yh-popup--bottom.yh-popup--round {
  border-radius: 20px 20px 0 0;
  border-radius: var(--popup-round-border-radius, 20px) var(--popup-round-border-radius, 20px) 0 0;
}
.yh-popup--left {
  top: 50%;
  left: 0;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
}
.yh-popup--left.yh-popup--round {
  border-radius: 0 20px 20px 0;
  border-radius: 0 var(--popup-round-border-radius, 20px) var(--popup-round-border-radius, 20px) 0;
}
.yh-popup--bottom.yh-popup--safe {
  padding-bottom: env(safe-area-inset-bottom);
}
.yh-popup--safeTop {
  padding-top: env(safe-area-inset-top);
}
.yh-popup__close-icon {
  position: absolute;
  z-index: 1;
  z-index: var(--popup-close-icon-z-index, 1);
  color: #969799;
  color: var(--popup-close-icon-color, #969799);
  font-size: 18px;
  font-size: var(--popup-close-icon-size, 18px);
}
.yh-popup__close-icon--top-left {
  top: 16px;
  top: var(--popup-close-icon-margin, 16px);
  left: 16px;
  left: var(--popup-close-icon-margin, 16px);
}
.yh-popup__close-icon--top-right {
  top: 16px;
  top: var(--popup-close-icon-margin, 16px);
  right: 16px;
  right: var(--popup-close-icon-margin, 16px);
}
.yh-popup__close-icon--bottom-left {
  bottom: 16px;
  bottom: var(--popup-close-icon-margin, 16px);
  left: 16px;
  left: var(--popup-close-icon-margin, 16px);
}
.yh-popup__close-icon--bottom-right {
  right: 16px;
  right: var(--popup-close-icon-margin, 16px);
  bottom: 16px;
  bottom: var(--popup-close-icon-margin, 16px);
}
.yh-popup__close-icon:active {
  opacity: 0.6;
}
.yh-scale-enter-active,
.yh-scale-leave-active {
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
}
.yh-scale-enter,
.yh-scale-leave-to {
  -webkit-transform: translate3d(-50%, -50%, 0) scale(0.7);
  transform: translate3d(-50%, -50%, 0) scale(0.7);
  opacity: 0;
}
.yh-fade-enter-active,
.yh-fade-leave-active {
  transition-property: opacity;
}
.yh-fade-enter,
.yh-fade-leave-to {
  opacity: 0;
}
.yh-center-enter-active,
.yh-center-leave-active {
  transition-property: opacity;
}
.yh-center-enter,
.yh-center-leave-to {
  opacity: 0;
}
.yh-bottom-enter-active,
.yh-bottom-leave-active,
.yh-left-enter-active,
.yh-left-leave-active,
.yh-right-enter-active,
.yh-right-leave-active,
.yh-top-enter-active,
.yh-top-leave-active {
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}
.yh-bottom-enter,
.yh-bottom-leave-to {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}
.yh-top-enter,
.yh-top-leave-to {
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}
.yh-left-enter,
.yh-left-leave-to {
  -webkit-transform: translate3d(-100%, -50%, 0);
  transform: translate3d(-100%, -50%, 0);
}
.yh-right-enter,
.yh-right-leave-to {
  -webkit-transform: translate3d(100%, -50%, 0);
  transform: translate3d(100%, -50%, 0);
}
</style>
