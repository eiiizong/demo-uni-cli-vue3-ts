<template>
  <view class="proccess">
    <div class="content">
      <div class="lists">
        <div class="list" v-for="item in customData.queryResultList" :key="item.id">
          <ListItem></ListItem>
        </div>
      </div>
    </div>
    <div class="content-no">
      <ZdbNoData></ZdbNoData>
    </div>
    <ZdbLoadMore></ZdbLoadMore>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ZdbNoData from '@/components/project/zdb-no-data/zdb-no-data.vue'
import ZdbLoadMore from '@/components/project/zdb-load-more/zdb-load-more.vue'
import ListItem from './ListItem.vue'

const queryInfo = reactive({
  pageNo: 1,
  pageSize: 10,
})

const customData = reactive({
  queryResultList: [1, 23], // 数据查询结果
  isRequestOver: false, // 是否请求完成 控制no-data组件在未请求完成时显示
  isLoadOver: false, // 是否加载完成
  isMultiplePages: false, // 是否多页
})
</script>

<style lang="scss" scoped>
.proccess {
  width: 100%;
  padding: $spacing;
  .list {
    margin-bottom: $spacing;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
