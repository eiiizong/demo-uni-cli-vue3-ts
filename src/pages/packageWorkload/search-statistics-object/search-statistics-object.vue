<template>
  <view class="search-statistics-object">
    <QueryCondition v-model="keyword" @confirm="onConfirm" />
    <QueryResult :keyword="keyword" :render-list="customData.queryResult" @show-popup="isShowPopup = true" />

    <div v-if="!keyword" class="button-wrapper">
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

  import { ref, reactive } from 'vue'

  // 是否显示弹窗
  const isShowPopup = ref(false)

  // 搜索关键字
  const keyword = ref('')

  const customData = reactive<any>({
    queryResult: []
  })

  // 选择组织
  const onChangeSelectOrg = (data: any[]) => {
    console.log('data', data)
  }

  // 确定搜索
  const onConfirm = () => {
    console.log(keyword.value)

    setTimeout(() => {
      customData.queryResult = [
        {
          name: '哈哈',
          org: ['四川省', '成都市融资再担保有限责任公司', '创新产品部']
        },
        {
          name: '哈哈2',
          org: ['四川省2', '成都市融资再担保有限责任公司2', '创新产品部2', '创新产品部23']
        }
      ]
    }, 1000)
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
