<template>
  <yh-popup
    v-if="poppable"
    :custom-style="getPopupStyle"
    icon-style="top: -10rpx;"
    close-icon="close"
    :show="show"
    :round="round"
    :safe-area-inset-bottom="safeAreaInsetBottom"
    :position="position"
    :closeable="showTitle || showSubtitle"
    :close-on-click-overlay="closeOnClickOverlay"
    @enter="onOpen"
    @close="onClose"
    @after-enter="onOpened"
    @after-leave="onClosed"
  >
    <view class="yh-calendar">
      <calender-header
        :title="title"
        :showTitle="showTitle"
        :subtitle="subtitle"
        :showSubtitle="showSubtitle"
        :firstDayOfWeek="firstDayOfWeek"
        @click-subtitle="onClickSubtitle"
      >
      </calender-header>
      <scroll-view
        class="yh-calendar__body"
        scroll-y
        :scroll-into-view="scrollIntoView"
      >
        <calender-month
          v-for="(item, index) in months"
          :key="index"
          :id="'month' + index"
          class="month"
          ref="monthRef"
          :data-date="item"
          :date="item"
          :type="type"
          :color="color"
          :minDate="minDate"
          :maxDate="maxDate"
          :showMark="showMark"
          :formatter="formatter"
          :rowHeight="rowHeight"
          :currentDate="currentDate"
          :showSubtitle="showSubtitle"
          :allowSameDay="allowSameDay"
          :showMonthTitle="index !== 0 || !showSubtitle"
          :firstDayOfWeek="firstDayOfWeek"
          @click="onClickDay($event, index)"
        />
      </scroll-view>
      <view :class="getCalendaFooterClass">
        <yh-button
          v-if="showConfirm"
          round
          block
          type="danger"
          :color="color"
          :custom-style="getButtonStyle"
          :disabled="getButtonDisabled"
          nativeType="text"
          @click="onConfirm"
        >
          {{ getButtonDisabled ? confirmDisabledText : confirmText }}
        </yh-button>
      </view>
    </view>
  </yh-popup>
  <!-- <view class="yh-calendar" v-else>
    <calender-header
      :title="title"
      :showTitle="showTitle"
      :subtitle="subtitle"
      :showSubtitle="showSubtitle"
      :firstDayOfWeek="firstDayOfWeek"
      @click-subtitle="onClickSubtitle"
    >
    </calender-header>
    <scroll-view
      class="yh-calendar__body"
      scroll-y
      :scroll-into-view="scrollIntoView"
    >
      <calender-month
        v-for="(item, index) in months"
        :key="index"
        :id="'month' + index"
        class="month"
        ref="monthRef"
        :data-date="item"
        :date="item"
        :type="type"
        :color="color"
        :minDate="minDate"
        :maxDate="maxDate"
        :showMark="showMark"
        :formatter="formatter"
        :rowHeight="rowHeight"
        :currentDate="currentDate"
        :showSubtitle="showSubtitle"
        :allowSameDay="allowSameDay"
        :showMonthTitle="index !== 0 || !showSubtitle"
        :firstDayOfWeek="firstDayOfWeek"
        @click="onClickDay($event, index)"
      />
    </scroll-view>
    <view :class="getCalendaFooterClass">
      <yh-button
        v-if="showConfirm"
        round
        block
        type="danger"
        :color="color"
        :custom-style="getButtonStyle"
        :disabled="getButtonDisabled"
        nativeType="text"
        @click="onConfirm"
      >
        {{ getButtonDisabled ? confirmDisabledText : confirmText }}
      </yh-button>
    </view>
  </view> -->

  <yh-toast
    :show="showToast"
    :message="messageToast"
    @close="showToast = false"
  />
</template>

<script setup>
import CalenderHeader from './header.vue'
import CalenderMonth from './month.vue'
import YhButton from '../button/button.vue'
import YhToast from '../toast/toast.vue'
import YhPopup from '../popup/popup.vue'

import {
  computed,
  ref,
  getCurrentInstance,
  onMounted,
  onBeforeMount,
  nextTick,
  watch,
} from 'vue'
import { bem, getSystemInfoSync } from '../common/utils'
import {
  formatMonthTitle,
  getMonths,
  compareMonth,
  getToday,
  compareDay,
  getPrevDay,
  copyDates,
  getDayByOffset,
  calcDateNum,
  getNextDay,
} from './utils'

const _this = getCurrentInstance()

const emit = defineEmits([
  // 点击任意日期时触发
  'select',
  // 当 Calendar 的 type 为 multiple 时,点击已选中的日期时触发
  'unselect',
  // 日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发
  'confirm',
  // 打开弹出层时触发
  'open',
  // 关闭弹出层时触发
  'close',
  // 打开弹出层且动画结束后触发
  'opened',
  // 关闭弹出层且动画结束后触发
  'closed',
  // 范围选择超过最多可选天数时触发
  'over-range',
  // 点击日历副标题时触发
  'click-subtitle',
])

const props = defineProps({
  // 选择类型: single 表示选择单个日期， multiple 表示选择多个日期， range 表示选择日期区间
  type: {
    type: String,
    default: () => 'single',
  },
  // 日历标题
  title: {
    type: String,
    default: () => '日期选择',
  },
  // 主题色，对底部按钮和选中日期生效
  color: {
    type: String,
    default: () => '#ee0a24',
  },
  // 可选择的最小日期 当前日期
  minDate: {
    type: [Date, Number],
  },
  // 可选择的最大日期 当前日期的六个月后
  maxDate: {
    type: [Date, Number],
  },
  // 默认选中的日期，type为 multiple 或 range 时为数组
  defaultDate: {
    type: [Number, Array, Date],
  },
  // 日期行高
  rowHeight: {
    type: [Number, String],
    default: () => 64,
  },
  // 日期格式化函数
  formatter: {
    type: Function,
  },
  // 是否以弹层的形式展示日历
  poppable: {
    type: Boolean,
    default: () => true,
  },
  // 是否显示月份背景水印
  showMark: {
    type: Boolean,
    default: () => true,
  },
  // 是否展示日历标题
  showTitle: {
    type: Boolean,
    default: () => true,
  },
  // 是否展示日历副标题（年月）
  showSubtitle: {
    type: Boolean,
    default: () => true,
  },
  // 是否展示确认按钮
  showConfirm: {
    type: Boolean,
    default: () => true,
  },
  // 确认按钮的文字
  confirmText: {
    type: String,
    default: () => '确认',
  },
  // 确认按钮处于禁用状态时的文字
  confirmDisabledText: {
    type: String,
    default: () => '确认',
  },
  // 设置周起始日 0~6
  firstDayOfWeek: {
    type: Number,
    default: () => 0,
  },
  // 是否为只读状态，只读状态下不能选择日期
  readonly: {
    type: Boolean,
    default: () => false,
  },
  // 当 Calendar 的 poppable 为 true 时，支持以下 props:
  // 是否显示日历弹窗
  show: {
    type: Boolean,
    default: () => false,
  },
  // 弹出位置，可选值为 top right left
  position: {
    type: String,
    default: () => 'bottom',
  },
  // 是否显示圆角弹窗
  round: {
    type: Boolean,
    default: () => true,
  },
  // 是否在点击遮罩层后关闭
  closeOnClickOverlay: {
    type: Boolean,
    default: () => true,
  },
  // 是否开启底部安全区适配
  safeAreaInsetBottom: {
    type: Boolean,
    default: () => true,
  },
  // 当 Calendar 的 type 为 range 时，支持以下 props:
  // 日期区间最多可选天数，默认无限制
  maxRange: {
    type: [Number],
  },
  // 范围选择超过最多可选天数时的提示文案
  rangePrompt: {
    type: [String],
    default: () => '选择天数超过限制',
  },
  // 范围选择超过最多可选天数时，是否展示提示文案
  showRangePrompt: {
    type: Boolean,
    default: () => true,
  },
  // 是否允许日期范围的起止时间为同一天
  allowSameDay: {
    type: Boolean,
    default: () => false,
  },
})

const monthRef = ref(null)
const subtitle = ref('')
const scrollIntoView = ref('')
const contentObserver = ref(null)
const currentDate = ref(null)
const showToast = ref(false)
const messageToast = ref('')

const months = computed(() => {
  const { minDate, maxDate } = props
  let arr = []

  var cursor = new Date(minDate)

  cursor.setDate(1)

  do {
    arr.push(cursor.getTime())
    cursor.setMonth(cursor.getMonth() + 1)
  } while (compareMonth(cursor, new Date(maxDate)) !== 1)

  return arr
})

const getCalendaFooterClass = computed(() => {
  let str = ''
  const { safeAreaInsetBottom } = props

  str = bem('calendar__footer', {
    'safe-area-inset-bottom': false,
  })

  return str
})

const getButtonDisabled = computed(() => {
  const { type } = props
  if (currentDate.value == null) {
    return true
  }

  if (type === 'range') {
    return !currentDate.value[0] || !currentDate.value[1]
  }

  if (type === 'multiple') {
    return !currentDate.value.length
  }

  return !currentDate.value
})

const getButtonStyle = computed(() => {
  let str = `height: var(--calendar-confirm-button-height, 72rpx) !important; `
  str += `margin: var(--calendar-confirm-button-margin, 14rpx 0) !important; `
  str += `line-height: var(--calendar-confirm-button-line-height, 68rpx) !important; `

  return str
})

const getPopupStyle = computed(() => {
  let str = ''
  const { position } = props
  if (position) {
    if (position == 'top' || position == 'bottom') {
      str += `height: var(--calendar-popup-height, 80%); `
    }
    if (position == 'left' || position == 'right') {
      str += `height: 100%; `
    }
  }

  return str
})

const getTime = (date) => (date instanceof Date ? date.getTime() : date)

const requestAnimationFrame = (cb) => {
  const systemInfo = getSystemInfoSync()
  if (systemInfo.platform === 'devtools') {
    return setTimeout(() => {
      cb()
    }, 1000 / 30)
  }
  return wx
    .createSelectorQuery()
    .selectViewport()
    .boundingClientRect()
    .exec(() => {
      cb()
    })
}

const limitDateRange = (date, minDate = null, maxDate = null) => {
  minDate = minDate || props.minDate
  maxDate = maxDate || props.maxDate
  if (compareDay(date, minDate) === -1) {
    return minDate
  }
  if (compareDay(date, maxDate) === 1) {
    return maxDate
  }
  return date
}

const getInitialDate = () => {
  const { type, minDate, maxDate, defaultDate } = props
  let _defaultDate = null
  const now = getToday().getTime()
  if (type === 'range') {
    if (!Array.isArray(defaultDate)) {
      _defaultDate = []
    }
    const [startDay, endDay] = _defaultDate || []
    const start = limitDateRange(
      startDay || now,
      minDate,
      getPrevDay(new Date(maxDate)).getTime()
    )
    const end = limitDateRange(
      endDay || now,
      getNextDay(new Date(minDate)).getTime()
    )
    return [start, end]
  }
  if (type === 'multiple') {
    if (Array.isArray(defaultDate)) {
      return defaultDate.map((date) => limitDateRange(date))
    }
    return [limitDateRange(now)]
  }
  if (!defaultDate || Array.isArray(defaultDate)) {
    _defaultDate = now
  }
  return limitDateRange(_defaultDate)
}

const initRect = () => {
  if (contentObserver.value != null) {
    contentObserver.disconnect()
  }

  contentObserver.value = uni.createIntersectionObserver(_this.proxy, {
    thresholds: [0, 0.1, 0.9, 1],
    observeAll: true,
  })

  contentObserver.value.relativeTo('.yh-calendar__body')
  contentObserver.value.observe('.month', (res) => {
    if (res.boundingClientRect.top <= res.relativeRect.top) {
      subtitle.value = formatMonthTitle(res.dataset.date)
    }
  })
}

const initScrollIntoView = () => {
  requestAnimationFrame(() => {
    const { type, show, poppable, minDate, maxDate } = props
    // @ts-ignore
    const targetDate =
      type === 'single' ? currentDate.value : currentDate.value[0]
    const displayed = show || !poppable
    if (!targetDate || !displayed) {
      return
    }

    const _months = getMonths(minDate, maxDate)

    _months.some((month, index) => {
      if (compareMonth(month, targetDate) === 0) {
        scrollIntoView.value = `month${index}`
        return true
      }

      return false
    })
  })
}

const reset = () => {
  currentDate.value = getInitialDate()
  initScrollIntoView()
}

const onOpen = () => {
  emit('open')
}
const onOpened = () => {
  emit('opened')
}
const onClose = () => {
  emit('close')
}

const onClosed = () => {
  emit('closed')
}

const checkRange = (date) => {
  const { maxRange, rangePrompt, showRangePrompt } = props
  if (maxRange && calcDateNum(date) > maxRange) {
    if (showRangePrompt) {
      showToast.value = true
      messageToast.value = !maxRange
        ? rangePrompt
        : `选择天数不能超过 ${maxRange} 天`
    }
    emit('over-range')
    return false
  }
  return true
}

const _emit = (date) => {
  currentDate.value = Array.isArray(date) ? date.map(getTime) : getTime(date)
  const result = copyDates(date)
  emit('select', result)
}

const unselect = (dateArray) => {
  const date = dateArray[0]
  if (date) {
    emit('unselect', copyDates(date))
  }
}

const select = (date, complete) => {
  const { type, showConfirm, maxRange } = props
  if (complete && type === 'range') {
    const valid = checkRange(date)

    if (!valid) {
      // auto selected to max range if showConfirm
      if (showConfirm) {
        _emit([date[0], getDayByOffset(date[0], maxRange - 1)])
      } else {
        _emit(date)
      }
      return
    }
  }

  _emit(date)

  if (complete && !showConfirm) {
    onConfirm()
  }
}

const onClickDay = (event, i) => {
  const { readonly, type, allowSameDay } = props
  if (readonly) {
    return
  }

  let { date } = event
  if (type === 'range') {
    // @ts-ignore
    const [startDay, endDay] = currentDate.value

    if (startDay && !endDay) {
      const compareToStart = compareDay(date, startDay)

      if (compareToStart === 1) {
        const { days } = monthRef.value[i]
        days.some((day, index) => {
          const isDisabled =
            day.type === 'disabled' &&
            getTime(startDay) < getTime(day.date) &&
            getTime(day.date) < getTime(date)
          if (isDisabled) {
            ;({ date } = days[index - 1])
          }
          return isDisabled
        })
        select([startDay, date], true)
      } else if (compareToStart === -1) {
        select([date, null])
      } else if (allowSameDay) {
        select([date, date])
      }
    } else {
      select([date, null])
    }
  } else if (type === 'multiple') {
    let selectedIndex = 0

    // @ts-ignore
    const selected = currentDate.value.some((dateItem, index) => {
      const equal = compareDay(dateItem, date) === 0
      if (equal) {
        selectedIndex = index
      }
      return equal
    })

    if (selected) {
      // @ts-ignore
      const cancelDate = currentDate.value.splice(selectedIndex, 1)

      // this.setData({ currentDate })
      unselect(cancelDate)
    } else {
      // @ts-ignore
      select([...currentDate.value, date])
    }
  } else {
    select(date, true)
  }
}

const onConfirm = () => {
  const { type } = props
  if (type === 'range' && !checkRange(currentDate.value)) {
    return
  }

  nextTick(() => {
    let result = copyDates(currentDate.value)
    emit('confirm', result)
  })
}

const onClickSubtitle = (event) => {
  emit('click-subtitle', event)
}

onBeforeMount(() => {
  currentDate.value = getInitialDate()
})

onMounted(() => {
  initRect()
  initScrollIntoView()
})

watch(
  () => props.type,
  (val) => {
    if (val) {
      reset()
    }
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.yh-calendar {
  display: flex;
  flex-direction: column;
  height: var(--calendar-height, $calendar-height);
  background-color: var(
    --calendar-background-color,
    $calendar-background-color
  );

  &__body {
    flex: 1;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  &__footer {
    flex-shrink: 0;
    padding: 0 var(--padding-md, $padding-md);

    &--safe-area-inset-bottom {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
    }
  }

  &__footer:empty,
  &__footer + &__footer {
    display: none;
  }

  &__footer:empty + &__footer {
    display: block !important;
  }
}
</style>
