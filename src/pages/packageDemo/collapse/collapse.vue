<template>
  <div class="demo-calendar">
    <demo-block title="基础用法">
      <YhCollapse></YhCollapse>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'

import YhCollapse from '@/components/yh/collapse/collapse.vue'

import { ref, reactive, computed } from 'vue'

const data = reactive({
  maxRange: [],
  selectSingle: null,
  selectRange: [],
  selectMultiple: [],
  quickSelect1: null,
  quickSelect2: [],
  customColor: [],
  customConfirm: [],
  customRange: null,
  customDayText: [],
  customPosition: null,
})

const calendarProps = reactive({
  type: 'single',
  round: true,
  color: '',
  minDate: Date.now(),
  maxDate: new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 6,
    new Date().getDate()
  ).getTime(),
  maxRange: undefined,
  position: 'bottom',
  formatter: undefined,
  showConfirm: true,
  showCalendar: false,
  tiledMinDate: new Date(2012, 0, 10).getTime(),
  tiledMaxDate: new Date(2012, 2, 20).getTime(),
  confirmText: '确定',
  confirmDisabledText: '确定',
  firstDayOfWeek: 1,
})

const formatDate = (date) => {
  if (date) {
    date = new Date(date)
    let month = date.getMonth() + 1
    if (month < 10) {
      month = '0' + month
    }
    return month + '/' + date.getDate()
  }
}

const formatFullDate = (date) => {
  if (date) {
    date = new Date(date)
    return date.getFullYear() + '/' + formatDate(date)
  }
}

const formatMultiple = (dates) => {
  if (dates.length) {
    return '选择了 ' + dates.length + '个日期'
  }
}

const formatRange = (dateRange) => {
  if (dateRange.length) {
    return formatDate(dateRange[0]) + ' - ' + formatDate(dateRange[1])
  }
}

const onConfirm = (event) => {
  calendarProps.showCalendar = false

  data[calendarProps.id] = Array.isArray(event)
    ? event.map((date) => date.valueOf())
    : event.valueOf()
}

const onSelect = (event) => {
  console.log(event)
}

const onUnselect = (event) => {
  console.log(event)
}

const onClose = () => {
  calendarProps.showCalendar = false
}

const onOpen = () => {
  console.log('open')
}

const onOpened = () => {
  console.log('opened')
}

const onClosed = () => {
  console.log('closed')
}

const resetSettings = () => {
  calendarProps.round = true
  calendarProps.color = ''
  calendarProps.minDate = Date.now()
  calendarProps.maxDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth() + 6,
    new Date().getDate()
  ).getTime()
  calendarProps.maxRange = undefined
  calendarProps.position = 'bottom'
  calendarProps.formatter = undefined
  calendarProps.confirmText = '确定'
  calendarProps.confirmDisabledText = '确定'
}
const dayFormatter = (day) => {
  const month = day.date.getMonth() + 1
  const date = day.date.getDate()

  if (month === 5) {
    if (date === 1) {
      day.topInfo = '劳动节'
    } else if (date === 4) {
      day.topInfo = '五四青年节'
    } else if (date === 11) {
      day.text = '今天'
    }
  }

  if (day.type === 'start') {
    day.bottomInfo = '入店'
  } else if (day.type === 'end') {
    day.bottomInfo = '离店'
  }

  return day
}
const show = (event) => {
  resetSettings()
  const { type, id } = event.currentTarget.dataset

  calendarProps.id = id
  calendarProps.type = type
  calendarProps.showCalendar = true

  switch (id) {
    case 'quickSelect1':
    case 'quickSelect2':
      calendarProps.showConfirm = false
      break
    case 'customColor':
      calendarProps.color = '#07c160'
      break
    case 'customConfirm':
      calendarProps.confirmText = '完成'
      calendarProps.confirmDisabledText = '请选择结束时间'
      break
    case 'customRange':
      calendarProps.minDate = new Date(2010, 0, 1).getTime()
      calendarProps.maxDate = new Date(2010, 0, 31).getTime()
      break
    case 'customDayText':
      calendarProps.minDate = new Date(2010, 4, 1).getTime()
      calendarProps.maxDate = new Date(2010, 4, 31).getTime()
      calendarProps.formatter = dayFormatter
      break
    case 'customPosition':
      calendarProps.round = false
      calendarProps.position = 'right'
      break
    case 'maxRange':
      calendarProps.maxRange = 3
      break
  }
}
</script>

<style lang="scss" scoped>
.demo-calendar {
  width: 100%;
  background: #f7f8fa;
}
.cells {
  background-color: #fff;
  font-size: 28rpx;
  padding: 0 30rpx;
  .cell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: 48rpx;
    padding: 20rpx 0;
    border-bottom: 1px solid #ebedf0;
    &:last-child {
      border-bottom: 0;
    }
    .value {
      flex: 1;
      text-align: right;
      padding: 0 10rpx;
      color: #666;
    }
  }
}
.tiled-calendar {
  --calendar-height: 500px;
}
</style>
