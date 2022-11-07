<template>
  <YhCardWrapper class="yh-card-publicity-complaint-wrapper" padding="20rpx">
    <div class="name-wrapper">
      <image
        class="img"
        v-if="renderData.aab01p"
        mode="aspectFit"
        :src="imageUrl + renderData.aab01p"
      />
      <div class="name">
        {{ renderData.aab012 }}
      </div>
    </div>

    <div class="cells">
      <div class="cell d-f">
        <div class="key">企业规模：</div>
        <div class="value tags">
          <div class="tag">{{ renderData.aab01dDesc || '暂无' }}</div>
        </div>
      </div>
      <div class="cell  d-f">
        <div class="key">扶持金额：</div>
        <div class="value amount">{{ renderData.aae019 || 0 }}元</div>
      </div>
    </div>

    <!-- <div class="button-wrapper">
      <YhButton
        name="投诉"
        type="primary"
        reverse
        width="96rpx"
        height="46rpx"
        fontSize="26rpx"
        fontWeight="500"
        @click="handleComplaint"
      ></YhButton>
    </div> -->
  </YhCardWrapper>
</template>

<script setup>
import YhCardWrapper from '@/components/common/yh-card-wrapper/yh-card-wrapper.vue'
import YhButton from '@/components/common/yh-button/yh-button.vue'

import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { USER_INFO } from '@/store/constants'
import { useCheckLogin } from '@/use'
import config from '@/config'

const imageUrl = config.requestUrl + '/upload/downloadFile/'
const store = useStore()
const emit = defineEmits([''])
const props = defineProps({
  renderData: {
    type: [Object],
    required: true,
  },
})

const userInfo = computed(() => {
  return store.state[USER_INFO]
})

const handleComplaint = () => {
  const { chb000 } = props.renderData

  useCheckLogin('under-dev', 'packageCommon', { chb000 })
}
</script>
<style lang="scss" scoped>
.name-wrapper {
  position: relative;
  padding-bottom: 20rpx;
  .img {
    position: absolute;
    width: 32rpx;
    height: 40rpx;
  }
  .name {
    font-size: 28rpx;
    font-weight: 700;
    line-height: 40rpx;
    // color: #082a6b;
    color: shade($primary, 70%);
    padding-left: 50rpx;
  }
}
.cells {
  font-size: 24rpx;
  font-weight: 700;
  color: #9fadc8;
  line-height: 40rpx;
  padding-right: 96rpx + 20rpx;
  .cell {
    .value {
      flex: 1;
      overflow: hidden;
      &.tags {
        display: flex;
        flex-wrap: wrap;

        .tag {
          font-size: 24rpx;
          line-height: 40rpx;
          padding: 0 12rpx;
          background-color: rgba($primary, 0.08);
          border-radius: 4rpx;
          color: $primary;
          margin-right: 4rpx;
          margin-bottom: 4rpx;
        }
      }
      &.amount {
        color: #ff8e00;
      }
    }
  }
}
.button-wrapper {
  position: absolute;
  right: $spacing;
  top: 50%;
  transform: translateY(-50%);
}
</style>
