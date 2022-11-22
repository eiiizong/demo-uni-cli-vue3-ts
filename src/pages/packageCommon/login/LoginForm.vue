<template>
  <div class="login-form">
    <div class="input-wrapper">
      <label for="username" class="label">姓名</label>
      <div class="input">
        <input
          id="username"
          class="input"
          type="text"
          placeholder="请输入您的姓名"
          v-model="formData.userName"
          maxlength="20"
        />
      </div>
    </div>
    <div class="input-wrapper">
      <label for="username" class="label">身份证</label>
      <div class="input">
        <input
          id="username"
          type="idcard"
          placeholder="请输入您的身份证号码"
          v-model="formData.idCard"
          maxlength="18"
          @blur="handleCheckIdCard"
        />
      </div>
    </div>
    <div class="input-wrapper">
      <label for="tel" class="label">手机号</label>
      <div class="input d-f ai-c">
        <input
          class="flex-1 disabled"
          id="tel"
          type="number"
          placeholder="请点击右侧按钮获取您的手机号"
          disabled
          v-model="formData.tel"
          maxlength="11"
        />
        <div class="button-wrapper">
          <YhButton
            custom-style="width:170rpx;padding:0; height:78rpx;"
            type="primary"
            openType="getPhoneNumber"
            @getphonenumber="getPhoneNumber"
            >获取手机号</YhButton
          >
        </div>
      </div>
    </div>

    <div class="input-wrapper checkbox">
      <label class="label" for="cb">
        <checkbox-group @change="handleCheckboxChange" class="checkbox-group">
          <checkbox
            id="cb"
            class="checkbox"
            :checked="formData.isAgree"
            value="checkbox"
          />
        </checkbox-group>
        <div class="icon-checkbox" :class="[formData.isAgree ? 'checked' : '']">
          <i class="icon-checkbox_inner"></i>
        </div>
        <div class="d-f">
          我同意惠农惠民一卡通平台收集、保存、使用/转交我所提交的信息用于快捷登录
        </div>
        <div class="agreement d-f ai-c">
          <span>查看</span>
          <span
            class="link"
            @click.stop="handleJumpRoute('user-agreement', 'packageCommon')"
            >《用户服务协议》</span
          >
          <span>及</span>
          <span
            class="link"
            @click.stop="handleJumpRoute('privacy-policy', 'packageCommon')"
            >《隐私条款》</span
          >
        </div>
      </label>
    </div>
  </div>
</template>
<script setup>
import YhButton from '@/components/yh/button/button.vue'

import { navigateTo, showModal } from '@/utils/uni-api'
import { requestWXGetRealPhone, requestWXCheckIdCard } from '@/service/api'
import { useGetters, useCheckIDCard } from '@/hooks/common'
import { USER_INFO } from '@/store/constants'

const { userInfo } = useGetters([USER_INFO])

const props = defineProps({
  formData: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['change'])

// 跳转路由
const handleJumpRoute = (name, packageName, params = null) => {
  navigateTo(name, packageName, params)
}

// 协议改变
const handleCheckboxChange = (e) => {
  const { value } = e.target
  if (value && value.length > 0) {
    emit('change', { isAgree: true })
  } else {
    emit('change', { isAgree: false })
  }
}

// 获取手机号
const getPhoneNumber = (e) => {
  const { encryptedData, iv, errMsg } = e
  const { session_key } = userInfo.value
  if (errMsg === 'getPhoneNumber:ok') {
    requestWXGetRealPhone(encryptedData, iv, session_key, true, false)
      .then((res) => {
        const { data } = res
        if (data) {
          emit('change', { tel: data })
        } else {
          showModal('解密成功，未能获取您的电话号码！')
        }
      })
      .catch((err) => {
        showModal('电话号码解密失败，请稍后重试！')
      })
  } else {
    showModal('请点击允许按钮，才能获取您的电话号码！')
  }
}

// 输入框失去焦点校验身份证号
const handleCheckIdCard = (e) => {
  console.log(e, 99)
  let { value } = e.target
  value = value.trim().toUpperCase()
  const checkResult = useCheckIDCard(value)
  // 校验身份证失败
  if (checkResult.status === '0') {
    showModal(checkResult.msg).then((res) => {
      emit('change', { idCard: '' })
    })
  } else {
    // 后台校验身份证
    requestWXCheckIdCard(value)
      .then((res) => {})
      .catch((err) => {
        showModal('该身份证号已被其他用户绑定！请重新输入！').then((res) => {
          emit('change', { idCard: '' })
        })
      })
  }
  console.log(value, 12345)
}
</script>

<style lang="scss" scoped>
.login-form {
  .input-wrapper {
    margin-bottom: 26rpx;
    &.checkbox {
      position: relative;
      margin-top: 60rpx;
      margin-bottom: 60rpx;
      padding-left: 32rpx;
      .label {
        color: $color-placeholder;
        font-weight: 400;
        line-height: 40rpx;
        font-size: 24rpx;
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
  }

  .label {
    display: block;
    font-size: 24rpx;
    font-weight: 700;
    line-height: 34rpx;
    color: #777a82;
    margin-bottom: 6rpx;
  }
  .input {
    position: relative;
    input {
      display: block;
      width: 100%;
      height: 78rpx;
      background-color: #f5f6f9;
      border-radius: 12rpx;
      font-size: 28rpx;
      line-height: 1.4;
      padding: 0 16rpx;
      font-weight: 500;
      color: $color;
      &.disabled {
        color: rgba(0, 0, 0, 0.25);
        background-color: #ddd;
        opacity: $opacity-disabled;
      }
    }
  }
  .button-wrapper {
    width: auto;
    padding-left: 12rpx;
  }
}
</style>
