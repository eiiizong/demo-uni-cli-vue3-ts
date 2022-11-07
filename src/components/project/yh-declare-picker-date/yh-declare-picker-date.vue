<template>
  <view class="yh-declare-picker-date">
    <div class="declare-form">
      <div class="cell-items">
        <div class="cell-item" :class="[required ? 'required' : 'required']">
          <div class="key" :style="labelStyle">
            {{ label }}
          </div>
          <block v-if="custom">
            <div class="value" @click="handleClick">
              <div class="val" v-if="pickerValueDesc">
                {{ pickerValueDesc }}
              </div>
              <div class="placeholder" v-else>
                {{ placeholder }}
              </div>
              <div class="iconimg iconimg-select-down"></div>
            </div>
          </block>
          <block v-else>
            <div class="value">
              <picker
                class="picker"
                mode="date"
                :style="pickerStyle"
                :header-text="placeholder"
                :disabled="disabled"
                :fields="fields"
                :value="pickerIndex"
                :start="startTime"
                :end="endTime"
                @change="hanldeChange"
              >
                <div class="picker-content">
                  <div class="val" :style="pickerStyle" v-if="pickerValueDesc">
                    {{ pickerValueDesc }}
                  </div>
                  <div class="placeholder" :style="pickerStyle" v-else>
                    {{ placeholder }}
                  </div>
                  <div class="iconimg iconimg-select-down"></div>
                </div>
              </picker>
            </div>
          </block>
        </div>
      </div>
    </div>
    <yh-calendar
      v-if="custom"
      :show="isShowCalendar"
      type="single"
      :round="true"
      position="bottom"
      :min-date="minDate"
      :max-date="maxDate"
      :max-range="maxRange"
      :show-confirm="true"
      confirm-text="确定"
      confirm-disabled-text="确定"
      :first-day-of-week="1"
      @confirm="onConfirm"
      @select="onSelect"
      @unselect="onUnselect"
      @open="onOpen"
      @opened="onOpened"
      @close="onClose"
      @closed="onClosed"
    >
    </yh-calendar>
  </view>
</template>

<script setup>
/**
 * 申报 picker 组件
 * @description 申报组件
 */
import YhCalendar from '@/components/yh/calendar/calendar.vue'

import { computed, ref } from 'vue'

const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  // label 名称
  label: {
    type: [String],
    default: 'picker label',
  },
  // label 宽度控制
  labelWidth: {
    type: [String, Number],
    default: '',
  },
  // 日期粒度 有效值 year、month、day(默认)，表示选择器的粒度
  fields: {
    type: [String],
    default: 'day',
  },
  // 选择提示
  placeholder: {
    type: [String],
    default: '请选择',
  },
  // 是否必填
  required: {
    type: [Boolean],
    default: true,
  },
  // 是否使用自定义日历弹窗
  custom: {
    type: [Boolean],
    default: false,
  },
  // 表示选中的日期，格式为"YYYY-MM-DD"
  modelValue: {
    type: [String],
    required: true,
  },
  // 用于获取码表对应的中文值
  idName: {
    type: [String],
    default: '',
  },
  // 表示有效日期范围的开始，字符串格式为"YYYY-MM-DD"
  startTime: {
    type: [String],
    default: '',
  },
  // 表示有效日期范围的结束，字符串格式为"YYYY-MM-DD"
  endTime: {
    type: [String],
    default: '',
  },
})

const isShowCalendar = ref(false)

const labelStyle = computed(() => {
  const { labelWidth } = props
  let str = ''
  if (labelWidth) {
    if (typeof labelWidth === 'string') {
      str += `width: ${labelWidth}; `
    }
    if (typeof labelWidth === 'number') {
      str += `width: ${labelWidth}rpx; `
    }
  }
  return str
})

// 选中的值
const pickerValueDesc = computed(() => {
  let str = ''
  const { custom, modelValue } = props
  if (custom) {
  } else {
    str = modelValue
  }
  return str
})

// 日期改变
const hanldeChange = (e) => {
  const { idName } = props
  const { value } = e.detail
  emit('update:modelValue', value)
  emit('change', idName, value)
}
</script>

<style lang="scss" scoped>
.yh-declare-picker-date {
  width: 100%;
}
</style>
