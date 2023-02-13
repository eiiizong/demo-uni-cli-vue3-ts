<template>
  <div class="whitelist-feedback custom-form-page">
    <div class="form-wrapper">
      <div class="input-wrapper required">
        <div class="key">填报单位</div>
        <div class="value">
          <input v-model="formData.a1" type="text" class="input" maxlength="20" placeholder="请输入填报单位" />
        </div>
      </div>
      <div class="input-wrapper textarea-wrapper required">
        <div class="key">问题描述</div>
        <div class="value">
          <textarea v-model="formData.a5" class="textarea" maxlength="140" placeholder="请输入问题描述"></textarea>
        </div>
      </div>
      <div class="input-wrapper textarea-wrapper required">
        <div class="key">意见反馈</div>
        <div class="value">
          <textarea v-model="formData.a6" class="textarea" maxlength="140" placeholder="请输入意见反馈"></textarea>
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">联系方式</div>
        <div class="value">
          <input v-model="formData.a9" type="number" class="input" maxlength="11" placeholder="请输入联系方式" />
        </div>
      </div>
    </div>

    <div class="button-wrapper">
      <YhButton block type="primary">提交</YhButton>
    </div>
  </div>
</template>
<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'

  import { reactive } from 'vue'

  const formData = reactive({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a4_desc: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: ''
  })
</script>

<style lang="scss" scoped></style>
