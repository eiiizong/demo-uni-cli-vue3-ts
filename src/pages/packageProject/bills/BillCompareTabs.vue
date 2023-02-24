<template>
  <view class="bill-compare-tabs">
    <div
      v-for="item in tabs"
      :key="item.id"
      class="tab"
      :class="currentTabId === item.id ? 'active' : ''"
      @click="onClickTab(item.id)">
      {{ item.name }}
    </div>
    <div class="line" :style="lineStyle"></div>
  </view>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'

  const emit = defineEmits(['click'])
  const props = defineProps({
    /**
     * 当前tabID
     */
    currentTabId: {
      type: String,
      required: true
    }
  })

  const tabs = ref([
    {
      id: '0',
      name: '当月'
    },
    {
      id: '1',
      name: '当季度'
    },
    {
      id: '2',
      name: '当年'
    },
    {
      id: '3',
      name: '累计'
    }
  ])

  const lineStyle = computed(() => {
    let str = ''
    const { currentTabId } = props
    const val = Number(currentTabId) * 0.25 * 750 + ((0.25 * 750) / 2 - 40)
    str += `left: ${val}rpx`
    return str
  })

  const onClickTab = (id: string) => {
    emit('click', id)
  }
</script>

<style lang="scss" scoped>
  .bill-compare-tabs {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $color-border;
    position: relative;
    .tab {
      width: 25%;
      font-size: 32rpx;
      line-height: 100rpx;
      color: #333;
      transition: all 0.3s;
      text-align: center;
      &.active {
        color: $color-primary;
        font-weight: 700;
      }
    }
    .line {
      width: 80rpx;
      height: 6rpx;
      border-radius: 4px;
      position: absolute;
      left: 0;
      bottom: -2rpx;
      transition: all 0.3s;
      background-color: $color-primary;
    }
  }
</style>
