<template>
  <view class="tab-subsidies">
    <ZdbTable :render-list="tabelData" />
    <ZdbTitle title="补贴申报记录" />
    <div class="card-wrapper">
      <div v-for="item in [{}]" class="item">
        <ZdbCardApply :render-data="item" />
      </div>
    </div>
    s
  </view>
</template>

<script setup lang="ts">
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'
  import ZdbTable from '@/components/project/zdb-table/zdb-table.vue'
  import ZdbCardApply from '@/components/project/zdb-card-apply/zdb-card-apply.vue'

  import { ref, reactive } from 'vue'

  const tabelData = ref([
    {
      key: '补贴金额',
      value: '185300',
      unit: '万元'
    },
    {
      key: '已发放补贴金额',
      value: '22',
      unit: '万元'
    },
    {
      key: '补贴次数',
      value: '22',
      unit: '次'
    },
    {
      key: '',
      value: '',
      unit: ''
    }
  ])
</script>

<style lang="scss" scoped>
  .tab-subsidies {
    width: 100%;
    padding: $spacing;
  }
</style>
