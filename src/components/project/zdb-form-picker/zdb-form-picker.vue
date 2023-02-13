<template>
  <view class="zdb-form-input" :class="required ? 'required' : ''">
    <div class="key">{{ label }}</div>
    <div class="value">
      <picker
        class="picker"
        mode="selector"
        range-key="name"
        :range="range"
        :value="pickerValue"
        @change="onChangePicker">
        <div class="picker-content">
          <div v-if="modelValue" class="picker-value">{{ valueDesc }}</div>
          <div v-else class="picker-placeholder">{{ placeholder }}</div>
          <YhIcon class="picker-icon" color="#7a7a7a" name="picker" size="28rpx" />
        </div>
      </picker>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  import { ref, computed } from 'vue'

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    /**
     * 输入框的内容
     */
    modelValue: {
      type: String,
      required: true
    },
    /**
     * input 的类型
     */
    range: {
      type: Array,
      required: true
    },
    /**
     * 输入框名称
     */
    label: {
      type: String,
      required: true
    },
    /**
     * 输入框为空时占位符
     */
    placeholder: {
      type: String,
      default: () => '请输入'
    },
    /**
     * 是否必须输入 默认 false
     */
    required: {
      type: Boolean,
      default: () => false
    }
  })

  // 根据modelValue获取的中文
  const valueDesc = ref('')

  const pickerValue = computed(() => {})

  // 选择
  const onChangePicker = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail
    pickerValue.value = value as string
    formData.a4_desc = pickerRange.value[Number(value)].name
    console.log('value', value)
  }
</script>

<style lang="scss" scoped>
  $color-key: #3d424d;
  $color-value: #a1a7b3;
  $input-height: 102rpx;
  $input-font-size: 30rpx;
  $input-line-height: 42rpx;
  .zdb-form-input {
    width: 100%;
  }
  .zdb-form-input {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $color-border;

    .key {
      font-weight: 500;
      color: $color-key;
      padding: calc(($input-height - 2rpx - $input-line-height) / 2) 0;
      position: relative;
      padding-left: 16rpx;
    }
    .value {
      flex: 1;
      overflow: hidden;
      min-height: $input-height;
      display: flex;
      margin-left: 30rpx;
    }
    .input {
      display: block;
      width: 100%;
      height: $input-height;
      font-weight: 500;
      text-align: right;
      color: $color-value;
      padding: calc(($input-height - 2rpx - $input-line-height) / 2) 0;
      font-size: $input-font-size;
      line-height: $input-line-height;
    }

    &.required {
      .key {
        &::before {
          content: '*';
          position: absolute;
          top: 50%;
          left: 0;
          color: #f00;
          transform: translateY(-50%);
          margin-top: -4rpx;
        }
      }
    }
  }
</style>
