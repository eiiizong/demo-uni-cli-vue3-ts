<template>
  <view
    v-if="inited"
    class="yh-transition"
    :class="[classes]"
    :style="getStyle"
    @click="emit('click')"
  >
    <slot />
  </view>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { isObj } from '../common/utils'

const emit = defineEmits([
  'click',
  'before-enter',
  'enter',
  'after-enter',
  'before-leave',
  'leave',
  'after-leave',
])

const props = defineProps({
  // 自定义样式
  customStyle: {
    type: String,
    default: () => '',
  },
  // 是否展示组件
  show: {
    type: Boolean,
    default: () => false,
  },
  // 动画时长，单位为毫秒
  duration: {
    type: [Number, Object],
    default: () => 300,
  },
  // 动画类型
  // 名称	说明
  // fade	淡入
  // fade-up	上滑淡入
  // fade-down	下滑淡入
  // fade-left	左滑淡入
  // fade-right	右滑淡入
  // slide-up	上滑进入
  // slide-down	下滑进入
  // slide-left	左滑进入
  // slide-right	右滑进入
  name: {
    type: String,
    default: () => 'fade',
  },
})

const classes = ref(
  `enter-class enter-active-class enter-to-class leave-class leave-active-class leave-to-class `
)
const status = ref('')
const inited = ref(false)
const display = ref(false)
const transitionEnded = ref(true)
const currentDuration = ref(300)

const getStyle = computed(() => {
  let str = ''
  const { customStyle } = props
  if (currentDuration.value) {
    str += `-webkit-transition-duration:${currentDuration.value}ms; `
    str += `transition-duration:${currentDuration.value}ms; `
  }
  if (!display.value) {
    str += `display: none; `
  }
  if (customStyle) {
    str += customStyle
  }

  return str
})

const getClassNames = (name) => ({
  enter: `yh-${name}-enter yh-${name}-enter-active enter-class enter-active-class `,
  'enter-to': `yh-${name}-enter-to yh-${name}-enter-active enter-to-class enter-active-class `,
  leave: `yh-${name}-leave yh-${name}-leave-active leave-class leave-active-class `,
  'leave-to': `yh-${name}-leave-to yh-${name}-leave-active leave-to-class leave-active-class `,
})

const nextTick = () => new Promise((resolve) => setTimeout(resolve, 1000 / 30))

const checkStatus = (new_status) => {
  if (new_status !== status.value) {
    throw new Error(`incongruent status: ${new_status}`)
  }
}

const onTransitionEnd = () => {
  if (transitionEnded.value) {
    return
  }
  transitionEnded.value = true
  emit(`after-${status.value}`)
  const { show } = props
  if (!show && display.value) {
    display.value = false
    inited.value = false
  }
}

const enter = () => {
  const { duration, name } = props
  const classNames = getClassNames(name)
  const current_duration = isObj(duration) ? duration.enter : duration
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
  const { duration, name } = props
  if (!display.value) {
    return
  }
  const classNames = getClassNames(name)
  const current_duration = isObj(duration) ? duration.leave : duration
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
.yh-transition {
  transition-timing-function: ease;
}
.yh-fade-enter-active,
.yh-fade-leave-active {
  transition-property: opacity;
}
.yh-fade-enter,
.yh-fade-leave-to {
  opacity: 0;
}
.yh-fade-down-enter-active,
.yh-fade-down-leave-active,
.yh-fade-left-enter-active,
.yh-fade-left-leave-active,
.yh-fade-right-enter-active,
.yh-fade-right-leave-active,
.yh-fade-up-enter-active,
.yh-fade-up-leave-active {
  transition-property: opacity, -webkit-transform;
  transition-property: opacity, transform;
  transition-property: opacity, transform, -webkit-transform;
}
.yh-fade-up-enter,
.yh-fade-up-leave-to {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}
.yh-fade-down-enter,
.yh-fade-down-leave-to {
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
  opacity: 0;
}
.yh-fade-left-enter,
.yh-fade-left-leave-to {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
}
.yh-fade-right-enter,
.yh-fade-right-leave-to {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}
.yh-slide-down-enter-active,
.yh-slide-down-leave-active,
.yh-slide-left-enter-active,
.yh-slide-left-leave-active,
.yh-slide-right-enter-active,
.yh-slide-right-leave-active,
.yh-slide-up-enter-active,
.yh-slide-up-leave-active {
  transition-property: -webkit-transform;
  transition-property: transform;
  transition-property: transform, -webkit-transform;
}
.yh-slide-up-enter,
.yh-slide-up-leave-to {
  -webkit-transform: translate3d(0, 100%, 0);
  transform: translate3d(0, 100%, 0);
}
.yh-slide-down-enter,
.yh-slide-down-leave-to {
  -webkit-transform: translate3d(0, -100%, 0);
  transform: translate3d(0, -100%, 0);
}
.yh-slide-left-enter,
.yh-slide-left-leave-to {
  -webkit-transform: translate3d(-100%, 0, 0);
  transform: translate3d(-100%, 0, 0);
}
.yh-slide-right-enter,
.yh-slide-right-leave-to {
  -webkit-transform: translate3d(100%, 0, 0);
  transform: translate3d(100%, 0, 0);
}
</style>
