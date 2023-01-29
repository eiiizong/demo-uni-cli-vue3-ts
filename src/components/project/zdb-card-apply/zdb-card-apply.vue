<template>
  <view class="zdb-card-apply" :class="space ? 'space' : ''">
    <div class="bg">
      <img :ssrc="imageBg" alt="" class="img" />
    </div>
    <div class="con">
      <div class="title">
        <div class="icon"></div>
        <div class="name">担保费补贴申请</div>
        <div class="status">进行中</div>
      </div>
      <div class="cells">
        <div class="cell">
          <div class="key">申报机构：</div>
          <div class="value">担保融资公司</div>
        </div>
        <div class="cell">
          <div class="key">申报时间：</div>
          <div class="value">担保融资公司</div>
        </div>
      </div>
      <div class="footer">
        <div class="left">如需查看数据详情，请登录“蓉易贷”网站端查看</div>
        <div class="right">
          <span>流程一览</span>
        </div>
      </div>
    </div>
  </view>
</template>

<script setup lang="ts">
import imageBg from './images/bg.png'

import type { PropType } from 'vue'

interface Item {
  key: string
  value: string | number
  unit: string
}

const emit = defineEmits(['click'])
const props = defineProps({
  // renderData: {
  //   type: Array as PropType<Item[]>,
  //   required: true,
  // },
  renderData: {
    type: Object,
    required: true,
  },
  space: {
    type: Boolean,
    default: false,
  },
})
</script>

<style lang="scss" scoped>
.zdb-table {
  width: 100%;
}
</style>
