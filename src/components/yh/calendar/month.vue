<template>
  <view class="yh-calendar yh-calendar__month" :style="getMonthStyle">
    <view v-if="showMonthTitle" class="yh-calendar__month-title">
      {{ formatMonthTitle }}
    </view>

    <view v-if="visible" class="yh-calendar__days">
      <view v-if="showMark" class="yh-calendar__month-mark">
        {{ getMark }}
      </view>

      <view
        v-for="(item, index) in days"
        :key="index"
        :data-index="index"
        :style="getDayStyle(item.type, index)"
        :class="getDayClass(item.type)"
        @click="onClick"
      >
        <view v-if="item.type === 'selected'" class="yh-calendar__selected-day">
          <view v-if="item.topInfo" class="yh-calendar__top-info">{{
            item.topInfo
          }}</view>
          {{ item.text }}
          <view v-if="item.bottomInfo" class="yh-calendar__bottom-info">
            {{ item.bottomInfo }}
          </view>
        </view>

        <view v-else>
          <view v-if="item.topInfo" class="yh-calendar__top-info">{{
            item.topInfo
          }}</view>
          {{ item.text }}
          <view v-if="item.bottomInfo" class="yh-calendar__bottom-info">
            {{ item.bottomInfo }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed, ref } from 'vue'
import { getMonthEndDay, compareDay, getPrevDay, getNextDay } from './utils'
import { bem } from '../common/utils'

const emit = defineEmits(['click', 'click-subtitle'])

const props = defineProps({
  date: {
    type: [Date, Number],
  },
  rowHeight: {
    type: [Number, String],
  },
  showMark: Boolean,
  showMonthTitle: Boolean,
  formatter: {
    type: Function,
  },
  minDate: {
    type: [Date, Number],
  },
  maxDate: {
    type: [Date, Number],
  },

  type: {
    type: String,
  },
  color: String,

  currentDate: {
    type: [Array, Date, Number],
  },
  firstDayOfWeek: {
    type: Number,
  },
  allowSameDay: Boolean,
})

const visible = ref(true)

const formatMonthTitle = computed(() => {
  const { date } = props
  let _date = new Date(date)
  return _date.getFullYear() + '年' + (_date.getMonth() + 1) + '月'
})

const getMark = computed(() => {
  const { date } = props
  let _date = new Date(date)
  return _date.getMonth() + 1
})

const getMultipleDayType = (day) => {
  const { currentDate } = props
  if (!Array.isArray(currentDate)) {
    return ''
  }

  const isSelected = (date) =>
    currentDate.some((item) => compareDay(item, date) === 0)

  if (isSelected(day)) {
    const prevDay = getPrevDay(day)
    const nextDay = getNextDay(day)
    const prevSelected = isSelected(prevDay)
    const nextSelected = isSelected(nextDay)

    if (prevSelected && nextSelected) {
      return 'multiple-middle'
    }

    if (prevSelected) {
      return 'end'
    }

    return nextSelected ? 'start' : 'multiple-selected'
  }

  return ''
}
const getRangeDayType = (day) => {
  const { currentDate, allowSameDay } = props
  if (!Array.isArray(currentDate)) {
    return ''
  }

  const [startDay, endDay] = currentDate

  if (!startDay) {
    return ''
  }

  const compareToStart = compareDay(day, startDay)

  if (!endDay) {
    return compareToStart === 0 ? 'start' : ''
  }

  const compareToEnd = compareDay(day, endDay)

  if (compareToStart === 0 && compareToEnd === 0 && allowSameDay) {
    return 'start-end'
  }

  if (compareToStart === 0) {
    return 'start'
  }

  if (compareToEnd === 0) {
    return 'end'
  }

  if (compareToStart > 0 && compareToEnd < 0) {
    return 'middle'
  }

  return ''
}

const getBottomInfo = (type) => {
  const { type: _type } = props
  if (_type === 'range') {
    if (type === 'start') {
      return '开始'
    }
    if (type === 'end') {
      return '结束'
    }
    if (type === 'start-end') {
      return '开始/结束'
    }
  }
}

const getDayType = (day) => {
  const { type, minDate, maxDate, currentDate } = props

  if (compareDay(day, minDate) < 0 || compareDay(day, maxDate) > 0) {
    return 'disabled'
  }

  if (type === 'single') {
    return compareDay(day, currentDate) === 0 ? 'selected' : ''
  }

  if (type === 'multiple') {
    return getMultipleDayType(day)
  }

  /* istanbul ignore else */
  if (type === 'range') {
    return getRangeDayType(day)
  }

  return ''
}
const days = computed(() => {
  let arr = []
  const { date, formatter } = props
  const startDate = new Date(date)
  const year = startDate.getFullYear()
  const month = startDate.getMonth()

  const totalDay = getMonthEndDay(year, month + 1)

  for (let day = 1; day <= totalDay; day++) {
    const _date = new Date(year, month, day)
    const type = getDayType(_date)

    let config = {
      date: _date,
      type,
      text: day,
      bottomInfo: getBottomInfo(type),
    }

    if (formatter) {
      config = formatter(config)
    }

    arr.push(config)
  }
  return arr
})

const getDayStyle = (type, index) => {
  const ROW_HEIGHT = 64
  const { date, rowHeight, color, firstDayOfWeek } = props

  var style = []
  var current = new Date(date).getDay() || 7
  var offset =
    current < firstDayOfWeek
      ? 7 - firstDayOfWeek + current
      : current === 7 && firstDayOfWeek === 0
      ? 0
      : current - firstDayOfWeek

  if (index === 0) {
    style.push(['margin-left', (100 * offset) / 7 + '%'])
  }

  if (rowHeight !== ROW_HEIGHT) {
    style.push(['height', rowHeight + 'px'])
  }

  if (color) {
    if (
      type === 'start' ||
      type === 'end' ||
      type === 'start-end' ||
      type === 'multiple-selected' ||
      type === 'multiple-middle'
    ) {
      style.push(['background', color])
    } else if (type === 'middle') {
      style.push(['color', color])
    }
  }

  return style
    .map(function (item) {
      return item.join(':')
    })
    .join(';')
}

const getDayClass = (type) => {
  let str = ''
  str = bem('calendar__day', [type])
  return str
}
const getMonthStyle = computed(() => {
  let str = ''
  const { date, rowHeight } = props
  if (!visible.value) {
    let _date = new Date(date)

    var totalDay = getMonthEndDay(_date.getFullYear(), _date.getMonth() + 1)
    var offset = new Date(date).getDay()
    var padding = Math.ceil((totalDay + offset) / 7) * rowHeight

    str = 'padding-bottom:' + padding + 'px'
  }
  return str
})

const onClick = (event) => {
  const { index } = event.currentTarget.dataset
  const item = days.value[index]
  if (item.type !== 'disabled') {
    emit('click', item)
  }
}

defineExpose({
  days,
})
</script>

<style lang="scss" scoped>
.yh-calendar {
  &__month-title {
    text-align: center;
    height: var(--calendar-header-title-height, $calendar-header-title-height);
    font-weight: var(--font-weight-bold, $font-weight-bold);
    font-size: var(
      --calendar-month-title-font-size,
      $calendar-month-title-font-size
    );
    line-height: var(
      --calendar-header-title-height,
      $calendar-header-title-height
    );
  }

  &__days {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    user-select: none;
  }

  &__month-mark {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    pointer-events: none;
    color: var(--calendar-month-mark-color, $calendar-month-mark-color);
    font-size: var(
      --calendar-month-mark-font-size,
      $calendar-month-mark-font-size
    );
  }

  &__day,
  &__selected-day {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  &__day {
    position: relative;
    width: 14.285%;
    height: var(--calendar-day-height, $calendar-day-height);
    font-size: var(--calendar-day-font-size, $calendar-day-font-size);

    &--end,
    &--start,
    &--start-end,
    &--multiple-middle,
    &--multiple-selected {
      color: var(--calendar-range-edge-color, $calendar-range-edge-color);
      background-color: var(
        --calendar-range-edge-background-color,
        $calendar-range-edge-background-color
      );
    }

    &--start {
      border-radius: $border-radius-md 0 0 $border-radius-md;
    }

    &--end {
      border-radius: 0 $border-radius-md $border-radius-md 0;
    }

    &--start-end,
    &--multiple-selected {
      border-radius: $border-radius-md;
    }

    &--middle {
      color: var(--calendar-range-middle-color, $calendar-range-middle-color);

      &::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        content: '';
        opacity: var(
          --calendar-range-middle-background-opacity,
          $calendar-range-middle-background-opacity
        );
      }
    }

    &--disabled {
      cursor: default;
      color: var(--calendar-day-disabled-color, $calendar-day-disabled-color);
    }
  }

  &__top-info,
  &__bottom-info {
    position: absolute;
    right: 0;
    left: 0;
    font-size: var(--calendar-info-font-size, $calendar-info-font-size);
    line-height: var(--calendar-info-line-height, $calendar-info-line-height);

    @media (max-width: 350px) {
      font-size: 9px;
    }
  }

  &__top-info {
    top: 6px;
  }

  &__bottom-info {
    bottom: 6px;
  }

  &__selected-day {
    width: var(--calendar-selected-day-size, $calendar-selected-day-size);
    height: var(--calendar-selected-day-size, $calendar-selected-day-size);
    color: var(--calendar-selected-day-color, $calendar-selected-day-color);
    background-color: var(
      --calendar-selected-day-background-color,
      $calendar-selected-day-background-color
    );
    border-radius: $border-radius-md;
  }
}
</style>
