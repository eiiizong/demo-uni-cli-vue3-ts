<template>
  <div class="login-agreement">
    <label class="label" for="login_agreement">
      <checkbox-group @change="handleChangeCheckbox" class="checkbox-group">
        <checkbox id="login_agreement" class="checkbox" :checked="moduleValue" value="checkbox" />
      </checkbox-group>
      <div class="icon-checkbox" :class="[moduleValue ? 'checked' : '']">
        <i class="icon-checkbox_inner"></i>
      </div>
      <div class="d-f">我同意惠农惠民一卡通平台收集、保存、使用/转交我所提交的信息用于快捷登录</div>
      <div class="agreement d-f ai-c">
        <span>查看</span>
        <span class="link" @click.stop="handleJumpRoute('login-user-agreement', 'packageCommon')"
          >《用户服务协议》</span
        >
        <span>及</span>
        <span class="link" @click.stop="handleJumpRoute('login-privacy-policy', 'packageCommon')">《隐私条款》</span>
      </div>
    </label>
  </div>
</template>
<script setup lang="ts">
import { navigateTo } from '@/utils/uni-api'
import type {} from '@dcloudio/uni-app'

const emit = defineEmits(['update:moduleValue'])
const props = defineProps({
  moduleValue: {
    type: Boolean,
    required: true,
  },
})

// 协议改变 选择协议
const handleChangeCheckbox = (event: WechatMiniprogram.CheckboxGroupChange) => {
  const { value } = event.detail
  if (value && value.length > 0) {
    emit('update:moduleValue', true)
  } else {
    emit('update:moduleValue', false)
  }
}

// 跳转路由
const handleJumpRoute = (name: string, packageName: string) => {
  navigateTo(name, packageName)
}
</script>

<style lang="scss" scoped>
.login-agreement {
  padding-top: 40rpx;
  .label {
    display: block;
    color: $color-placeholder;
    font-weight: 400;
    line-height: 40rpx;
    font-size: 24rpx;
    position: relative;
    padding-left: 20px;
    .checkbox {
      display: none;
    }
    .agreement {
      .link {
        color: $primary;
      }
    }
    .icon-checkbox {
      $size: 24rpx;
      position: absolute;
      top: 6rpx;
      left: 0;
      width: $size;
      height: $size;
      border: 1px solid $color-placeholder;
      border-radius: 2px;
      display: flex;
      transition: all 0.3s;
      .icon-checkbox_inner {
        margin: auto;
        width: 0;
        height: 10rpx;
        border: 2px solid #fff;
        border-radius: 1px;
        border-top: none;
        border-right: none;
        background: transparent;
        transform: rotate(-45deg);
        position: relative;
        top: -2rpx;
        opacity: 0;
        transition: all 0.3s;
      }
      &.checked {
        background-color: $primary;
        border-color: $primary;
        .icon-checkbox_inner {
          opacity: 1;
          width: 18rpx;
        }
      }
    }
  }
}
</style>
