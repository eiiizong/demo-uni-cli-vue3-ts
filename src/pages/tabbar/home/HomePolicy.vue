<template>
  <view class="home-policy">
    <ZdbPanel title="政策文件" right-text="查看更多" @click="onClick">
      <div class="items">
        <div v-for="item in navs" :key="item.chi050" class="item">
          <ZdbCardPolicy :render-data="item" />
        </div>
      </div>
    </ZdbPanel>
  </view>
</template>

<script setup lang="ts">
  import ZdbPanel from '@/components/project/zdb-panel/zdb-panel.vue'
  import ZdbCardPolicy from '@/components/project/zdb-card-policy/zdb-card-policy.vue'

  import { ref } from 'vue'
  import { navigateTo } from '@/utils/uni-api'

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

  // 路由跳转
  const onClick = () => {
    navigateTo('policy-list', 'packagePolicy')
  }
</script>

<style lang="scss" scoped>
  .home-policy {
    width: 100%;
    background-color: $color-page;
    padding-bottom: $spacing;
    .items {
      .item {
        margin-bottom: 14rpx;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
