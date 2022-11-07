<template>
  <view class="yh-dropdown-menu yh-dropdown-menu--top-bottom custom-class">
    <view
      wx:for="{{ itemListData }}"
      wx:key="index"
      data-index="{{ index }}"
      class="{{ utils.bem('dropdown-menu__item', { disabled: item.disabled }) }}"
      bind:tap="onTitleTap"
    >
      <view
        class="{{ item.titleClass }} {{ utils.bem('dropdown-menu__title', { active: item.showPopup, down: item.showPopup === (direction === 'down') }) }}"
        style="{{ item.showPopup ? 'color:' + activeColor : '' }}"
      >
        <view class="yh-ellipsis">
          {{ computed.displayTitle(item) }}
        </view>
      </view>
    </view>

    <slot />
  </view>
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
  // 菜单标题和选项的选中态颜色
  activeColor: {
    type: String,
    default: () => '#ee0a24',
  },
  // 菜单栏 z-index 层级
  zIndex: {
    type: Number,
    default: () => 10,
  },
  // 动画时长，单位毫秒
  duration: {
    type: Number,
    default: () => 200,
  },
  // 菜单展开方向，可选值为 up
  direction: {
    type: String,
    default: () => 'down',
  },
  // 是否显示遮罩层
  overlay: {
    type: Boolean,
    default: () => true,
  },
  // 是否在点击遮罩层后关闭菜单
  closeOnClickOverlay: {
    type: Boolean,
    default: () => true,
  },
  // 是否在点击外部 menu 后关闭菜单
  closeOnClickOutside: {
    type: Boolean,
    default: () => true,
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
.yh-dropdown-menu {
  display: flex;
  box-shadow: var(--dropdown-menu-box-shadow, $dropdown-menu-box-shadow);
  user-select: none;
  height: var(--dropdown-menu-height, $dropdown-menu-height);
  background-color: var(
    --dropdown-menu-background-color,
    $dropdown-menu-background-color
  );

  &__item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-width: 0; // hack for flex ellipsis

    &:active {
      opacity: 0.7;
    }

    &--disabled {
      &:active {
        opacity: 1;
      }

      .yh-dropdown-menu__title {
        color: var(
          --dropdown-menu-title-disabled-text-color,
          $dropdown-menu-title-disabled-text-color
        );
      }
    }
  }

  &__title {
    position: relative;
    box-sizing: border-box;
    max-width: 100%;
    padding: var(--dropdown-menu-title-padding, $dropdown-menu-title-padding);
    color: var(
      --dropdown-menu-title-text-color,
      $dropdown-menu-title-text-color
    );
    font-size: var(
      --dropdown-menu-title-font-size,
      $dropdown-menu-title-font-size
    );
    line-height: var(
      --dropdown-menu-title-line-height,
      $dropdown-menu-title-line-height
    );

    &::after {
      position: absolute;
      top: 50%;
      right: -4px;
      margin-top: -5px;
      border: 3px solid;
      border-color: transparent transparent currentColor currentColor;
      transform: rotate(-45deg);
      opacity: 0.8;
      content: '';
    }

    &--active {
      color: var(
        --dropdown-menu-title-active-text-color,
        $dropdown-menu-title-active-text-color
      );
    }

    &--down {
      &::after {
        margin-top: -1px;
        transform: rotate(135deg);
      }
    }
  }
}
</style>
