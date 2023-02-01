<template>
  <BillBg class="bills">
    <BillHearder :backgorund-color="navBarBackgroundColor" />
    <div class="main">
      <BillCompare />
      <BillTotal />
      <BillFooter />
    </div>
  </BillBg>
</template>

<script setup lang="ts">
  import BillBg from './BillBg.vue'
  import BillHearder from './BillHearder.vue'
  import BillCompare from './BillCompare.vue'
  import BillTotal from './BillTotal.vue'
  import BillFooter from './BillFooter.vue'

  import { ref } from 'vue'
  import { onLoad, onPageScroll, onHide } from '@dcloudio/uni-app'

  import type { Ref } from 'vue'

  const scrollTimer: Ref<any> = ref(null)
  const navBarBackgroundColor = ref('transparent')

  const getData = () => {
    console.log('navBarBackgroundColor', navBarBackgroundColor)
  }

  onLoad(() => {
    getData()
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
        navBarBackgroundColor.value = 'rgba(88,88,88,0.46)'
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
