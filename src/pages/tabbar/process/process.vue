<template>
  <view class="proccess">
    <div class="content"></div>
    <div class="content-no"></div>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const queryInfo = reactive({
  pageNo: 1,
  pageSize: 10,
})

const customData = reactive({
  queryResultList: [], // 数据查询结果
  isRequestOver: false, // 是否请求完成 控制no-data组件在未请求完成时显示
  isLoadOver: false, // 是否加载完成
  isMultiplePages: false, // 是否多页
})
</script>

<style lang="scss" scoped>
.proccess {
  width: 100%;
}
</style>
