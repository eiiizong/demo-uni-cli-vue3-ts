<template>
  <view class="org-details">
    <BasicInfo :org-id="orgId" :render-data="customData.basicInfo" />
    <Tabs />
  </view>
</template>

<script setup lang="ts">
  import BasicInfo from './BasicInfo.vue'
  import Tabs from './Tabs.vue'

  import { ref, reactive } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'

  const orgId = ref('')

  const customData = reactive({
    basicInfo: {}
  })

  onLoad((e) => {
    const { id } = e
    if (id) {
      orgId.value = id
    }
  })
</script>

<style lang="scss" scoped>
  .org-details {
    width: 100%;
  }
</style>
