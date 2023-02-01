<template>
  <view class="tab-compensation">
    <ZdbTable :render-list="tabelData" />
    <ZdbTitle title="补偿申报记录" />
    <div class="card-wrapper">
      <div v-for="item in [{ id: '1' }]" :key="item.id" class="item">
        <ZdbCardApply :render-data="item" />
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'
  import ZdbTable from '@/components/project/zdb-table/zdb-table.vue'
  import ZdbCardApply from '@/components/project/zdb-card-apply/zdb-card-apply.vue'

  import { ref } from 'vue'

  const tabelData = ref([
    {
      key: '补偿金额',
      value: '185300',
      unit: '万元'
    },
    {
      key: '已发放补偿金额',
      value: '22',
      unit: '万元'
    },
    {
      key: '补偿次数',
      value: '22',
      unit: '次'
    },
    {
      key: '风险补偿率',
      value: '2',
      unit: '%'
    }
  ])
</script>

<style lang="scss" scoped>
  .tab-compensation {
    width: 100%;
    padding: $spacing;
  }
</style>
