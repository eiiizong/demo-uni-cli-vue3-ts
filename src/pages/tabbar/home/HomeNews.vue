<template>
  <view class="home-news">
    <div class="iconimg">
      <img :src="imageBgNews" alt="" class="bg" />
      <div class="content">头条</div>
    </div>
    <div id="scroll_text_wrapper" class="text-wrapper">
      <div id="scroll_text" class="text" :style="scrollTextStyle">
        {{ renderData.description }}
      </div>
    </div>

    <!-- <YhIcon name="arrow-right" size="24rpx" /> -->
  </view>
</template>

<script setup lang="ts">
  import imageBgNews from './images/bg-news.png'

  import type { PropType } from 'vue'
  import { W017SuccessResultListItem } from '@/server/types/api'

  import { ref, onMounted, computed, nextTick, onUnmounted, getCurrentInstance, watch } from 'vue'

  const props = defineProps({
    renderData: {
      type: Object as PropType<W017SuccessResultListItem>,
      required: true
    }
  })

  const instance = getCurrentInstance()

  // 滚动定时器
  const timer = ref<any>(null)
  // 滚动定时器
  const timerNum = ref(0)

  // 滚动的字体
  const scrollTextStyle = computed(() => {
    let str = ''
    str += `left: ${timerNum.value}px; `
    return str
  })

  // 滚动字体
  const scrollText = (scrollWrapperId: string, scrollId: string, step = 2, delay = 300) => {
    const { description } = props.renderData
    if (!description) {
      return
    }
    nextTick(() => {
      uni
        .createSelectorQuery()
        .in(instance)
        .select('#' + scrollWrapperId)
        .boundingClientRect()
        .exec((res) => {
          const wrapperDom = res[0]
          if (!wrapperDom) {
            return
          }

          const { width: wrapperWidth } = wrapperDom

          uni
            .createSelectorQuery()
            .in(instance)
            .select('#' + scrollId)
            .boundingClientRect()
            .exec((res) => {
              const dom = res[0]
              if (!dom) {
                return
              }

              const { width } = dom

              if (width < wrapperWidth) {
                return
              }
              timer.value = setInterval(() => {
                timerNum.value = timerNum.value - step
                if (-timerNum.value >= width) {
                  timerNum.value = wrapperWidth
                }
              }, delay)
            })
        })
    })
  }

  onMounted(() => {
    scrollText('scroll_text_wrapper', 'scroll_text', 2, 100)
  })

  onUnmounted(() => {
    timer.value && clearImmediate(timer.value)
  })

  watch(
    () => props.renderData.description,
    (val) => {
      if (val) {
        scrollText('scroll_text_wrapper', 'scroll_text', 2, 100)
      }
    },
    { immediate: true }
  )
</script>

<style lang="scss" scoped>
  .home-news {
    width: 100%;
    height: 80rpx;
    background-color: #fff4d8;
    margin-top: 4rpx;
    display: flex;
    align-items: center;
    padding: 0 40rpx;
    color: #f68500;
    font-size: 26rpx;
    .iconimg {
      width: 74rpx;
      height: 40rpx;
      font-size: 24rpx;
      color: #fff;
      margin-right: 20rpx;
      position: relative;
      .bg {
        width: 100%;
        height: 100%;
      }
      .content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .text-wrapper {
      flex: 1;
      height: 100%;
      overflow: hidden;
      position: relative;
      .text {
        white-space: nowrap;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }
    }
  }
</style>
