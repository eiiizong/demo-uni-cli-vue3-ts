<template>
  <view v-if="newsDetails.code" class="news-details">
    <div class="title">
      <div class="text">{{ newsDetails.title }}</div>
    </div>
    <div class="info">
      <div class="cell">
        <div class="key">发布时间：</div>
        <div class="value">{{ newsDetails.create_time }}</div>
      </div>
      <div class="cell">
        <div class="key">文章来源：</div>
        <div class="value">每日经济新闻</div>
      </div>
    </div>
    <div class="content">
      <rich-text :nodes="newsContent" />
    </div>
  </view>
</template>

<script setup lang="ts">
  import { W017SuccessResultListItem } from '@/server/types/api'

  import { ref, computed } from 'vue'

  import { onLoad } from '@dcloudio/uni-app'

  import { getStorage, setNavigationBarTitle } from '@/utils/uni-api'

  const newsDetails = ref<W017SuccessResultListItem>({})

  /**
   * 处理数据 让图片100%显示
   */
  const newsContent = computed(() => {
    const { content } = newsDetails.value
    let newContent = ''
    if (content) {
      newContent = content.replace(/<img[^>]*>/gi, function (match) {
        match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '')
        match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '')
        match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '')
        return match
      })
      newContent = newContent.replace(/style="[^"]+"/gi, function (match) {
        match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;')
        return match
      })
      newContent = newContent.replace(/<br[^>]*\/>/gi, '')
      newContent = newContent.replace(
        /<img/gi,
        '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"'
      )
    }
    return newContent
  })

  onLoad(() => {
    getStorage('NEWS_DETAILS').then((res) => {
      const details = res.data
      newsDetails.value = details
      setNavigationBarTitle(details.title)
    })
  })
</script>

<style lang="scss" scoped>
  .news-details {
    width: 100%;
    padding: $spacing;
    background-color: #fff;
    .title {
      text-align: center;
      font-size: 32rpx;
      font-weight: 700;
      line-height: 1.4;
      color: $color-text;
      .text {
        display: inline-block;
        text-align: left;
      }
    }
    .info {
      font-size: 24rpx;
      line-height: 1.4;
      color: $color-text-placeholder;
      padding-top: 20rpx;
      .cell {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-bottom: 10rpx;
      }
    }
    .content {
      padding-top: 20rpx;
    }
  }
</style>
