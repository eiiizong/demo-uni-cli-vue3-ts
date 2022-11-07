<template>
  <view class="yh-declare-picker">
    <div class="declare-form">
      <div class="cell-items">
        <div class="cell-item" :class="[required ? 'required' : 'required']">
          <div class="key" :style="labelStyle">
            {{ label }}
          </div>
          <div class="value" @click="handleClick">
            <div class="val" v-if="pickerValueDesc">
              {{ pickerValueDesc }}
            </div>
            <div class="placeholder" v-else>
              {{ placeholder }}
            </div>
            <div class="iconimg iconimg-select-down"></div>
          </div>
        </div>
      </div>
    </div>
    <YhPopup
      :show="isShowPopup"
      closeable
      @close="isShowPopup = false"
      position="bottom"
      round
      iconStyle="color:#f00"
    >
      <div class="popup-content">
        <div class="title">{{ placeholder }}</div>
        <block v-if="range && range.length > 0">
          <scroll-view scroll-y class="scroll-view">
            <block v-for="(item, index) in range" :key="item[valueKey]">
              <div
                class="scroll-view-item"
                :class="[
                  selectItem[valueKey] === item[valueKey] ? 'active' : '',
                ]"
                @click.stop="handleCilikItem(index)"
              >
                <div class="text">
                  {{ item[rangeKey] }}
                  <div
                    class="iconimg iconimg-hook"
                    v-show="selectItem[valueKey] === item[valueKey]"
                  ></div>
                </div>
              </div>
            </block>
          </scroll-view>
          <div class="button-wrapper">
            <YhButton
              type="info"
              block
              round
              @click="handleConfim"
              :disabled="!selectItem[valueKey]"
              >确定</YhButton
            >
          </div>
        </block>
        <YhNoData v-else></YhNoData>
      </div>
    </YhPopup>
  </view>
</template>

<script setup>
/**
 * 申报 picker 组件
 * @description 申报组件
 */
import YhPopup from '@/components/yh/popup/popup.vue'
import YhButton from '@/components/yh/button/button.vue'
import YhNoData from '@/components/project/yh-no-data/yh-no-data.vue'

import { computed, ref } from 'vue'

const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  // 唯一标识
  idName: {
    type: [String],
  },
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
  // 值
  modelValue: {
    type: [String],
    required: true,
  },
  // 渲染 key
  rangeKey: {
    type: [String],
    default: 'aaa103',
  },
  // 值 key
  valueKey: {
    type: [String],
    default: 'aaa102',
  },
  // 渲染数据
  range: {
    type: [Array],
    required: true,
  },
})

const isShowPopup = ref(false)
const selectItem = ref({}) // 选中的数据

// 确定选择
const handleConfim = () => {
  const { valueKey, idName } = props
  emit('update:modelValue', selectItem.value[valueKey])
  emit('change', idName, selectItem)
  isShowPopup.value = false
}
// 点击选择 弹窗选择框
const handleClick = () => {
  isShowPopup.value = true
}

// 点击选择的值 改变触发
const handleCilikItem = (index) => {
  const { range } = props
  const item = range[index]
  selectItem.value = item
}

// 选择框的中文值
const pickerValueDesc = computed(() => {
  const { range, valueKey, rangeKey, modelValue } = props
  let str = ''
  if (range && range.length) {
    for (let i = 0, len = range.length; i < len; i++) {
      const item = range[i]
      if (modelValue === item[valueKey]) {
        selectItem.value = item
        str = item[rangeKey]
        break
      }
    }
  }
  return str
})

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
</script>

<style lang="scss" scoped>
.yh-declare-picker {
  width: 100%;
  .popup-content {
    width: 100%;
    padding: 0;
    .title {
      text-align: center;
      line-height: 50rpx;
      font-size: 32rpx;
      font-weight: 500;
      padding: 32rpx 80rpx;
      color: $color;
    }
    .button-wrapper {
      padding: $spacing;
    }
  }
  .scroll-view {
    width: 100%;
    max-height: 800rpx;
    max-height: 60vh;
  }
  .scroll-view-item {
    padding: 0 $spacing;
    display: block;
    .text {
      display: inline-block;
      line-height: 40rpx;
      color: $color;
      font-size: 30rpx;
      padding: 16rpx 0;
      position: relative;
      padding-right: 42rpx;
      transition: all 0.3s;
    }
    .iconimg-hook {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      opacity: 0;
      width: 30rpx;
      height: 30rpx;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABOVJREFUeF7tWVtoHFUY/r7dtFLrpQ8NXhBFKQVbECXYnTVEElBriheoUKUiKlr6UFKwBtOa7ExmNqaFUos0rSBSqBqtFQShiopo8dKZDa36KiLiQx+kD6VaqJLd/WWmG9jE3TkzszNhs7vn9Xz/5fvOf/45cw7R5oNtzh8dAToV0OYKdLZAmxdApwl2tkBnC7S5Am21BTJ5eaiQ45fVa94WAmiWbAEwDOBeR+c8zi0tQNaU7WViiMD6uVVveQH6Den6twsvieBFAGsXtriWFaBvj3TPrsA2wCN+e73e3pICaKaMg3gBwC0+H7XzEBx1DO5umSaoGdKPNAwA/T7ELwI4zBSO2GM8txC3ZJtgZdVd8vVGySVeJI6cyfGXeqAlJ0DAVf8KaYw4o/xRdc5bUgIEWHWAOOgUMQyTZRV5d35JCBBo1YkLFAzbOo8GIT6HaXoBgqw6ge9QwrBtciYM+aaugJ5xuXpZCu8C2OxLSvAmr8XL9i5eDku+aQXoGZfVXSm8R2CjHykRDBcMHohCPNoWECFIaSSgyva+CbmtLDgOgeaHpWCrbfADlT/VfOAesM6Q5denMS0pnHTGeEzlOMq8lpc7IfgawI2+9iUMOCZPRYkR6SB0135ZufIypgV43HMg2OkYPBRHAnM+Mpb0EDij9Bkj+UA9oN+QVf+kMQ1g04LkRh2dk8qEAwA2WNKXAr5VQmMmrxSgb1K6Z4t4H8ADtZIjsM/WuUeZuA8gY8lTBNR7OQHyvgL0GnJzOY3jAvQpCE45OoeiiJCxZDeBvUrbhMjXFcDrxGV8CCCjTO5KTzjmGHwuELYCyuTleQqUpzYSg3aOn4fxHQb7v69A1pA1ksYJAPeEcSTAOwWdzwax2WBJNgWcVmFJ7LVzfFWFa2R+ngCZSVmXKuKEVN2hhXFOYMjWOeVnU2mqF5R+Bacdg71KXIOAmucALS+bIV4VpEP6v0TgflvnT/XsNEv+AHCrwu85R6ff7U7ItOrD6x6Esq/LCrkEt/zGQkY75egcqGWjWeLeyT+o8ifE2kKOv6pwccwrT4KaJW4ZukIsPAfUjS+C/QWDr1QDsqZMCbEjQNLbHJ1vB8DFAlEKMBdFy8sIBPuCRmUKvfYYvUanWbITwBtKW8EBx6D7gLFoI7AAFSJbQExB0B0gw98cnWuypmwUQvkZE+Cjgk73BWdRRygB3MzcX9VlKXzmPjOpMhXBYRLPALjOF0vMOEVkg15jqeKGmQ8tQNWWeAviPUQ0Ov4sl/DIjEn1j1CjkWrYRxbA9ZXJyyYKPm0oL+IJJ8ePG/LRgHFDAnh94crjxDeRchAcdAzuimQbk1HDAngimDIIen0hzDibvgoDP4zw7zBGcWNjEcBNKmvJVoF3bxBokHjUzvFkIHCCoNgE8HqCKTvofiYVo9ZBSWWT1HysAnjbIS+jEEz4JPw7r8H6qNfYcQsRuwAVEdxb3SdrJcsSBm0zuf/7sAIlIkDPa3LT8hK+F+COeQkRh5wc3WNx04xEBKhUwWMQfFLF9K/ZG7D67HbONg37pB9HNVMmQIy6hCl42Db4RTOR9/JKOqHKHcB5R+fTSceK4j9xAe42ZNXP47iY9JNaFPKLUgFRE1ssu8QrYLGIRI3TESCqcq1i16mAVlnJqDw6FRBVuVax61RAq6xkVB5tXwH/AXpoa1AmPpmKAAAAAElFTkSuQmCC)
        no-repeat center center;
      background-size: 100%;
    }

    &.active {
      .text {
        color: $primary;
        font-weight: 700;
      }
      .iconimg-hook {
        opacity: 1;
      }
    }

    &:first-child {
      padding-top: 20rpx;
    }

    &:last-child {
      padding-bottom: 20rpx;
    }
  }
}
</style>
