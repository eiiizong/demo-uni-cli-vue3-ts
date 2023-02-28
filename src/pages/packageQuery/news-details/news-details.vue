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
      <rich-text :nodes="newsDetails.content" />
    </div>
  </view>
</template>

<script setup lang="ts">
  import { W017SuccessResultListItem } from '@/server/types/api'

  import { ref } from 'vue'

  import { onLoad } from '@dcloudio/uni-app'

  import { getStorage } from '@/utils/uni-api'

  const newsDetails = ref<W017SuccessResultListItem>({})

  onLoad(() => {
    getStorage('NEWS_DETAILS').then((res) => {
      const details = res.data
      newsDetails.value = details
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
  }
</style>
