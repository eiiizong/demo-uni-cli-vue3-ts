<template>
  <view class="query-result">
    <ZdbTitle title="当前对象" />
    <div class="cells">
      <div class="cell">
        <div class="key">李小兵</div>
        <div class="value"></div>
        <div class="icon"></div>
      </div>
    </div>
    <ZdbTitle title="其他条件" />
    <div class="cells">
      <div class="cell">
        <div class="key">单位</div>
        <div class="value">成都经济技术开发区中小企业融资担保有限公司</div>
      </div>
      <div class="cell">
        <div class="key">地区</div>
        <div class="value">四川-成都</div>
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
