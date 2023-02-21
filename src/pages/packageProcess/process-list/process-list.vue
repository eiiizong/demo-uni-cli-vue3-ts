<template>
  <view class="process-list">
    <div v-if="customData.queryResultList.length > 0" class="content">
      <div class="lists">
        <div v-for="item in customData.queryResultList" :key="item.id" class="list">
          <ZdbCardApply :render-data="item" />
        </div>
      </div>
    </div>
    <template v-else>
      <ZdbNoData v-if="customData.isRequestOver" />
    </template>
    <template v-if="customData.isMultiplePages">
      <ZdbLoadMore :is-load-over="customData.isLoadOver" />
    </template>
  </view>
</template>

<script setup lang="ts">
  import ZdbNoData from '@/components/project/zdb-no-data/zdb-no-data.vue'
  import ZdbLoadMore from '@/components/project/zdb-load-more/zdb-load-more.vue'
  import ZdbCardApply from '@/components/project/zdb-card-apply/zdb-card-apply.vue'

  import type { W009SuccessResultListItem } from '@/server/types/api'
  import { reactive, toRefs } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { requestW009 } from '@/server/api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 查询条件
  const queryInfo = reactive({
    /**
     * 当前页数
     */
    pageNo: 1,
    /**
     * 每页请求条数
     */
    pageSize: 10
  })

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
    const { pageNo, pageSize } = queryInfo
    const { tel } = userInfo.value
    requestW009(tel || '13739436300', pageNo, pageSize)
      .then((res) => {
        const { list } = res.pageBen
        customData.queryResultList = [...list]
      })
      .finally(() => {
        customData.isRequestOver = true
      })
  }

  // 页面加载完成
  onLoad(() => {
    queryData()
  })
</script>

<style lang="scss" scoped>
  .process-list {
    width: 100%;
    padding: $spacing;
    min-height: 100%;
    min-height: 100vh;
    background-color: #fff;
    .list {
      margin-bottom: $spacing;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
