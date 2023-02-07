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

  import { reactive } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'

  const queryInfo = reactive({
    pageNo: 1,
    pageSize: 10
  })

  const customData = reactive({
    // 查询结果数据
    queryResultList: [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }, { id: '6' }], // 数据查询结果
    // 是否请求完成 控制 no-data 组件在未请求完成时不显示
    isRequestOver: false,
    // 数据是否存在多页，不止一页
    isMultiplePages: false,
    // 当数据不止一页时是否加载完成
    isLoadOver: false
  })

  // 查询数据
  const queryData = () => {
    const { pageNo, pageSize } = queryInfo
    console.log(pageNo, pageSize)
  }

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
