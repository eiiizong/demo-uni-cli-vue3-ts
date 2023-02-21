<template>
  <view class="white-list-query">
    <QueryConditions v-model:model-value="keyword" @confirm="onConfirm" />
    <QueryHistory :render-list="historys" @click="onClickHistoryItem" @detele="onDeleteHistory" />
    <QueryResult v-if="customData.queryResultList.length > 0" />
    <template v-else>
      <ZdbNoData v-if="customData.isRequestOver" />
    </template>
  </view>
</template>

<script setup lang="ts">
  import ZdbNoData from '@/components/project/zdb-no-data/zdb-no-data.vue'

  import QueryConditions from './QueryConditions.vue'
  import QueryHistory from './QueryHistory.vue'
  import QueryResult from './QueryResult.vue'

  import type { W009SuccessResultListItem } from '@/server/types/api'

  import { reactive, ref } from 'vue'
  import { getStorage, removeStorage, setStorage, showToast } from '@/utils/uni-api'
  import { onLoad } from '@dcloudio/uni-app'

  /**
   * 白名单本地储存key
   */
  const WHITE_LIST_STORAGE_KEY = 'WHITE_LIST_STORAGE_KEY'

  /**
   * 搜索关键字
   */
  const keyword = ref('')

  /**
   * 历史搜索记录
   */
  const historys = ref<string[]>([])

  // 自定义数据
  const customData = reactive<{
    /**
     * 查询结果数据
     */
    queryResultList: W009SuccessResultListItem[]
    /**
     * 是否请求完成 控制 no-data 组件在未请求完成时不显示
     */
    isRequestOver: boolean
    /**
     * 数据是否存在多页，不止一页
     */
    isMultiplePages: boolean
    /**
     * 当数据不止一页时是否加载完成
     */
    isLoadOver: boolean
  }>({
    queryResultList: [],
    isRequestOver: false,
    isMultiplePages: false,
    isLoadOver: false
  })

  // 查询数据
  const queryData = () => {
    console.log('queryData')
  }

  // 键盘输入事件
  const onConfirm = () => {
    if (keyword.value) {
      const arr = [...historys.value]
      arr.push(keyword.value)

      const data = [...new Set(arr)]
      historys.value = [...data]
      setStorage(WHITE_LIST_STORAGE_KEY, data)
      queryData()
    }
  }

  // 点击历史搜索记录
  const onClickHistoryItem = (data: string) => {
    keyword.value = data
    queryData()
  }

  // 删除历史搜索记录
  const onDeleteHistory = () => {
    historys.value = []
    removeStorage(WHITE_LIST_STORAGE_KEY).then(() => {
      showToast('删除成功')
    })
  }

  onLoad(() => {
    getStorage(WHITE_LIST_STORAGE_KEY).then((res) => {
      historys.value = res.data
    })
  })
</script>

<style lang="scss" scoped>
  .white-list-query {
    width: 100%;
  }
</style>
