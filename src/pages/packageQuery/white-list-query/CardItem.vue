<template>
  <view class="card-item" :class="type === 'disabled' ? 'disabled' : 'disabled'">
    <div class="bg">
      <img v-if="true" :src="imageBg01" alt="" class="img" />
      <img v-else :ssrc="imageBg02" alt="" class="bg" />
    </div>
    <div class="con">
      <div class="name">
        <div class="left">{{ renderData.crb111 }}</div>
        <div class="right">{{ renderData.crb11b }}</div>
      </div>
      <div class="tags">
        <div class="tag">12323</div>
        <div class="tag">5657</div>
      </div>
      <div class="cells">
        <div class="cell">
          <div class="key">企业规模</div>
          <div class="value">
            {{ renderData.crb118 }}
          </div>
        </div>
        <div class="cell">
          <div class="key">准入时间</div>
          <div class="value">
            {{ moment(renderData.crb11l).format('YYYY-MM-DD') }}
          </div>
        </div>
        <div class="cell">
          <div class="key">退出时间</div>
          <div class="value">
            {{ renderData.crb11m ? moment(renderData.crb11m).format('YYYY-MM-DD') : '--' }}
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import imageBg01 from './images/bg-01.png'
  import imageBg02 from './images/bg-02.png'

  import type { PropType } from 'vue'
  import type { W011SuccessResultListItem } from '@/server/types/api'
  import moment from 'moment'

  const props = defineProps({
    // 渲染数据
    renderData: {
      type: Object as PropType<W011SuccessResultListItem>,
      required: true
    },
    type: {
      type: String,
      default: '01'
    }
  })
</script>

<style lang="scss" scoped>
  .card-item {
    width: 100%;
    position: relative;
    overflow: hidden;
    .bg {
      position: relative;
      .img {
        width: 100%;
        height: 294rpx;
      }
    }

    .con {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      .name {
        font-size: 32rpx;
        line-height: 44rpx;
        height: 86rpx;
        font-weight: 400;
        color: #333;
        display: flex;
        align-items: center;
        padding: 0 $spacing;
        border-bottom: solid 1rpx #eecda1;
        .left {
          flex: 1;
          padding-right: 20rpx;
          @include textOverflow(1);
        }
        .right {
          width: 110rpx;
          background-color: rgba(255, 255, 255, 0.65);
          border-radius: 4rpx;
          border: solid 1px #ff9200;
          color: #ff9200;
          font-size: 26rpx;
          line-height: 50rpx;
          text-align: center;
        }
      }
      .tags {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 20rpx $spacing;
        .tag {
          background-color: rgba(245, 90, 0, 0.13);
          border-radius: 4rpx;
          line-height: 44rpx;
          padding: 0 8rpx;
          font-size: 28rpx;
          color: #ff5e00;
          margin-right: 12rpx;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .cells {
        display: flex;
        padding: 4rpx $spacing 0;
        .cell {
          width: 33.3333%;
          text-align: left;
        }
        .key {
          font-size: 26rpx;
          line-height: 38rpx;
          color: #556373;
        }
        .value {
          font-size: 32rpx;
          line-height: 44rpx;
          padding-top: 14rpx;
          color: #2a3541;
        }
      }
    }
    &.disabled {
      .con {
        .name {
          color: rgba(#333, 0.6);
          border-bottom-color: #d8d8d8;
          .right {
            background-color: rgba(255, 255, 255, 0.65);
            border-color: #999999;
            color: #a0a0a0;
          }
        }
      }
      .tags {
        .tag {
          color: #8b8b8b;
          background-color: #e3e3e3;
        }
      }
      .cells {
        opacity: 0.6;
      }
    }
  }
</style>
