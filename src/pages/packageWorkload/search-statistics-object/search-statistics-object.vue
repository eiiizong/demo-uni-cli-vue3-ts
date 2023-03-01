<template>
  <view class="search-statistics-object">
    <QueryCondition v-model="keyword" @confirm="onConfirm" @focus="isShowCurrentObject = false" />
    <template v-if="isShowCurrentObject">
      <QueryResult :render-list="customData.queryResultList" :is-request-over="customData.isRequestOver" />
    </template>

    <template v-else>
      <CurrentObject :current-object="currentObject" @show-popup="isShowPopup = true" />
      <div v-if="isShowCurrentObject" class="button-wrapper">
        <YhButton type="primary" block @click="onClickButton">确定</YhButton>
      </div>
    </template>

    <ZdbSelectOrg v-model="isShowPopup" @change="onChangeSelectOrg" />
  </view>
</template>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'
  import ZdbSelectOrg from '@/components/project/zdb-select-org/zdb-select-org.vue'

  import QueryCondition from './QueryCondition.vue'
  import QueryResult from './QueryResult.vue'
  import CurrentObject from './CurrentObject.vue'

  import type { W014SuccessResultListItem } from '@/server/types/api'

  import { ref, reactive, computed, toRefs } from 'vue'
  // import { onLoad } from '@dcloudio/uni-app'
  import { useStoreWorkloadQueryInfo } from '@/stores/modules'
  import { navigateBack } from '@/utils/uni-api'
  import { requestW014 } from '@/server/api'

  const storeWorkloadQueryInfo = useStoreWorkloadQueryInfo()

  const { workloadQueryInfo } = toRefs(storeWorkloadQueryInfo)

  /**
   * 是否显示弹窗
   */
  const isShowPopup = ref(false)

  /**
   * 是否显示当前统计对象
   */
  const isShowCurrentObject = ref(false)

  /**
   * 搜索关键字
   */
  const keyword = ref('')

  // 自定义数据
  const customData = reactive<{
    /**
     * 查询结果数据
     */
    queryResultList: W014SuccessResultListItem[]
    /**
     * 是否请求完成 控制 no-data 组件在未请求完成时不显示
     */
    isRequestOver: boolean
  }>({
    queryResultList: [],
    isRequestOver: false
  })

  /**
   * 是否显示当前统计对象
   */
  const currentObject = computed(() => {
    let obj = {}
    const data = workloadQueryInfo.value
    obj = {
      ...data,
      org: data.orgnampath?.split('/')
    }
    return obj
  })

  // 选择组织
  const onChangeSelectOrg = (data: any[]) => {
    console.log('data', data)
  }

  // 确定搜索
  const onConfirm = () => {
    const name = keyword.value
    requestW014(name)
      .then((res) => {
        customData.queryResultList = [...res]
      })
      .finally(() => {
        customData.isRequestOver = true
      })
  }

  const onClickButton = () => {
    navigateBack()
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
