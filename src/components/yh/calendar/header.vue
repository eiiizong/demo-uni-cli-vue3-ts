<template>
  <view class="yh-calendar__header">
    <block v-if="showTitle">
      <view class="yh-calendar__header-title">{{ title }}</view>
    </block>

    <view
      v-if="showSubtitle"
      class="yh-calendar__header-subtitle"
      @click="onClickSubtitle"
    >
      {{ subtitle }}
    </view>

    <view class="yh-calendar__weekdays">
      <view
        v-for="(item, index) in weekdays"
        :key="index"
        class="yh-calendar__weekday"
      >
        {{ item }}
      </view>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue'

const emit = defineEmits(['click-subtitle'])

const props = defineProps({
  title: {
    type: String,
    default: () => '日期选择',
  },
  subtitle: String,
  showTitle: Boolean,
  showSubtitle: Boolean,
  // 设置周起始日 0~6
  firstDayOfWeek: {
    type: Number,
    default: () => 0,
  },
})

const weekdays = computed(() => {
  let arr = []
  const defaultWeeks = ['日', '一', '二', '三', '四', '五', '六']

  const { firstDayOfWeek } = props
  const _firstDayOfWeek = firstDayOfWeek || 0
  arr = [
    ...defaultWeeks.slice(_firstDayOfWeek, 7),
    ...defaultWeeks.slice(0, _firstDayOfWeek),
  ]
  return arr
})

const onClickSubtitle = (event) => {
  emit('click-subtitle', event)
}
</script>

<style lang="scss" scoped>
.yh-calendar {
  &__header {
    flex-shrink: 0;
    box-shadow: var(--calendar-header-box-shadow, $calendar-header-box-shadow);
  }

  &__header-title,
  &__header-subtitle {
    text-align: center;
    height: var(--calendar-header-title-height, $calendar-header-title-height);
    font-weight: var(--font-weight-bold, $font-weight-bold);
    line-height: var(
      --calendar-header-title-height,
      $calendar-header-title-height
    );
  }

  &__header-title:empty,
  &__header-title + &__header-title {
    display: none;
  }

  &__header-title:empty + &__header-title {
    display: block !important;
  }

  &__weekdays {
    display: flex;
  }

  &__weekday {
    flex: 1;
    text-align: center;
    font-size: var(--calendar-weekdays-font-size, $calendar-weekdays-font-size);
    line-height: var(--calendar-weekdays-height, $calendar-weekdays-height);
  }
}
</style>
