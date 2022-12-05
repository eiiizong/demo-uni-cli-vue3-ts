<template>
  <view class="home-popular-services">
    <QueryCriteria></QueryCriteria>
    <Tabs></Tabs>
    <QueryResult></QueryResult>
  </view>
</template>

<script setup lang="ts">
import QueryCriteria from './QueryCriteria.vue'
import Tabs from './Tabs.vue'
import QueryResult from './QueryResult.vue'
</script>

<style lang="scss" scoped>
.home-popular-services {
  width: 100%;
}
</style>
