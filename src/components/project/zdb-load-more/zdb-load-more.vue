<template>
  <div class="yh-load-more-wrapper">
    <div class="yh-load-more-tip_over" v-if="isLoadOver">
      <span class="text">没有其他数据了</span>
    </div>
    <div class="yh-load-more-tip" v-else>
      <span class="text" v-if="platform == 'ios' || platform == 'mac'">上拉加载更多</span>
      <div class="button-wrapper" v-else>
        <!-- <YhButton type="info" block @click="emit('loadMore')" custom-style="border-radius:8rpx; height:80rpx"
          >加载更多</YhButton
        > -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import YhButton from '@/components/yh/button/button.vue'

import { onMounted, ref } from 'vue'
import { getSystemInfo } from '@/utils/uni-api'

const emit = defineEmits(['loadMore'])

const props = defineProps({
  // 是否加载完成
  isLoadOver: {
    type: [Boolean],
    required: true,
  },
})

const platform = ref('')

onMounted(() => {
  getSystemInfo().then((res) => {
    platform.value = res.platform
  })
})
</script>
<style lang="scss" scoped>
.yh-load-more-wrapper {
  width: 100%;
  font-size: 24rpx;
  font-weight: 400;
  line-height: 44rpx;
  text-align: center;
}
.yh-load-more-tip {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $primary;
  .text {
    padding-top: $spacing;
  }
  .button-wrapper {
    width: 100%;
    padding-top: $spacing;
  }
}
.yh-load-more-tip_over {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #d4d4d4;
  position: relative;

  .text {
    position: relative;
    padding: 0 20rpx;
    background-color: transparent;
    z-index: 1;
    padding-top: $spacing;
  }
}
</style>
