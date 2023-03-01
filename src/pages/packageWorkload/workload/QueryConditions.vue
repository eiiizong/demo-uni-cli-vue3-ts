<template>
  <view class="query-condition">
    <div class="input-wrapper">
      <div class="label">起止日期</div>
      <div class="value">
        <picker
          class="picker"
          mode="date"
          :value="workloadQueryInfo.startDate"
          :end="toDay"
          @change="onChangeStartDate">
          <view class="picker-content">
            <div v-if="workloadQueryInfo.startDate" class="picker-value">
              {{ workloadQueryInfo.startDate }}
            </div>
            <div v-else class="picker-placeholder">开始日期</div>
          </view>
        </picker>
        <div class="separate">至</div>
        <picker
          class="picker"
          mode="date"
          :value="workloadQueryInfo.endDate"
          :start="workloadQueryInfo.startDate"
          :end="toDay"
          @change="onChangeEndDate">
          <view class="picker-content">
            <div v-if="workloadQueryInfo.endDate" class="picker-value">{{ workloadQueryInfo.endDate }}</div>
            <div v-else class="picker-placeholder">结束日期</div>
          </view>
        </picker>
      </div>
    </div>
    <div class="input-wrapper">
      <div class="label">统计对象</div>
      <div class="value">
        <div class="input" :class="isLeader ? '' : 'disabled'" @click="onClickSelect">{{ workloadQueryInfo.name }}</div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import { navigateTo } from '@/utils/uni-api'

  import { toRefs, ref, computed } from 'vue'
  import { useStoreWorkloadQueryInfo, useStoreUserInfo } from '@/stores/modules'
  import { getCurrentDate } from '@/utils/get'

  // const props = defineProps({})

  const toDay = ref(getCurrentDate('day'))

  const storeWorkloadQueryInfo = useStoreWorkloadQueryInfo()
  const storeUserInfo = useStoreUserInfo()
  const { workloadQueryInfo } = toRefs(storeWorkloadQueryInfo)
  const { userInfo } = toRefs(storeUserInfo)

  /**
   * 登录人是否为领导角色
   */
  const isLeader = computed(() => {
    let tag = false
    const { role } = userInfo.value
    if (role === '4') {
      tag = true
    }
    return tag
  })

  // 跳转至搜索页
  const onClickSelect = () => {
    if (isLeader.value) {
      navigateTo('search-statistics-object', 'packageWorkload')
    }
  }

  // 改变开始日期
  const onChangeStartDate = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail
    storeWorkloadQueryInfo.updateWorkloadQueryInfo({ startDate: value as string })
  }

  // 改变结束日期
  const onChangeEndDate = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail
    storeWorkloadQueryInfo.updateWorkloadQueryInfo({ endDate: value as string })
  }
</script>

<style lang="scss" scoped>
  .query-condition {
    width: 100%;
    background-color: #fff;
    padding: $spacing;
    .input-wrapper {
      display: flex;
      align-items: center;
      margin-bottom: $spacing;
      font-size: 28rpx;
      color: #404040;
      .label {
        margin-right: 16rpx;
      }
      .value {
        flex: 1;
        overflow: hidden;
        display: flex;
        align-items: center;
        align-items: center;
      }

      .picker,
      .input {
        flex: 1;
        height: 72rpx;
        background-color: transparent;
        border-radius: 4rpx;
        border: solid 1px $color-border;
        font-size: inherit;
        line-height: 68rpx;
        padding: 0 24rpx;
        transition: all 0.3s;
        &.disabled {
          opacity: 0.6;
        }
      }

      .separate {
        padding: 0 16rpx;
      }
      .picker-placeholder {
        color: #7a7a7a;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
