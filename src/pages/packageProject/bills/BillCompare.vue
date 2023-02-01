<template>
  <view class="bill-compare">
    <div class="item">
      <div class="left">
        <div class="name">累计投放</div>
        <div class="value">
          <div class="val Impact">2224</div>
          <div class="unit">户</div>
        </div>
        <div class="compare-value">
          <div class="last-year">去年：</div>
          <div class="val Impact">232424</div>
          <div class="unit">户</div>
        </div>
      </div>
      <div class="right">
        <div class="compare-result">
          <div class="iconimg"></div>
          <div class="value Impact">2.5%</div>
        </div>
        <div class="echart">
          <EchartLine01 :render-list="[]" />
          <!-- <qiun-data-charts type="line" :opts="opts" :chart-data="chartData" /> -->
        </div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="name">累计投放</div>
        <div class="value">
          <div class="val Impact">2224</div>
          <div class="unit">户</div>
        </div>
        <div class="compare-value">
          <div class="last-year">去年：</div>
          <div class="val Impact">232424</div>
          <div class="unit">户</div>
        </div>
      </div>
      <div class="right">
        <div class="compare-result">
          <div class="iconimg"></div>
          <div class="value Impact">2.5%</div>
        </div>
        <div class="echart"></div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="name">累计投放</div>
        <div class="value">
          <div class="val Impact">2224</div>
          <div class="unit">户</div>
        </div>
        <div class="compare-value">
          <div class="last-year">去年：</div>
          <div class="val Impact">232424</div>
          <div class="unit">户</div>
        </div>
      </div>
      <div class="right">
        <div class="compare-result">
          <div class="iconimg"></div>
          <div class="value Impact">2.5%</div>
        </div>
        <div class="echart"></div>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <div class="name">累计投放</div>
        <div class="value">
          <div class="val Impact">2224</div>
          <div class="unit">户</div>
        </div>
        <div class="compare-value">
          <div class="last-year">去年：</div>
          <div class="val Impact">232424</div>
          <div class="unit">户</div>
        </div>
      </div>
      <div class="right">
        <div class="compare-result">
          <div class="iconimg"></div>
          <div class="value Impact">2.5%</div>
        </div>
        <div class="echart"></div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
  import EchartLine01 from './EchartLine01.vue'
  // import { ref, onMounted } from 'vue'
</script>

<style lang="scss" scoped>
  $color1: #2661ff;
  $color2: #eca02d;
  $color3: #009bc2;
  $color4: #f85c5c;
  .bill-compare {
    width: 100%;
    padding: 0 $spacing;
    padding-top: 24rpx;
    .item {
      display: flex;
      align-items: center;
      border-bottom: 5rpx solid #f5f5f5;
      padding-bottom: 40rpx;
      &:nth-of-type(2) {
        .left {
          .value {
            .val {
              color: $color2;
            }
            .unit {
              color: rgba($color2, 0.65);
            }
          }
        }
      }
      &:nth-of-type(3) {
        .left {
          .value {
            .val {
              color: $color3;
            }
            .unit {
              color: rgba($color3, 0.65);
            }
          }
        }
      }
      &:nth-of-type(4) {
        .left {
          .value {
            .val {
              color: $color4;
            }
            .unit {
              color: rgba($color4, 0.65);
            }
          }
        }
      }
    }
    .echart {
      width: 236rpx;
      height: 120rpx + 40rpx;
    }
    .left {
      flex: 1;
      overflow: hidden;
      .name {
        font-size: 32rpx;
        line-height: 44rpx;
        color: #a7b4d9;
        padding-top: 20rpx;
      }
      .value {
        display: flex;
        align-items: center;
        padding-top: 20rpx;
        .val {
          font-size: 66rpx;
          font-weight: 700;
          line-height: 74rpx;
          color: $color1;
        }
        .unit {
          font-size: 42rpx;
          line-height: 1;
          padding-left: 10rpx;
          color: rgba($color1, 0.65);
        }
      }
      .compare-value {
        display: flex;
        align-items: center;
        font-size: 28rpx;
        line-height: 40rpx;
        color: #a7b4d9;
        padding-top: 18rpx;
        .val {
          font-size: 34rpx;
          font-weight: 700;
        }
        .unit {
          font-size: 28rpx;
          padding-left: 8rpx;
        }
      }
    }
    .right {
      width: 236rpx;
    }
  }
</style>
