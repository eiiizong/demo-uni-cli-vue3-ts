<template>
  <view v-if="loading" :class="getClass" @click="emit('click')">
    <view
      v-if="avatar"
      class="avatar-class"
      :class="getAvatarClass"
      :style="getAvatarStyle"
    />
    <view class="yh-skeleton__content">
      <view
        v-if="title"
        class="yh-skeleton__title"
        :style="'width:' + titleWidth"
      />
      <view
        v-for="(item, index) in rowArray"
        :key="index"
        class="yh-skeleton__row"
        :style="'width:' + (isArray ? rowWidth[index] : rowWidth)"
      />
    </view>
  </view>
  <view v-else class="yh-skeleton__content" @click="emit('click')">
    <slot />
  </view>
</template>

<script setup>
import { computed } from 'vue'
import { bem, addUnit } from '../common/utils'

const emit = defineEmits(['click'])

const props = defineProps({
  // 段落占位图行数
  row: {
    type: Number,
    default: () => 0,
  },
  // 段落占位图宽度，可传数组来设置每一行的宽度
  rowWidth: {
    type: [Array, String],
    default: () => '100%',
  },
  // 是否显示标题占位图
  title: {
    type: Boolean,
    default: () => false,
  },
  // 标题占位图宽度
  titleWidth: {
    type: [Number, String],
    default: () => '40%',
  },
  // 是否显示头像占位图
  avatar: {
    type: Boolean,
    default: () => false,
  },
  // 头像占位图大小
  avatarSize: {
    type: [Number, String],
    default: () => '64rpx',
  },
  // 头像占位图形状，可选值为square
  avatarShape: {
    type: String,
    default: () => 'round',
  },
  // 是否显示占位图，传false时会展示子组件内容
  loading: {
    type: Boolean,
    default: () => true,
  },
  // 是否开启动画
  animate: {
    type: Boolean,
    default: () => true,
  },
})

const isArray = computed(() => {
  const { rowWidth } = props
  return rowWidth instanceof Array
})
const rowArray = computed(() => {
  const { row } = props
  return Array.from({ length: row })
})

const getClass = computed(() => {
  let str = ''
  const { animate } = props
  str = bem('skeleton', [{ animate }])
  return str
})

const getAvatarClass = computed(() => {
  let str = ''
  const { avatarShape } = props
  str = bem('skeleton__avatar', [avatarShape])
  return str
})

const getAvatarStyle = computed(() => {
  let str = ''
  const { avatarSize } = props
  if (avatarSize) {
    str += `width: ${addUnit(avatarSize)}; `
    str += `height: ${addUnit(avatarSize)}; `
  }
  return str
})
</script>

<style lang="scss" scoped>
@keyframes yh-skeleton-blink {
  50% {
    opacity: 0.6;
  }
}
.yh-skeleton {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  padding: var(--skeleton-padding, $skeleton-padding);

  &__avatar {
    flex-shrink: 0;
    margin-right: var(--padding-md, $padding-md);
    background-color: var(
      --skeleton-avatar-background-color,
      $skeleton-avatar-background-color
    );

    &--round {
      border-radius: 100%;
    }
  }

  &__content {
    flex: 1;
  }

  &__avatar + &__content {
    padding-top: var(--padding-xs, $padding-xs);
  }

  &__row,
  &__title {
    height: var(--skeleton-row-height, $skeleton-row-height);
    background-color: var(
      --skeleton-row-background-color,
      $skeleton-row-background-color
    );
  }

  &__title {
    margin: 0;
  }

  &__row {
    &:not(:first-child) {
      margin-top: var(--skeleton-row-margin-top, $skeleton-row-margin-top);
    }
  }

  &__title + &__row {
    margin-top: 20px;
  }

  &--animate {
    animation: yh-skeleton-blink $skeleton-animation-duration ease-in-out
      infinite;
  }
}
</style>
