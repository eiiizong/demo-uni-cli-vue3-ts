<template>
  <div class="register-form">
    <div class="input-wrapper">
      <div class="label">名称</div>
      <input
        class="input"
        type="text"
        placeholder="请输入企业名称或个体工商户名称"
        :value="companyName"
        @input="onInputCompanyName" />
    </div>
    <div class="input-wrapper">
      <div class="label">用户名</div>
      <input class="input" type="text" placeholder="请输入用户名" :value="userName" @input="onInputUserName" />
    </div>
    <div class="input-wrapper">
      <div class="label">手机号</div>
      <input class="input" type="text" placeholder="请输入手机号" disabled :value="TMTel" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, toRefs } from 'vue'
  import { formatPhoneNumber } from '@/utils/format'
  import { useStoreUserInfo } from '@/stores/modules'

  const emit = defineEmits(['update:companyName', 'update:userName'])
  const props = defineProps({
    /**
     * 企业名称或个体工商户名称
     */
    companyName: {
      type: String,
      required: true
    },
    /**
     * 用户名
     */
    userName: {
      type: String,
      required: true
    }
  })

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  const TMTel = computed(() => {
    const { tel } = userInfo.value
    if (tel) {
      return formatPhoneNumber(tel)
    } else {
      return ''
    }
  })

  const onInputCompanyName = (event: unknown) => {
    const { detail } = event as WechatMiniprogram.Input
    const { value } = detail
    emit('update:companyName', value)
  }

  const onInputUserName = (event: unknown) => {
    const { detail } = event as WechatMiniprogram.Input
    const { value } = detail
    emit('update:userName', value)
  }
</script>

<style lang="scss" scoped>
  .register-form {
    padding-top: 68rpx;
    padding-bottom: 52rpx;
    .input-wrapper {
      position: relative;
      margin-bottom: 28rpx;
      color: #7b7c7e;
      font-weight: 500;
      .label {
        font-size: 28rpx;
        line-height: 42rpx;
        color: inherit;
        margin-bottom: 8rpx;
      }
      .input {
        width: 100%;
        height: 88rpx;
        background-color: #f5f6f9;
        padding: 0 16rpx;
        color: inherit;
        font-size: 28rpx;
        line-height: 1.4;
        border-radius: 8rpx;
        overflow: hidden;
        font-weight: 500;
        transition: all 0.3s;
        &[disabled] {
          background-color: #f1f1f1;
          opacity: 0.8;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
