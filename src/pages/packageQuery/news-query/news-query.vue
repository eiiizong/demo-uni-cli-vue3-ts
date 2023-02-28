<template>
  <view class="news-query">
    <QueryResult
      :render-list="customData.queryResultList"
      :is-request-over="customData.isRequestOver"
      :is-multiple-pages="customData.isMultiplePages"
      :is-load-over="customData.isLoadOver"
      @load-more="loadMoreData" />
  </view>
</template>

<script setup lang="ts">
  import QueryResult from './QueryResult.vue'

  import type { W017SuccessResultListItem } from '@/server/types/api'

  import { reactive } from 'vue'
  import { setNavigationBarTitle } from '@/utils/uni-api'
  import { onLoad, onReachBottom } from '@dcloudio/uni-app'
  import { requestW018, requestW019, requestW020, requestW021 } from '@/server/api'

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

    queryId: ''
  })

  // 自定义数据
  const customData = reactive<{
    /**
     * 查询结果数据
     */
    queryResultList: W017SuccessResultListItem[]
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
    const { queryId, pageNo, pageSize } = queryInfo

    if (queryId === '0') {
      requestW018(pageNo, pageSize)
        .then((res) => {
          const { list, pages } = res.pageBean
          formatPagingData(list, pages)
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }

    if (queryId === '1') {
      requestW019(pageNo, pageSize)
        .then((res) => {
          const { list, pages } = res.pageBean
          formatPagingData(list, pages)
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }

    if (queryId === '2') {
      requestW020(pageNo, pageSize)
        .then((res) => {
          const { list, pages } = res.pageBean
          formatPagingData(list, pages)
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }
    if (queryId === '3') {
      requestW021(pageNo, pageSize)
        .then((res) => {
          const { list, pages } = res.pageBean
          formatPagingData(list, pages)
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }
  }

  /**
   * 加载更多数据
   */
  const loadMoreData = () => {
    queryInfo.pageNo++
    queryData()
  }

  // 页面加载完成
  onLoad((e) => {
    const { id } = e

    if (id) {
      queryInfo.queryId = id
      if (id === '0') {
        setNavigationBarTitle('业务进展')
      }
      if (id === '1') {
        setNavigationBarTitle('机构动态')
      }
      if (id === '2') {
        setNavigationBarTitle('业务聚焦')
      }
      if (id === '3') {
        setNavigationBarTitle('政策解读')
      }
    }

    initData()
    queryData()
  })

  // 页面上拉触底事件的处理函数 上拉加载更多
  onReachBottom(() => {
    if (!customData.isLoadOver) {
      loadMoreData()
    }
  })
</script>

<style lang="scss" scoped>
  .news-query {
    width: 100%;
    .load-more-wrapper {
      padding: $spacing;
    }
  }
</style>
