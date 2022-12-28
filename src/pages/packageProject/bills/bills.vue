<template>
  <BillBg class="bills">
    <BillHearder></BillHearder>
    <div class="main">
      <BillCompare></BillCompare>
      <BillTotal></BillTotal>
      <BillFooter></BillFooter>
    </div>
  </BillBg>
</template>

<script setup lang="ts">
import BillBg from './BillBg.vue'
import BillHearder from './BillHearder.vue'
import BillCompare from './BillCompare.vue'
import BillTotal from './BillTotal.vue'
import BillFooter from './BillFooter.vue'

import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useStoreUserInfo } from '@/stores/modules'

const storeUserInfo = useStoreUserInfo()

onLoad((e) => {
  console.log(e)
})
</script>

<style lang="scss" scoped>
.bills {
  width: 100%;
  height: 100%;
}
.main {
  flex: 1;
  overflow: hidden;
  background-color: #f00;
  border-top-left-radius: 48rpx;
}
</style>
