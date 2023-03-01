<template>
  <div class="card-item">
    <div class="name-wrapper">
      <img class="img" :src="images[index % 7]" alt="" />
      <div class="key">{{ renderData.chi031_desc }}</div>
      <div class="value">共{{ total }}笔</div>
    </div>
    <div v-if="renderData.backmoney + ''" class="items">
      <div class="item">
        <div class="title">总计</div>
        <div class="cols">
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">通过</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.passnum || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.passmoney || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">退回</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.backnum || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.backmoney || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">不通过</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.unpassnum || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.unpassmoney || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">73模式</div>
        <div class="cols">
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">通过</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.passnum73 || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.passmoney73 || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">退回</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.backnum73 || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.backmoney73 || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">不通过</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.unpassnum73 || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.unpassmoney73 || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="title">442模式</div>
        <div class="cols">
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">通过</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.passnum442 || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.passmoney442 || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">退回</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.backnum442 || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.backmoney442 || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
          <div class="col">
            <div class="key">
              <div class="point"></div>
              <div class="text">不通过</div>
            </div>
            <div class="num">
              <span class="val">{{ renderData.unpassnum442 || 0 }}</span>
              <div class="unit">笔</div>
            </div>
            <div class="money">
              <span class="val">{{ renderData.unpassmoney442 || 0 }}</span>
              <div class="unit">万</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="items">
      <div class="col">
        <div class="key">
          <div class="point"></div>
          <div class="text">通过</div>
        </div>
        <div class="num">
          <div class="val">{{ renderData.passnum || 0 }}</div>
          <div class="unit">笔</div>
        </div>
      </div>
      <div class="col">
        <div class="key">
          <div class="point"></div>
          <div class="text">退回</div>
        </div>
        <div class="num">
          <div class="val">{{ renderData.backnum || 0 }}</div>
          <div class="unit">笔</div>
        </div>
      </div>
      <div class="col">
        <div class="key">
          <div class="point"></div>
          <div class="text">不通过</div>
        </div>
        <div class="num">
          <div class="val">{{ renderData.unpassnum || 0 }}</div>
          <div class="unit">笔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import image01 from './images/01.png'
  import image02 from './images/02.png'
  import image03 from './images/03.png'
  import image04 from './images/04.png'
  import image05 from './images/05.png'
  import image06 from './images/06.png'
  import image07 from './images/07.png'

  import type { PropType } from 'vue'
  import type { W013SuccessResultListItem } from '@/server/types/api'

  import { computed } from 'vue'

  const images = [image01, image02, image03, image04, image05, image06, image07]

  const props = defineProps({
    // 渲染数据
    renderData: {
      type: Object as PropType<W013SuccessResultListItem>,
      required: true
    },
    /**
     * 序号 决定图片展示 从0开始
     */
    index: {
      type: Number,
      required: true
    }
  })

  /**
   * 总计数
   */
  const total = computed(() => {
    let num = 0
    const { passnum, backnum, unpassnum } = props.renderData

    if (passnum) {
      num += passnum
    }

    if (backnum) {
      num += backnum
    }

    if (unpassnum) {
      num += unpassnum
    }

    return num
  })
</script>

<style lang="scss" scoped>
  $color1: #0071ff;
  $color2: #ffa000;
  $color3: #bfbfbf;
  .card-item {
    background-color: #ffffff;
    border-radius: 10rpx;
    padding: 0 24rpx;
    margin-bottom: 24rpx;
    .name-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 30rpx;
      line-height: 42rpx;
      padding: 14rpx 0;
      border-bottom: 1rpx solid $color-border;
      position: relative;
      .img {
        width: 20rpx;
        height: 54rpx;
        position: absolute;
        top: 0;
        left: 2rpx;
      }
      .key {
        color: #666666;
        padding-left: 34rpx;
      }
      .value {
        flex: 1;
        overflow: hidden;
        color: #333333;
        text-align: right;
      }
    }

    .items {
      .item {
        position: relative;
        padding-bottom: 36rpx;
        &::after {
          content: '';
          color: '';
          width: 50%;
          height: 1px;
          background-color: $color-border;
          border-radius: 1px;
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
        }
        &:last-of-type {
          &::after {
            width: 0;
          }
        }
      }
      .title {
        color: #666;
        font-size: 28rpx;
        line-height: 40rpx;
        padding-top: 28rpx;
      }
      .cols {
        display: flex;
        align-items: center;
        padding-top: 28rpx;
        .col {
          width: 33.33%;
          color: #475f7e;
          text-align: center;
          .key {
            font-size: 28rpx;
            line-height: 40rpx;
            color: $color1;
            display: flex;
            align-items: center;
            justify-content: center;
            .point {
              width: 20rpx;
              height: 20rpx;
              background-color: $color1;
              border-radius: 50%;
              margin-right: 10rpx;
            }
          }
          .num {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 44rpx;
            line-height: 60rpx;
            color: inherit;
            font-weight: 700;
            padding: 12rpx 0;
            .unit {
              font-size: 26rpx;
              line-height: 36px;
              padding-left: 4rpx;
              font-weight: 400;
            }
          }
          .money {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28rpx;
            line-height: 40rpx;
            color: inherit;
            font-weight: 700;
            padding: 12rpx 0;
            .unit {
              font-size: 24rpx;
              line-height: 1;
              padding-left: 2rpx;
              font-weight: 400;
            }
          }
          &:last-child {
            .key {
              color: $color3;
              .point {
                background-color: $color3;
              }
            }
          }
          &:nth-of-type(2) {
            .key {
              color: $color2;
              .point {
                background-color: $color2;
              }
            }
          }
        }
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
