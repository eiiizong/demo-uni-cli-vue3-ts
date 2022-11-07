<template>
  <YhCardWrapper class="yh-card-subsidy-wrapper">
    <div class="name-wrapper">
      <div class="city YouSheBiaoTiHei">{{ renderData.aab301Desc }}</div>
      <div class="name">
        {{ renderData.chi032 }}
      </div>
    </div>
    <div class="tags d-f ai-c fw-w">
      <template
        v-for="aka131Item in renderData.aka131List"
        :key="aka131Item.aka131"
      >
        <div class="tag">
          {{ aka131Item.aka131Desc }}
        </div>
      </template>
    </div>

    <div class="cells">
      <div class="cell d-f ai-c">
        <div class="key">截止申报日期：</div>
        <div class="value">{{ renderData.bhi036.substr(0, 10) }}</div>
      </div>
      <div class="cell d-f ai-c">
        <div class="key">主管部门：</div>
        <div class="value">{{ renderData.chi037_desc }}</div>
      </div>
      <div class="cell-line d-f ai-c">
        <div class="cell d-f ai-c">
          <div class="key">匹配度：</div>
          <div class="value">{{ renderData.chr081 || 0 }}%</div>
        </div>
        <div class="cell time d-f ai-c">
          <div class="key">申报倒计时：</div>
          <div class="value">{{ renderData.stopTime || '0天' }}</div>
        </div>
      </div>
    </div>
    <div class="button-wrapper d-f ai-c jc-fe">
      <YhButton
        v-if="renderData.stopTime"
        name="立即申报"
        type="primary"
        reverse
        class="first"
        @click="handleJumpRoute('0')"
      ></YhButton>
      <YhButton
        name="申报指南"
        type="primary"
        @click="handleJumpRoute('1')"
      ></YhButton>
      <YhButton
        name="查看匹配报告"
        @click="handleJumpRoute('2')"
        type="primary"
        reverse
        class="reverse"
      ></YhButton>
    </div>
  </YhCardWrapper>
</template>

<script setup>
import YhButton from '@/components/common/yh-button/yh-button.vue'
import YhCardWrapper from '@/components/common/yh-card-wrapper/yh-card-wrapper.vue'

import { navigateTo } from '@/utils/uni-api'
import { useCheckLogin } from '@/use'
import config from '@/config'
const { declarePackageName } = config

const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
})

// 跳转路由
const handleJumpRoute = (type) => {
  const { chi031, aab301Desc, chi032 } = props.renderData
  if (type == '1') {
    navigateTo('declare-guide', 'packageDeclare', { chi031 })
  } else if (type == '2') {
    useCheckLogin('match-report', 'packageDeclare', {
      chi031,
      aab301Desc,
      chi032,
    })
  } else if (type == '0') {
    useCheckLogin('declare-' + chi031, declarePackageName, {
      chi031,
      chi032,
    })
  }
}
</script>
<style lang="scss" scoped>
.name-wrapper {
  .city {
    position: relative;
    font-size: 30rpx;
    font-weight: 700;
    line-height: 1;
    color: $primary;
    z-index: 1;
    &::after {
      content: '';
      z-index: -1;
      position: absolute;
      left: 4rpx;
      bottom: 0;
      width: 80rpx;
      height: 12rpx;
      background-image: linear-gradient(
        to right,
        rgba($primary, 0.2),
        rgba($primary, 0.05)
      );
      border-radius: 4rpx;
    }
  }
  .name {
    padding-top: 12rpx;
    padding-bottom: 24rpx;
    font-size: 28rpx;
    font-weight: 700;
    line-height: 40rpx;
    color: shade($primary, 70%);
    border-bottom: 1px solid rgba($primary, 0.06);
  }
}
.tags {
  padding-top: 20rpx;
  .tag {
    font-size: 24rpx;
    line-height: 40rpx;
    padding: 0 12rpx;
    background-color: rgba($primary, 0.08);
    border-radius: 4rpx;
    color: $primary;
    margin-right: 20rpx;
    margin-bottom: 20rpx;
  }
}
.cells {
  padding-top: 12rpx;
  .cell {
    font-size: 24rpx;
    font-weight: 700;
    line-height: 32rpx;
    color: #b1bdd5;
    margin-bottom: 16rpx;
    white-space: nowrap;
  }
  .cell-line {
    .cell {
      width: 50%;
      .value {
        background-color: #e6ffee;
        border-radius: 4rpx;
        border: solid 1px #c0f1cd;
        font-size: 24rpx;
        font-weight: 500;
        line-height: 1;
        color: #51d574;
        padding: 6rpx 14rpx;
      }
      &.time {
        .value {
          background-color: #ffefef;
          border-color: #fdd2d2;
          color: #fa6464;
        }
      }
    }
  }
}
.button-wrapper {
  padding: 50rpx 0;
  .reverse {
    margin-left: 40rpx;
  }
  .first {
    margin-right: 40rpx;
  }
}
</style>
