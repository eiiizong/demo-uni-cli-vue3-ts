<template>
  <view class="instiution-list">
    <div v-for="item in renderList" :key="item.id" class="list" :class="currentTabs.includes(item.id) ? 'active' : ''">
      <div class="toolbar" @click="onClick(item.id)">
        <div class="left">
          <span>{{ item.name }}</span>
          <span>（{{ item.childList ? item.childList.length : '0' }}）</span>
        </div>
        <YhIcon name="arrow-down" class="icon" size="24rpx" />
      </div>

      <div v-show="currentTabs.includes(item.id)" class="list-content">
        <div
          v-for="itemList in item.childList"
          :key="itemList.id"
          class="list-content-item"
          @click.stop="onClickChild(itemList.id)">
          {{ itemList.name }}
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhIcon from '@/components/yh/icon/icon.vue'

  import type { GetCooperSuccessResultListItem } from '@/server/types/api'
  import type { PropType } from 'vue'

  import { ref, toRefs } from 'vue'
  import { navigateTo } from '@/utils/uni-api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    renderList: {
      type: Array as PropType<GetCooperSuccessResultListItem[]>,
      required: true
    }
  })

  const currentTabs = ref<string[]>([])

  const onClick = (id: string) => {
    const index = currentTabs.value.indexOf(id)
    if (index > -1) {
      currentTabs.value.splice(index, 1)
    } else {
      currentTabs.value.push(id)
    }
  }

  const onClickChild = (id: string) => {
    // 领导可以点击查看详情
    if (userInfo.value.role === '4') {
      navigateTo('org-details', 'packageOrg', { id })
    }
  }
</script>

<style lang="scss" scoped>
  .instiution-list {
    width: 100%;
    font-size: 32rpx;
    color: #202429;

    .list {
      background-color: #ffffff;
      margin-bottom: 16rpx;
      padding: 0 $spacing;
      .toolbar {
        width: 100%;
        height: 110rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 44rxp;
        transition: all 0.3s;
        font-weight: 500;
        .left {
          flex: 1;
          overflow: hidden;
          padding-right: $spacing;
        }
        .icon {
          color: #565f6e;
          transition: all 0.3s;
        }
      }
      .list-content {
        border-top: 1px solid $color-border;
        padding: 28rpx 0;
        .list-content-item {
          margin-bottom: 22rpx;
          background-color: #e2f2ff;
          border-radius: 8rpx;
          line-height: 88rpx;
          padding: 24rpx;
          line-height: 40rpx;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      &.active {
        .toolbar {
          color: $primary;
        }
        .icon {
          transform: rotate(180deg);
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
