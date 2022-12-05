<template>
  <button
    :id="id"
    :data-detail="dataset"
    :class="getButtonClass"
    hover-class="yh-button--active hover-class"
    :lang="lang"
    :form-type="formType"
    :style="getButtonStyle"
    :open-type="getOpenType"
    :business-id="businessId"
    :session-from="sessionFrom"
    :send-message-title="sendMessageTitle"
    :send-message-path="sendMessagePath"
    :send-message-img="sendMessageImg"
    :show-message-card="showMessageCard"
    :app-parameter="appParameter"
    :aria-label="ariaLabel"
    @click="onClick"
    @getuserinfo="onGetUserInfo"
    @contact="onContact"
    @getphonenumber="onGetPhoneNumber"
    @error="onError"
    @launchapp="onLaunchApp"
    @opensetting="onOpenSetting"
    @chooseavatar="onChooseavatar"
  >
    <template v-if="loading">
      <view :style="getLoadingStyle">
        <yh-loading :size="loadingSize" :type="loadingType" :color="getLoadingColor" />
      </view>
      <view v-if="loadingText" class="yh-button__loading-text">
        {{ loadingText }}
      </view>
    </template>
    <template v-else>
      <view class="yh-button__icon" v-if="icon" style="height: 1.2em">
        <yh-icon
          size="1.2em"
          :name="icon"
          :class-prefix="classPrefix"
          custom-style="min-width: 1em; line-height: inherit !important; vertical-align: top;"
        />
      </view>

      <view class="yh-button__text">
        <slot />
      </view>
    </template>
  </button>
</template>

<script setup lang="ts">
import YhLoading from '../loading/loading.vue'
import YhIcon from '../icon/icon.vue'

import { computed } from 'vue'
import { bem, canIUseGetUserProfile, addUnit } from '../common/utils'

const emit = defineEmits([
  'click',
  'getuserinfo',
  'contact',
  'getphonenumber',
  // 当使用开放能力时，发生错误的回调，open-type=launchApp时有效
  'error',
  'launchapp',
  'chooseavatar',
  'opensetting',
])

const props = defineProps({
  // 标识符
  id: {
    type: [String],
    default: () => '',
  },
  // 按钮类型，可选值为 primary info warning danger default
  type: {
    type: [String],
    default: () => 'default',
  },
  // 按钮尺寸，可选值为 normal large small mini
  size: {
    type: [String],
    default: () => 'normal',
  },
  // 按钮颜色，支持传入linear-gradient渐变色
  color: {
    type: [String],
    default: () => '',
  },
  // 左侧图标名称或图片链接，可选值见 Icon 组件
  icon: {
    type: [String],
    default: () => '',
  },
  // 图标类名前缀，同 Icon 组件的 class-prefix 属性
  classPrefix: {
    type: [String],
    default: () => 'yh-icon',
  },
  // 是否为朴素按钮
  plain: {
    type: [Boolean],
    default: () => false,
  },
  // 是否为块级元素
  block: {
    type: [Boolean],
    default: () => false,
  },
  // 是否为圆形按钮
  round: {
    type: [Boolean],
    default: () => false,
  },
  // 是否为方形按钮
  square: {
    type: [Boolean],
    default: () => false,
  },
  // 是否禁用按钮
  disabled: {
    type: [Boolean],
    default: () => false,
  },
  // 是否使用 0.5px 边框
  hairline: {
    type: [Boolean],
    default: () => false,
  },
  // 是否显示为加载状态
  loading: {
    type: [Boolean],
    default: () => false,
  },
  // 加载状态提示文字
  loadingText: {
    type: [String],
    default: () => '',
  },
  // 加载状态图标类型，可选值为 spinner circular
  loadingType: {
    type: [String],
    default: () => 'circular',
  },
  // 加载图标大小
  loadingSize: {
    type: [String, Number],
    default: () => '40rpx',
  },
  // 自定义样式
  customStyle: {
    type: [String],
    default: () => '',
  },
  // 微信开放能力，具体支持可参考 微信官方文档 https://developers.weixin.qq.com/miniprogram/dev/component/button.html
  openType: {
    type: [String],
    default: () => '',
  },
  // html aria-label
  ariaLabel: {
    type: [String],
    default: () => '',
  },
  // 获取用户信息描述 open-type=getUserInfo 时有效
  getUserProfileDesc: {
    type: [String],
    default: () => '',
  },
  // 打开 APP 时，向 APP 传递的参数，open-type=launchApp 时有效
  appParameter: {
    type: [String],
    default: () => '',
  },
  // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
  lang: {
    type: [String],
    default: () => 'en',
  },
  // 会话来源
  sessionFrom: {
    type: [String],
    default: () => '',
  },
  // 客服消息子商户 id
  businessId: {
    type: [Number],
    default: () => 0,
  },
  // 会话内消息卡片标题 当前标题
  sendMessageTitle: {
    type: [String],
    default: () => '',
  },
  // 会话内消息卡片点击跳转小程序路径 当前分享路径
  sendMessagePath: {
    type: [String],
    default: () => '',
  },
  // sendMessageImg  截图
  sendMessageImg: {
    type: [String],
    default: () => '',
  },
  // 显示会话内消息卡片  截图
  showMessageCard: {
    type: [Boolean],
    default: () => false,
  },
  // 按钮 dataset，open-type 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值
  dataset: {
    type: [Object],
    default: () => null,
  },
  // 用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件
  formType: {
    type: [String],
    default: () => '',
  },
})

const getOpenType = computed(() => {
  let str = ''
  const { disabled, loading, openType } = props
  if (disabled || loading || (canIUseGetUserProfile() && openType === 'getUserInfo')) {
    str = ''
  } else {
    if (openType) {
      str = openType
    }
  }
  return str
})

const getButtonClass = computed(() => {
  let str = ''
  const { type, block, round, plain, square, loading, disabled, hairline, size } = props

  if (hairline) {
    str += `yh-hairline--surround `
  }

  str += bem('button', [
    type,
    size,
    {
      block,
      round,
      plain,
      square,
      loading,
      disabled,
      hairline,
      unclickable: disabled || loading,
    },
  ])

  return str
})

const getButtonStyle = computed(() => {
  let str = ''
  const { plain, color, customStyle } = props

  if (!color) {
    str += customStyle
  } else {
    str += `color: ${plain ? color : '#fff'}; `
    str += `background: ${plain ? null : color}; `

    if (color.indexOf('gradient') !== -1) {
      str += `border: 0`
    } else {
      str += `border-color: ${color}; `
    }
    if (customStyle) {
      str += customStyle
    }
  }

  return str
})

const getLoadingColor = computed(() => {
  const { type, color, plain } = props
  if (plain) {
    return color ? color : '#c9c9c9'
  }
  if (type === 'default') {
    return '#c9c9c9'
  }
  return '#fff'
})

const getLoadingStyle = computed(() => {
  let str = ''
  const { loadingSize } = props
  if (loadingSize) {
    str += `height: ${addUnit(loadingSize)};`
  }

  return str
})

const onClick = (event) => {
  const { disabled, loading } = props
  if (!disabled && !loading) {
    emit('click', event.detail)
    const { openType, lang, getUserProfileDesc } = props

    if (openType === 'getUserInfo' && canIUseGetUserProfile()) {
      uni.getUserProfile({
        desc: getUserProfileDesc || '',
        lang: lang || 'en',
        complete: (userProfile) => {
          emit('getuserinfo', userProfile)
        },
      })
    }
  }
}

const onGetUserInfo = (event) => {
  emit('getuserinfo', event.detail)
}
const onContact = (event) => {
  emit('contact', event.detail)
}
const onGetPhoneNumber = (event) => {
  emit('getphonenumber', event.detail)
}
const onError = (event) => {
  emit('error', event.detail)
}
const onLaunchApp = (event) => {
  emit('launchapp', event.detail)
}
const onOpenSetting = (event) => {
  emit('opensetting', event.detail)
}
const onChooseavatar = (event) => {
  emit('chooseavatar', event.detail)
}
</script>

<style lang="scss" scoped>
@use '../common/style/hairline.scss';
.yh-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0;
  text-align: center;
  vertical-align: middle;
  -webkit-appearance: none;
  -webkit-text-size-adjust: 100%;
  height: 88rpx;
  line-height: 40rpx;
  font-size: 32rpx;
  transition: opacity 0.2;
  border-radius: 4rpx;

  &::before {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border: inherit;
    border-radius: inherit; /* inherit parent's border radius */
    transform: translate(-50%, -50%);
    opacity: 0;
    content: ' ';
    background-color: #000;
    border-color: #000;
  }

  // reset weapp default border
  &::after {
    border-width: 0;
  }

  &--active::before {
    opacity: 0.15;
  }

  &--unclickable::after {
    display: none;
  }

  &--default {
    color: #323233;
    background: #fff;
    border: 1px solid $color-border;
  }

  &--primary {
    color: #fff;
    background: $color-primary;
    border: 1px solid $color-primary;
  }

  &--info {
    color: #fff;
    background: $color-info;
    border: 1px solid $color-info;
  }

  &--danger {
    color: #fff;
    background: $color-danger;
    border: 1px solid $color-danger;
  }

  &--warning {
    color: #fff;
    background: $color-warning;
    border: 1px solid $color-warning;
  }

  &--plain {
    background: #fff;

    &.yh-button--primary {
      color: $color-primary;
    }

    &.yh-button--info {
      color: $color-info;
    }

    &.yh-button--danger {
      color: $color-danger;
    }

    &.yh-button--warning {
      color: $color-warning;
    }
  }

  &--large {
    width: 100%;
    height: 100rpx;
  }

  &--normal {
    padding: 0 30rpx;
    font-size: 24rpx;
  }

  &--small {
    min-width: 120rpx;
    height: 60rpx;
    padding: 0 16rpx;
    font-size: 24rpx;
  }

  // mini图标默认宽度50px，文字不能超过4个
  &--mini {
    display: inline-block;
    min-width: 100rpx;
    height: 44rpx;
    font-size: 20rpx;

    & + .yh-button--mini {
      margin-left: 5px;
    }
  }

  &--block {
    display: flex;
    width: 100%;
  }

  &--round {
    border-radius: 999px;
  }

  &--square {
    border-radius: 0;
  }

  &--disabled {
    opacity: 0.5;
  }

  &__text {
    display: inline;
  }

  &__loading-text,
  &__icon + &__text:not(:empty) {
    margin-left: 8rpx;
  }

  &--hairline {
    padding-top: 1px; // add 1px padding for text vertical align middle
    border-width: 0;

    &::after {
      border-color: inherit;
      border-width: 1px;
      border-radius: calc(4rpx * 2);
    }

    &.yh-button--round::after {
      border-radius: 999px;
    }

    &.yh-button--square::after {
      border-radius: 0;
    }
  }
}
</style>