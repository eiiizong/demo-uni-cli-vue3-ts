<template>
  <view class="tab-business-situation">
    <div class="wrapper">
      <ZdbTitle title="73业务" />
      <div class="tip">发放“蓉易贷”贷款金额的排名在10%-20%</div>
      <ZdbTable :render-list="tabelData01" />
      <ZdbTable :render-list="tabelData02" space />
    </div>
    <div class="wrapper">
      <ZdbTitle title="442业务" />
      <ZdbTable :render-list="tabelData03" />
    </div>
  </view>
</template>

<script setup lang="ts">
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'
  import ZdbTable from '@/components/project/zdb-table/zdb-table.vue'
  import { ref, reactive } from 'vue'

  const tabelData01 = ref([
    {
      key: '贷款规模',
      value: '185300',
      unit: '万元'
    },
    {
      key: '投放户数',
      value: '22',
      unit: ''
    },
    {
      key: '户均贷款金额',
      value: '22',
      unit: ''
    },
    {
      key: '贷款利率',
      value: '22',
      unit: ''
    }
  ])
  const tabelData02 = ref([
    {
      key: '“蓉易贷”首贷率',
      value: '185300',
      unit: ''
    },
    {
      key: '白名单贷款户数',
      value: '22',
      unit: ''
    },
    {
      key: '白名单贷款比率',
      value: '22',
      unit: ''
    },
    {
      key: '',
      value: '',
      unit: ''
    }
  ])
  const tabelData03 = ref([
    {
      key: '担保总金额',
      value: '185300',
      unit: ''
    },
    {
      key: '担保费率',
      value: '',
      unit: ''
    }
  ])
</script>

<style lang="scss" scoped>
  .tab-business-situation {
    width: 100%;
    padding: 0 $spacing $spacing;

    .tip {
      font-size: 28rpx;
      color: #ff8800;
      background-color: rgba(234, 153, 59, 0.14);
      border-radius: 4rpx;
      line-height: 40rpx;
      padding: 8rpx 16rpx;
      margin-bottom: 40rpx;
    }
  }
</style>
