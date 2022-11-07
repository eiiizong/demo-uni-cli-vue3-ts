<template>
  <YhCardWrapper class="yh-card-apply-wrapper">
    <div class="project-name-wrapper">
      <div class="line"></div>
      <div class="name">
        {{ renderData.chi031Desc }}
      </div>
    </div>
    <div class="cells">
      <div class="cell d-f ai-c">
        <div class="key">申报时间：</div>
        <div class="value">{{ renderData.aae036.substr(0, 10) }}</div>
      </div>
      <div class="cell  d-f ai-c">
        <div class="key">已核定扶持金额：</div>
        <div class="value">{{ renderData.aae019 || '暂无' }}</div>
      </div>
      <div class="cell  d-f ai-c">
        <div class="key">当前状态：</div>
        <div class="value primary">{{ renderData.cse240Desc }}</div>
      </div>
    </div>
    <div class="button-wrapper" v-if="isShowButtons">
      <YhButton
        width="200rpx"
        type="primary"
        name="查看办理进度"
        @click="handleJumpRoute"
      ></YhButton>
      <YhButton
        v-if="renderData.isCanCancel == 'true'"
        width="200rpx"
        margin="0 0 0 30rpx"
        type="primary"
        reverse
        name="撤销申报"
        @click="handleCancelApply"
      ></YhButton>
    </div>
  </YhCardWrapper>
</template>

<script setup>
import YhButton from '@/components/common/yh-button/yh-button.vue'
import YhCardWrapper from '@/components/common/yh-card-wrapper/yh-card-wrapper.vue'

import { navigateTo, showModal, showToast } from '@/utils/uni-api'
import { requestB412 } from '@/server'

const emit = defineEmits(['update'])
const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
  isShowButtons: {
    type: [Boolean],
    default: () => true,
  },
})

// 跳转路由
const handleJumpRoute = () => {
  const { chb000, chi031Desc, aae036, cse240Desc, aae019 } = props.renderData
  navigateTo('approval-process', 'packageDeclare', {
    chb000,
    chi031Desc,
    aae036,
    cse240Desc,
    aae019,
  })
}

// 撤销申报
const handleCancelApply = () => {
  const { chb000 } = props.renderData
  showModal('是否确定撤销申报？', '提示', true).then(() => {
    requestB412(chb000).then((res) => {
      showToast('撤销申报成功', 'success').then(() => {
        setTimeout(() => {
          emit('update', chb000)
        }, 1500)
      })
    })
  })
}
</script>
<style lang="scss" scoped>
.project-name-wrapper {
  padding-bottom: 26rpx;
  border-bottom: 1px solid tint($primary, 83%);
  .line {
    width: 80rpx;
    height: 8rpx;
    background-image: linear-gradient(90deg, rgb(177, 235, 255), $primary);
    background-image: linear-gradient(to right, tint($primary, 65%), $primary);
    border-radius: 6rpx;
    margin-top: 4rpx;
  }
  .name {
    padding-top: 10rpx;
    font-size: 28rpx;
    font-weight: 700;
    line-height: 40rpx;
    color: shade($primary, 70%);
  }
}

.cells {
  font-size: 24rpx;
  font-weight: 700;
  color: #737c8c;
  line-height: 32rpx;
  margin-top: 30rpx;
  position: relative;
  padding-right: 100rpx;
  .cell {
    margin-bottom: 10rpx;
    .value {
      &.primary {
        color: $primary;
      }
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 30rpx;
  margin-top: 30rpx;
  border-top: 1px solid tint($primary, 83%);
}
</style>
