<template>
  <view class="yh-declare-personnel">
    <YhPanel
      :title="title"
      :rightText="
        isShowCategoryNotes && renderList.length > 0 ? '查看详情>>' : ''
      "
      @clickRightText="isShowPopup = true"
    >
      <div class="yh-declare-personnel__panel-content">
        <div class="yh-declare-personnel__tip">{{ tip }}</div>

        <div class="yh-declare-personnel__radio-group-wrapper">
          <radio-group
            class="yh-declare-personnel__radio-group"
            @change="handleChange"
          >
            <block v-for="item in renderList" :key="item.aka131">
              <label
                class="yh-declare-personnel__radio-group__label"
                :for="'aka131_' + item.aka131"
                :class="[item.checked ? 'checked' : '']"
              >
                <div
                  class="iconimg iconimg-radio"
                  :class="[item.checked ? 'checked' : '']"
                ></div>
                <radio
                  class="yh-declare-personnel__radio-group__radio"
                  :checked="item.checked"
                  :value="item.aka131"
                  :id="'aka131_' + item.aka131"
                ></radio>
                <div class="yh-declare-personnel__radio-group__label-text">
                  {{ item.che142 }}
                </div>
              </label>
            </block>
          </radio-group>
        </div>
      </div>
    </YhPanel>
    <YhPopup
      closeable
      close-icon="close"
      :show="isShowPopup"
      @close="isShowPopup = false"
    >
      <div class="yh-declare-personnel__popup-content">
        <div class="name d-f ai-c jc-c">
          <div class="left d-f ai-c">
            <div class="iconimg iconimg-project"></div>
            <span>类别注释</span>
          </div>
        </div>
        <div class="cell-content">
          <div
            class="cell-wrapper"
            v-for="item in renderList"
            :key="item.aka131"
          >
            <div class="cell-title">
              {{ item.che142 }}
            </div>
            <div class="cell-text">
              {{ item.che143 || '暂无注释' }}
            </div>
          </div>
        </div>
      </div>
    </YhPopup>
  </view>
</template>

<script setup>
/**
 * 申报人员类别选择组件
 * @description 申报 radio/checkbox 组件
 */
import YhPopup from '@/components/yh/popup/popup.vue'
import YhPanel from '@/components/project/yh-panel/yh-panel.vue'

import { ref } from 'vue'

const emit = defineEmits(['change'])
const props = defineProps({
  // 提示信息
  tip: {
    type: [String],
    default:
      '请根据自身实际情况，在下面勾选。相关佐证材料，请在材料上传页上传。',
  },
  // 标题
  title: {
    type: [String],
    default: '企业申报类型',
  },
  // 渲染数据
  renderList: {
    type: [Array],
    required: true,
  },
  // 是否多选 false 单选 true 多选
  isMultipleChoices: {
    type: [Boolean],
    default: false,
  },
  // 是否显示类别注释
  isShowCategoryNotes: {
    type: [Boolean],
    default: false,
  },
})

// 是否显示弹窗
const isShowPopup = ref(false)

// 选择事件
const handleChange = (e) => {
  const { value } = e.target
  emit('change', value)
}
</script>

<style lang="scss" scoped>
.yh-declare-personnel {
  &__panel-content {
    width: 100%;
  }
  &__tip {
    font-size: 24rpx;
    background-color: #fff7e7;
    padding: 12rpx;
    color: #e49904;
    line-height: 1.4;
    margin-top: 12rpx;
    border-radius: 4rpx;
  }
  &__radio-group,
  &__checkbox-group {
    width: 100%;
    &__label {
      font-size: 30rpx;
      border-bottom: solid 1rpx $border-color;
      padding: 10rpx 0;
      min-height: 108rpx;
      color: $color;
      font-weight: 500;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      &.checked {
        color: $primary;
      }
      &:last-child {
        border-bottom: 0;
      }
    }
    &__checkbox,
    &__radio {
      width: 0;
      height: 0;
      display: none;
    }
    .iconimg {
      width: 32rpx;
      height: 32rpx;
      margin-right: 12rpx;
      transition: all 0.3s;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 100% 100%;
    }
    &__label-text {
      flex: 1;
      overflow: hidden;
      line-height: 1.4;
    }
    .iconimg-radio {
      background-image: url(data:image/png;base64,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);
      &.checked {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABWJJREFUeF7tW1toHFUY/v5ZFcEL6IsX8EFjlfpQCxp3Vg0qofUlVRREWy/gFbVqteiLSWaYSeKLUlu1Kl7BS1oRLLZ90VBUot2zRqH2wWJj7IPg5UXBtlDUnU8m3YSYvcyZOWcvsBkIBPb/v/8/35455//P+VbQ5Y90+fixRMDSDGgRA67Pa8VBDwUXQNAj0ez/PXF4IWboYAbEjBA/McKMCuTzVqTWtFeg4PPCyEEfgFUiGABwWsoBHSaxG8CEE2GyGMiPKf21zK0T4Aa8HcAjELhaGegaEQrAS8qX93VddOysEZAf5dUSYSOAm3QCG9jsoINNpSH50gBj3tWYgN5RnudE2CjA4zYS0sUgsDlysGlqSH7W9allZ0TAFQHXOoIxAOebJGHgeygiBr/2ZVtWjMwEFAJupmBD1sA2/YTYUvQl0wzMRIAbMl6Q8jYHYQGrpDxJvfCmJsANSQvJNg1CeZJqTKmM3ZDxu3Zb07K3A7xdebJWF0qbADfg/RC8pgvcVjviAeXL6zo5aBGQDxhXc5/qAHaKDYnVJV8mkvJJJCDe53MR9gBYlgTWYZ9Plx30J9UJiQTkQz7f6iLHFpFxsVTy5IlGeA0JqJS3k7YSagcOHfQ1KpsbEuCG/KgFtX2zedmhPLm5XpC6BMx2dYL3mp1dS/CJO+p1kfUJ6MxqLytfdavEmgS4I1wO4vus0Rr4HRPBhxGxH2Xsx0n4btb2b1yKHFY4ghUkbgFwsvXYgkvUsBxYjFubgJCPAdhiOYmDQjxc9CXeUus+hYD9FLwM4CLL8TcoT17QJeBjADdYTGCX8iQVnhtyJ4A1FnPYqTy5UZeAIwBOsRT8VeXJQ1mw3JCvAHgwi28Nn6PKk1MTCYhPb5HDZ1aCEnuVL1eZYLkBv4LgShOMed8yrlt82ly1BhQC3kvBGxYCHimX0TcVyD4TrF6fK3M5xMVY1beXFleI+4q+vLnQr4oAN2R8xPV0WvAa9uPKk/iE2PhxQ8YnweuMgYBnlCeDjQkY4XYQt1oINqw8GbWAAzfkEIARYyzBB2pY/neeUesVmKLgctNgIlhTHJb4YsP4KYxwgMQuUyAhvin60pv0CvwB4AzTYCfmcO7koPxqihP7943xnH/K+MUC1p/KkzNbQgBzOLs0KL9bSBr5MZ4lZfxmASuZgEJAK68Ay7i+FIiVU6S8z9WSwyemBOi9ApYWQQJPlTx5zjTp2D8f8kkBnjXG0lkEbW2DIni3OCx3GScNoDDCd0jcaQEreRu0WAgdE2IgqflJGlSlOYp3E+MOUa8QslkKAweVJxcnDbLR527IH6x1hjqlcJyMG/KvDIKGeuNI3QnOAVnuCA8rT05fnGTN84B8wHERaN+uaHzDqTtCy50gSGwr+VJVTtcj4G4RvKUxMH0TYm85wvqk5mi2+XGw1VoHWMmQxD0lX97WmgGxvoc5TOuPTtsyPmeIDzoOiGDfCQ6+jT3/jXAZiZUAllcOYow7v6qBlrGsls6o0alw0brOR5sny4aEUr4UaqEuHYsnbEHdezEyW4IeV35179VYpQ7v3svRmIDK9fgXbVSCZV0RD5UdXGN8PR5Hr8jhxrNm0g6/iFinI59L1AfMJd9JsrgkQtPI5rQJqPQInSiPW8xHKrlcKgIqJHSvTG5Bl9aJcrlU8ri5saSeAfMkdJJsLoUsTqsZSlpk5j6vyOe2tlFBNk1ivY4crt6YMs+AOcCulssvZLVrfzCxeGpVxFWPNkFNXgLxYsf+ZKaKiOM6o1UA+it/aQUXR4FZheoeCCZq6Xt016pGdsZrgG4SXfezOV1i2m3XshnQ7oE2bRvs1IHp5tX1M+A/ChMGX7X0CzgAAAAASUVORK5CYII=);
      }
    }
    .iconimg-checkbox {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAhFJREFUeF7tWzFOw0AQ3PU7QIIWqvjcIIEUHkBJuqQMz0A8A8rQhZIHEAkkGp9TQUsk8g4vsoSlE/LZm8Zs5KHlbM/O7s5cpF2mgf/xwOMnEIAKGDgDaAFNAaRpOieic2a+IKIjzTP/eGYjIq9E9FYUxUMXjs4KcM7lROS6XmT0/957n7VhayXAObckomujwWlhPXnvJ7HDUQKyLJuKyEL7FcvnmHmW5/ljE8YoAX+zLyJ3IrJcr9efloMdjUYnzDxh5tsAZ7QK2gj4JqKD+iXMfJnn+cpy8DW2LMvGIvISYN167w93rQAJH/DedwqmJXKccyr8bRWgeoGloEMsIAAVgBZQtTA0ICZiWhGBCBplQJtAtABaIMKAtoSMdgBp8aMF0AJogWYGtD0EDTDKgDaBEEGIIEQQItjIgFZEjGogboLaBMIF4AJwAbgAXKCJAa2KwgaNMqBNIGwQNggbhA3CBmGDDQxobcSoC+LnsDaBuAfgHoB7QPQe8BVOhpdleWp9SrSOpJoWTZLkI4hs470/boo0qgFpmi6YeVo/VI3KJkmysj4tWk2JlmU5DkdlReSxKIrZrgTMmfneqs3tgktEbmK7A13j8vu8K1Bz1Loz0Dn/u+c7A627AhVDnQRUh353B66I6CycIN+lDHs8uyWid2Z+ju0IhFhUBPQIvvdPgYDeKTf2QVSAsYT0DmfwFfADVpq3UJIktQMAAAAASUVORK5CYII=);
      &.checked {
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAArxJREFUeF7tm82KE0EQx/81PT6Ct0nQZ1gv3rx68ODBFYQVQVgRBWFRkYwfCU4PyCqCoPgBgq6wsB69ePPgwcv6DC7Tc/MRNklJZLOE7EzSY2Y6PU7nkkN6uuv/m6rqItVNaPiHGq4fDoDzgIYTcCGg4wDtsL82BJ0jxmkQAp1nljaGkTLhhwf+kkh/a54dcz0gCAc7BFyYN5GNvzPwOZVidZZtMwG0Ov1dEK3YKE7bJuafKvZP5Y3PBdDu9NeZ6I32QhYPJOZrSey/zTIxF0AQDj4SsGaxLm3TGNhKpbhcCEArHPwCcEJ7FbsH7ikpThYFwHZrKmadkiLT23NDoBUOHIBijO0e7TzAhYDLAS4Jum0wg4DbBvM2L1cHuELIVYJWlcLMw57H/s4oZIfUXyXyHhWpPetdCRIeq0g8HAsO7u+fIfa+NQVArKQIJ8W2H/AKD4e7/z0AIjxJInFvWmjQ2e82IQSeKinulCF+NEe9cgDhuYrERlniawWAgBeJFLfKFF8fAISXKhI3yxZvCsAemHvw+t/B/iZA54tkaQCvlRTXqxBvBMCoUEnjY93DvbpAR4mAd4kU61WJNwIAjNsqFs8mRWi21d4rKa5WKd4MANBXJb2zR4TM9oQPSoorVYs3BOCvjGxBGRCI8CmJxJHO078UOTq5xmQd8EpJcWO2J/C2kv4lE29+vIZJACDCZhKJu5kQmFnF/kWT4k2GwKEuZnTTWPR03LMqt59c26gHjBee3hqzYJgQvxQP0IFgSvxSAYwWz/IEk+KXDmAagmnxVgA4CInfB9/HdZJjmWOWkgTLFLDoXA6Aa4+79rhrj2flEdcdzsuurjvc9IOSjT8q2/jD0qPc0Ojj8uPkqPnP7qKVaiXPL3xhYmxVo6/MVPJqLJp07p0hi2ytxBQHoBKsNZrUeUCNXlYlpv4BQxKeUFzUQ20AAAAASUVORK5CYII=);
      }
    }
  }
  &__popup-content {
    width: 690rpx;
    background-color: #ffffff;
    border-radius: 12rpx;
    padding: $spacing;
    position: relative;
    overflow: hidden;

    .name {
      color: $primary;
      font-size: 36rpx;
      font-weight: 700;
      padding-bottom: 20rpx;
    }
    .cell-content {
      max-height: 700rpx;
      overflow-y: scroll;

      .cell-wrapper {
        background-color: #f5f5f5;
        padding: 20rpx;
        border-radius: 12rpx;
        margin-bottom: 20rpx;
        .cell-title {
          font-size: 32rpx;
          font-weight: 700;
        }
        .cell-text {
          margin-top: 10rpx;
          color: #9b9b9f;
          font-size: 30rpx;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
