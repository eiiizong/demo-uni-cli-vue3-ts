<template>
  <view
    wx:if="{{ showWrapper }}"
    class="{{ utils.bem('dropdown-item', direction) }}"
    style="{{ wrapperStyle }}"
  >
    <van-popup
      show="{{ showPopup }}"
      custom-style="position: absolute;{{ popupStyle }}"
      overlay-style="position: absolute;"
      overlay="{{ overlay }}"
      position="{{ direction === 'down' ? 'top' : 'bottom' }}"
      duration="{{ transition ? duration : 0 }}"
      close-on-click-overlay="{{ closeOnClickOverlay }}"
      bind:enter="onOpen"
      bind:leave="onClose"
      bind:close="toggle"
      bind:after-enter="onOpened"
      bind:after-leave="onClosed"
    >
      <van-cell
        wx:for="{{ options }}"
        wx:key="value"
        data-option="{{ item }}"
        class="{{ utils.bem('dropdown-item__option', { active: item.value === value } ) }}"
        clickable
        icon="{{ item.icon }}"
        bind:tap="onOptionTap"
      >
        <view
          slot="title"
          class="van-dropdown-item__title"
          style="{{ item.value === value  ? 'color:' + activeColor : '' }}"
        >
          {{ item.text }}
        </view>
        <van-icon
          wx:if="{{ item.value === value }}"
          name="success"
          class="van-dropdown-item__icon"
          color="{{ activeColor }}"
        />
      </van-cell>

      <slot />
    </van-popup>
  </view>
</template>

<script setup>
import YhTransition from '../transition/transition.vue'
import YhPopup from '../popup/popup.vue'

import { computed } from 'vue'
import { bem } from '../common/utils'

const emit = defineEmits(['change', 'open', 'close', 'opened', 'closed'])

const props = defineProps({
  // 当前选中项对应的 value
  value: {
    type: [String, Number],
    default: () => '',
  },
  // 菜单项标题
  title: {
    type: String,
    default: () => '',
  },
  // 选项数组
  options: {
    type: Array,
    default: () => [],
  },

  // 是否禁用菜单
  disabled: {
    type: Boolean,
    default: () => false,
  },
  // 自定义弹出层样式
  popupStyle: {
    type: String,
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
