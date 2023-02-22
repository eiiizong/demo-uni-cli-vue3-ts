<template>
  <view class="white-list-query">
    <QueryConditions v-model:model-value="queryInfo.keyword" @confirm="onConfirm" />
    <QueryHistory v-if="isShowHistory" :render-list="historys" @click="onClickHistoryItem" @detele="onDeleteHistory" />
    <QueryResult
      :render-list="customData.queryResultList"
      :is-request-over="customData.isRequestOver"
      :is-multiple-pages="customData.isMultiplePages"
      :is-load-over="customData.isLoadOver"
      @load-more="loadMoreData" />
  </view>
</template>

<script setup lang="ts">
  import QueryConditions from './QueryConditions.vue'
  import QueryHistory from './QueryHistory.vue'
  import QueryResult from './QueryResult.vue'

  import type { W011SuccessResultListItem } from '@/server/types/api'

  import { reactive, ref } from 'vue'
  import { getStorage, removeStorage, setStorage, showToast } from '@/utils/uni-api'
  import { onLoad, onReachBottom } from '@dcloudio/uni-app'
  import { requestW011 } from '@/server/api'

  /**
   * 白名单本地储存key
   */
  const WHITE_LIST_STORAGE_KEY = 'WHITE_LIST_STORAGE_KEY'

  /**
   * 是否显示搜索历史模块
   */
  const isShowHistory = ref(true)

  // 查询条件
  const queryInfo = reactive({
    /**
     * 当前页数
     */
    pageNo: 1,
    /**
     * 每页请求条数
     */
    pageSize: 10,
    /**
     * 搜索关键字
     */
    keyword: ''
  })

  /**
   * 历史搜索记录
   */
  const historys = ref<string[]>([])

  // 自定义数据
  const customData = reactive<{
    /**
     * 查询结果数据
     */
    queryResultList: W011SuccessResultListItem[]
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
    queryResultList: [
      {
        chb015: '成华区',
        crb11b: '已准入',
        crb11l: 1638460800000,
        crb110: 1017537,
        crb111: '成都钦川物流有限公司',
        crb116: '交通运输业',
        crb118: '小型企业'
      }
    ],
    isRequestOver: false,
    isMultiplePages: false,
    isLoadOver: false
  })

  /**
   * 重新查询数据时重置状态
   */
  const initData = () => {
    queryInfo.pageNo = 1
    queryInfo.pageSize = 10
    customData.queryResultList = []
    customData.isRequestOver = false
    customData.isMultiplePages = false
    customData.isLoadOver = false
  }

  // 处理请求返还分页的数据 判定是否还有下一页以及请求是否完成
  const formatPagingData = (data: any[], pages: number) => {
    const { pageNo } = queryInfo

    if (pages > 1) {
      customData.isMultiplePages = true
    } else {
      customData.isMultiplePages = false
    }

    // 请求完成 暂无其他数据
    if (pageNo >= pages) {
      customData.isLoadOver = true
    } else {
      customData.isLoadOver = false
    }

    customData.queryResultList = [...customData.queryResultList, ...data]
  }

  // 查询数据
  const queryData = () => {
    const { keyword, pageNo, pageSize } = queryInfo
    requestW011(keyword, pageNo, pageSize)
      .then((res) => {
        const { list, pages } = res.pageBean
        formatPagingData(list, pages)
      })
      .finally(() => {
        customData.isRequestOver = true
      })
  }

  // 键盘输入事件
  const onConfirm = () => {
    const { keyword } = queryInfo
    if (keyword) {
      const arr = [...historys.value]
      arr.push(keyword)

      const data = [...new Set(arr)]
      historys.value = [...data]
      isShowHistory.value = false
      setStorage(WHITE_LIST_STORAGE_KEY, data)
      initData()
      queryData()
    }
  }

  // 点击历史搜索记录
  const onClickHistoryItem = (data: string) => {
    queryInfo.keyword = data
    isShowHistory.value = false
    initData()
    queryData()
  }

  // 删除历史搜索记录
  const onDeleteHistory = () => {
    historys.value = []
    removeStorage(WHITE_LIST_STORAGE_KEY).then(() => {
      showToast('删除成功')
    })
  }

  /**
   * 加载更多数据
   */
  const loadMoreData = () => {
    queryInfo.pageNo++
    queryData()
  }

  // 页面加载完成
  onLoad(() => {
    getStorage(WHITE_LIST_STORAGE_KEY).then((res) => {
      historys.value = res.data
    })
  })

  // 页面上拉触底事件的处理函数 上拉加载更多
  onReachBottom(() => {
    if (!customData.isLoadOver) {
      loadMoreData()
    }
  })
</script>

<style lang="scss" scoped>
  .white-list-query {
    width: 100%;
    .load-more-wrapper {
      padding: $spacing;
    }
  }
</style>
