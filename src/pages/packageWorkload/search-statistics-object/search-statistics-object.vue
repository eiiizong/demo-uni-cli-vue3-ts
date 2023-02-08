<template>
  <view class="search-statistics-object">
    <QueryCondition />
    <QueryResult @show-popup="isShowPopup = true" />

    <div class="button-wrapper">
      <YhButton type="primary" block>确定</YhButton>
    </div>
    <ZdbSelectOrg v-model="isShowPopup" @change="onChangeSelectOrg" />
  </view>
</template>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'
  import ZdbSelectOrg from '@/components/project/zdb-select-org/zdb-select-org.vue'

  import QueryCondition from './QueryCondition.vue'
  import QueryResult from './QueryResult.vue'

  import { ref } from 'vue'

  const isShowPopup = ref(false)

  const onChangeSelectOrg = (data: any[]) => {
    console.log('data', data)
  }
</script>

<style lang="scss" scoped>
  .search-statistics-object {
    width: 100%;
    .button-wrapper {
      padding: $spacing;
    }
  }
</style>
