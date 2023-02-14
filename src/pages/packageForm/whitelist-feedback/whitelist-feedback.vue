<template>
  <div class="whitelist-feedback custom-form-page">
    <div class="form-wrapper">
      <ZdbFormInput
        v-model="formData.a1"
        required
        type="text"
        maxlength="20"
        label="填报单位"
        placeholder="请输入填报单位" />
      <ZdbFormTextarea v-model="formData.a2" required maxlength="140" label="问题描述" placeholder="请输入问题描述" />
      <ZdbFormTextarea v-model="formData.a3" required maxlength="140" label="意见反馈" placeholder="请输入意见反馈" />
      <ZdbFormInput
        v-model="formData.a4"
        required
        type="number"
        maxlength="11"
        label="联系方式"
        placeholder="请输入联系方式" />
    </div>

    <div class="button-wrapper">
      <YhButton block type="primary">提交</YhButton>
    </div>
  </div>
</template>
<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'

  import ZdbFormInput from '@/components/project/zdb-form-input/zdb-form-input.vue'
  import ZdbFormTextarea from '@/components/project/zdb-form-textarea/zdb-form-textarea.vue'

  import { reactive } from 'vue'

  const formData = reactive({
    a1: '',
    a2: '',
    a3: '',
    a4: ''
  })
</script>

<style lang="scss" scoped></style>
