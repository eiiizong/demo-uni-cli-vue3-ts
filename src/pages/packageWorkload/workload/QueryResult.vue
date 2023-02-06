<template>
  <view class="query-result">
    <div class="wrapper">
      <ZdbTitle title="保费补贴支付" />
      <div class="title-wrapper">
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
    <div class="wrapper">
      <ZdbTitle title="合作机构准入" />
      <div class="title-wrapper">
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
    <div class="wrapper">
      <ZdbTitle title="白名单企业" />
      <div class="title-wrapper">
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
      <div class="title-wrapper">
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
  .query-result {
    width: 100%;
  }
</style>
