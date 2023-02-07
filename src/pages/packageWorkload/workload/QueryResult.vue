<template>
  <view class="query-result">
    <div class="result-item">
      <div class="title-wrapper">
        <ZdbTitle title="保费补贴支付" />
      </div>
      <div class="content-wrapper">
        <div class="name-wrapper">
          <div class="left">保费补贴支付</div>
          <div class="right">共186笔</div>
        </div>
        <div class="cells">
          <div class="cell">
            <div class="key">通过</div>
            <div class="value">170笔</div>
          </div>
          <div class="cell">
            <div class="key">退回</div>
            <div class="value">170笔</div>
          </div>
          <div class="cell">
            <div class="key">作废</div>
            <div class="value">170笔</div>
          </div>
        </div>
      </div>
    </div>
    <div class="result-item">
      <div class="title-wrapper">
        <ZdbTitle title="合作机构准入" />
      </div>
      <div class="content-wrapper">
        <div class="name-wrapper">
          <div class="left">合作机构审核</div>
          <div class="right">共186笔</div>
        </div>
        <div class="cells">
          <div class="cell">
            <div class="key">通过</div>
            <div class="value">170笔</div>
          </div>
          <div class="cell">
            <div class="key">退回</div>
            <div class="value">170笔</div>
          </div>
          <div class="cell">
            <div class="key">作废</div>
            <div class="value">170笔</div>
          </div>
        </div>
      </div>
    </div>
    <div class="result-item">
      <div class="title-wrapper">
        <ZdbTitle title="白名单企业" />
      </div>
      <div class="content-wrapper">
        <div class="name-wrapper">
          <div class="left">入库审核</div>
          <div class="right">共186笔</div>
        </div>
        <div class="cells">
          <div class="cell">
            <div class="key">通过</div>
            <div class="value">170笔</div>
          </div>
          <div class="cell">
            <div class="key">退回</div>
            <div class="value">170笔</div>
          </div>
          <div class="cell">
            <div class="key">作废</div>
            <div class="value">170笔</div>
          </div>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="name-wrapper">
          <div class="left">出库审核</div>
          <div class="right">共186笔</div>
        </div>
        <div class="cells">
          <div class="cell">
            <div class="key">通过</div>
            <div class="value">170笔</div>
          </div>
          <div class="cell">
            <div class="key">退回</div>
            <div class="value">170笔</div>
          </div>
          <div class="cell">
            <div class="key">作废</div>
            <div class="value">170笔</div>
          </div>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'
  const props = defineProps({
    value: {
      type: String,
      default: ''
    }
  })
</script>

<style lang="scss" scoped>
  $color1: #0071ff;
  $color2: #ffa000;
  $color3: #bfbfbf;
  .query-result {
    width: 100%;
    .result-item {
      .title-wrapper {
        padding: 0 $spacing;
      }
      .content-wrapper {
        background-color: #fff;
        padding: 0 $spacing;
        .name-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 28rpx;
          line-height: 40rpx;
          color: #666666;
          padding: 24rpx 0 14rpx;
          border-bottom: 1px solid #ddd;
        }
        .cells {
          padding: 10rpx 0 24rpx;
          .cell {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: $color1;
            font-size: 28rpx;
            line-height: 40rpx;
            margin-bottom: 24rpx;
            .key {
              position: relative;
              padding-left: 30rpx;
              font-size: inherit;
              color: inherit;
              &::before {
                content: '';
                width: 16rpx;
                height: 16rpx;
                background-color: $color1;
                border-radius: 50%;
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
              }
            }
            .value {
              font-size: inherit;
              color: inherit;
            }
            &:last-child {
              margin-bottom: 0;
              color: $color3;
              .key {
                &::before {
                  background-color: $color3;
                }
              }
            }
            &:nth-of-type(2) {
              color: $color2;
              .key {
                &::before {
                  background-color: $color2;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
