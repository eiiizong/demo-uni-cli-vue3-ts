<template>
  <view class="home-policy">
    <div class="tabs">
      <div
        v-for="item in tabs"
        :key="item.id"
        class="tab"
        :class="currentTabId === item.id ? 'active' : ''"
        @click="onClickTab(item.id)">
        {{ item.name }}
      </div>
    </div>
    <div class="query-result">
      <div class="items">
        <div v-for="item in navs" :key="item.chi050" class="item">
          <ZdbCardPolicy :render-data="item" />
        </div>
      </div>
      <div class="button-wrapper">
        <YhButton type="primary" block @click="onClickButton">查看更多</YhButton>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'
  import ZdbCardPolicy from '@/components/project/zdb-card-policy/zdb-card-policy.vue'

  import { ref } from 'vue'
  import { navigateTo } from '@/utils/uni-api'

  const currentTabId = ref('0')
  const tabs = ref([
    {
      id: '0',
      name: '业务进展'
    },
    {
      id: '1',
      name: '机构动态'
    },
    {
      id: '2',
      name: '业务聚焦'
    },
    {
      id: '3',
      name: '政策解读'
    }
  ])

  const navs = ref([
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051:
        '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知标准的通知',
      chi052: '2019-03-06',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区'
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051: '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知',
      chi052: '2019-03-06 15:23:11.0',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区'
    },
    {
      chi031: '28',
      chi037: '6',
      chi037_desc: '卫生健康局',
      chi050: '10307',
      chi051: '计生委关于调整全国农村部分计划生育家庭奖励扶助和计划生育家庭特别扶助标准的通知',
      chi052: '2019-03-06 15:23:11.0',
      chi053: '115485',
      chi054: '',
      myrownum: '1',
      yab003: '511011',
      yab003_desc: '东兴区'
    }
  ])

  const onClickTab = (id: string) => {
    currentTabId.value = id

    // navigateTo('policy-list', 'packagePolicy')
  }

  const onClickButton = () => {
    navigateTo('policy-list', 'packagePolicy')
  }
</script>

<style lang="scss" scoped>
  .home-policy {
    width: 100%;
    background-color: $color-page;
    padding-bottom: $spacing;
    padding: 0 $spacing;
    .tabs {
      display: flex;
      align-items: center;

      .tab {
        font-size: 32rpx;
        line-height: 100rpx;
        color: #333;
        margin-right: $spacing;
        transition: all 0.3s;
        &:last-child {
          margin-right: 0;
        }
        &.active {
          color: $color-primary;
          font-weight: 700;
        }
      }
    }
    .query-result {
      .items {
        .item {
          margin-bottom: 14rpx;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .button-wrapper {
        padding: $spacing;
      }
    }
  }
</style>
