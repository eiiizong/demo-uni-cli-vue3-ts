<template>
  <YhPopup round position="bottom" custom-style="height: 80%" :show="modelValue">
    <view class="select-wrapper">
      <div class="header-tip">
        <div class="title">地区选择</div>
      </div>
    </view>
  </YhPopup>
</template>

<script lang="ts" setup>
  import YhPopup from '@/components/yh/popup/popup.vue'
  // import YhIcon from '@/components/yh/icon/icon.vue'

  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    /**
     * 是否显示弹窗
     */
    modelValue: {
      type: Boolean,
      required: true
    },
    /**
     * 选择类型 org 组织 address 地址
     */
    type: {
      type: String,
      default: () => 'org'
    }
  })
</script>

<style lang="scss" scoped>
  $border-radius: 16rpx;
  $toolbar-height: 80rpx;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  scroll-view,
  view {
    box-sizing: border-box;
    box-sizing: -webkit-border-box;
  }

  .ez-select-address-wrapper {
    width: 100%;
    background-color: #fff;
    color: #333;
    font-size: 28rpx;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  .header-tip {
    text-align: center;
    line-height: 80rpx;
    font-size: 28rpx;
    position: relative;

    .title {
      font-weight: 500;
    }

    .iconfont-close {
      position: absolute;
      top: 0;
      right: 0;
      line-height: 80rpx;
      padding: 0 32rpx;
      color: $primary;
    }
  }

  .toolbar {
    width: 100%;
    border-bottom: 1px solid #eee;

    .scroll-view {
      width: 100%;
      flex-wrap: nowrap;
      display: flex;
      height: $toolbar-height;

      .scroll-view-items {
        min-width: 100%;
        display: flex;
        align-items: center;
        height: $toolbar-height;
      }

      .scroll-view-item {
        display: flex;
        font-size: 32rpx;
        padding: 0 32rpx;
        white-space: nowrap;

        span {
          line-height: $toolbar-height;
          position: relative;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

          &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            height: 2px;
            // border-radius: 1px;
            background-color: $primary;
          }
        }

        &.active {
          color: $primary;

          span {
            font-weight: 700;

            &::after {
              bottom: 0;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .swiper {
    width: 100%;
    height: 800rpx;
    height: 60vh;

    .swiper-item {
      width: 100%;
      height: 100%;

      .swiper-item-content {
        width: 100%;
        height: 100%;

        .swiper-scroll-view {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
    }

    .swiper-scroll-view-item {
      padding: 0 32rpx;
      line-height: 72rpx;
      color: #333;
      font-size: 28rpx;
      display: flex;
      align-items: center;
      &.city_511300 {
        font-size: 34rpx;
        font-weight: 600;
      }
      .iconfont-hook {
        padding-left: 32rpx;
        font-size: 0;
        transition: all 3s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: 0;
        transform: scale(0);
      }

      &.active {
        color: $primary;

        .iconfont-hook {
          font-size: 28rpx;
          opacity: 1;
          transform: scale(1);
        }
      }

      &:first-child {
        padding-top: 20rpx;
      }

      &:last-child {
        padding-bottom: 20rpx;
      }
    }

    .loading {
      @include centerPositionTransform();
      color: $primary;
      text-align: center;

      p {
        font-size: 30rpx;
        padding-top: 20px;
        font-weight: 500;
      }

      .iconfont-loading {
        font-size: 80rpx;
        animation: spin 2s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

    .error {
      @include centerPositionTransform();
      text-align: center;
      white-space: pre-wrap;

      .tip {
        font-size: 26rpx;
        padding-bottom: 64rpx;
        color: #666;
      }
    }
  }
</style>
