<template>
  <BillBg class="bills">
    <BillHearder :backgorundColor="navBarBackgroundColor"></BillHearder>
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
import { onLoad, onPageScroll, onHide } from '@dcloudio/uni-app'
import { useStoreUserInfo } from '@/stores/modules'

import type { Ref } from 'vue'

const storeUserInfo = useStoreUserInfo()

const scrollTimer: Ref<any> = ref(null)
const navBarBackgroundColor = ref('transparent')

onLoad((e) => {
  console.log(e)
})

onHide(() => {
  scrollTimer.value && clearTimeout(scrollTimer.value)
})

// 监听页面滚动
onPageScroll((e) => {
  const { scrollTop } = e
  scrollTimer.value && clearTimeout(scrollTimer.value)
  scrollTimer.value = setTimeout(() => {
    if (scrollTop > 10) {
      navBarBackgroundColor.value = '#2f54d4'
    } else {
      navBarBackgroundColor.value = 'transparent'
    }
  }, 100)
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
  background-color: #fff;
  border-top-right-radius: 48rpx;
  border-top-left-radius: 48rpx;
}
</style>
