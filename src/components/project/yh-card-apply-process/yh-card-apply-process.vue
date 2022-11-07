<template>
  <div
    class="yh-card-apply-process-wrapper"
    v-if="renderList && renderList.length > 0"
  >
    <div class="items">
      <template v-for="(item, index) in renderList" :key="item.cpb070">
        <div
          class="item"
          :class="[
            item.handleFinish == '1'
              ? ''
              : item.currentNode == '1'
              ? 'current'
              : 'disabled',
          ]"
        >
          <div class="time" v-if="item.aae036">
            <div>{{ item.aae036.substr(0, 10) }}</div>
            <div>{{ item.aae036.substr(10, 19) }}</div>
          </div>
          <div class="name-wrapper">
            <div class="icon">
              <div
                class="iconfont iconfont-hook"
                v-if="item.handleFinish == '1'"
              ></div>
              <div class="ing" v-else></div>
            </div>
            <div class="name">{{ item.che011 }}</div>
          </div>
          <div class="info">
            <div class="info-cell d-f">
              <div class="key">
                {{ item.che063 == '01' ? '申报人：' : '经办人：' }}
              </div>
              <div class="value">{{ item.aae011 || '暂无' }}</div>
            </div>
            <div class="info-cell d-f">
              <div class="key">经办内容：</div>
              <div class="value">{{ item.cpb103 || '暂无' }}</div>
            </div>
          </div>
          <div class="iconfont iconfont-arrow-bottom-fill"></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  renderList: {
    type: [Object],
    required: true,
  },
})
</script>
<style lang="scss" scoped>
.yh-card-apply-process-wrapper {
  padding-top: 64rpx;
  padding-bottom: 30rpx;
  .items {
    padding-left: 186rpx;
  }
  .item {
    position: relative;
    padding-left: 40rpx;
    padding-bottom: 60rpx;

    .time {
      position: absolute;
      left: -186rpx;
      padding-top: 4rpx;
      font-size: 24rpx;
      line-height: 32rpx;
      color: $primary;
      top: 0;
    }
    .name-wrapper {
      color: $primary;
      position: relative;
      font-size: 30rpx;
      line-height: 40rpx;
      font-weight: 700;
      .icon {
        position: absolute;
        top: 0;
        left: -40rpx;
        width: 40rpx;
        transform: translateX(-50%);
        height: 40rpx;
        border: solid 1px $primary;
        border-radius: 50%;
        z-index: 3;
        background-color: #fff;
        text-align: center;
        .iconfont {
          font-size: 24rpx;
          line-height: 40rpx;
          color: $primary;
        }
        .ing {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 16rpx;
          height: 16rpx;
          background-color: $primary;
          border-radius: 50%;
        }
      }
    }
    .info {
      font-size: 26rpx;
      color: #666;
      line-height: 36rpx;
      padding-top: 12rpx;
      .info-cell {
        margin-bottom: 6rpx;
        .value {
          flex: 1;
          overflow: hidden;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .iconfont-arrow-bottom-fill {
      display: none;
      position: absolute;
      bottom: -10rpx;
      left: 0;
      transform: translateX(-50%);
      font-size: 24rpx;
      color: $primary;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 1px;
      height: 100%;
      border-left: 1px dashed $primary;
      z-index: 1;
    }
    &:last-child {
      padding-bottom: 0;
      .iconfont-arrow-bottom-fill {
        display: block;
      }
    }
    &.disabled {
      .name-wrapper {
        .icon {
          border-color: tint($primary, 50%);
          border-width: 2px;
          .ing {
            background-color: tint($primary, 50%);
          }
        }
        .name {
          color: tint($primary, 50%);
        }
      }
      .info {
        opacity: 0.5;
      }
    }
    &.current {
      .name-wrapper {
        .icon {
          border-width: 2px;
        }
      }
    }
  }
}
</style>
