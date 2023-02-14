<template>
  <div class="whitelist-apply custom-form-page">
    <div class="form-wrapper">
      <ZdbFormInput
        v-model="formData.a1"
        required
        type="text"
        maxlength="20"
        label="借款人"
        placeholder="请输入借款人" />
      <ZdbFormInput
        v-model="formData.a2"
        required
        type="text"
        maxlength="20"
        label="经营主体"
        placeholder="请输入您的经营主体" />
      <ZdbFormPicker
        v-model="formData.a3"
        required
        :range="pickerRange"
        range-key="name"
        range-value="id"
        label="所属行业"
        placeholder="请选择所属行业" />
      <ZdbFormInput
        v-model="formData.a4"
        required
        type="text"
        maxlength="20"
        label="注册地址"
        placeholder="请输入注册地址" />
      <ZdbFormPicker
        v-model="formData.a5"
        required
        :range="pickerRange"
        range-key="name"
        range-value="id"
        label="缴税地"
        placeholder="请选择缴税地" />
      <ZdbFormInput
        v-model="formData.a6"
        required
        type="text"
        maxlength="20"
        label="联系人"
        placeholder="请输入联系人" />
      <ZdbFormInput
        v-model="formData.a7"
        required
        type="number"
        maxlength="11"
        label="联系方式"
        placeholder="请输入联系方式" />
      <ZdbFormPicker
        v-model="formData.a8"
        :range="pickerRange"
        range-key="name"
        range-value="id"
        label="企业类型"
        placeholder="请选择企业类型" />
      <ZdbFormInput
        v-model="formData.a9"
        type="digit"
        maxlength="12"
        label="贷款金额"
        placeholder="请输入贷款金额(小于1000万)" />
      <ZdbFormTextarea v-model="formData.a10" maxlength="140" label="贷款用途" placeholder="请输入贷款用途" />
      <ZdbFormInput
        v-model="formData.a11"
        type="digit"
        maxlength="6"
        label="贷款期限"
        placeholder="请输入贷款期限(小于2年)" />

      <ZdbFormPicker
        v-model="formData.a12"
        :range="pickerRange"
        range-key="name"
        range-value="id"
        label="是否贷过款"
        placeholder="请选择是否贷过款" />

      <ZdbFormInput
        v-model="formData.a13"
        type="digit"
        maxlength="10"
        label="上一年度缴税金额"
        placeholder="请输入金额(万元)" />

      <ZdbFormInput
        v-model="formData.a14"
        type="digit"
        maxlength="10"
        label="上一年度主营业务收入"
        placeholder="请输入金额(万元)" />
      <ZdbFormInput
        v-model="formData.a15"
        type="digit"
        maxlength="10"
        label="目前负债情况"
        placeholder="请输入金额(万元)" />
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
  import ZdbFormPicker from '@/components/project/zdb-form-picker/zdb-form-picker.vue'

  import { reactive, ref } from 'vue'

  const formData = reactive({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: '',
    a10: '',
    a11: '',
    a12: '',
    a13: '',
    a14: '',
    a15: '',
    a16: ''
  })

  const pickerRange = ref([
    {
      id: '0',
      name: '测试1'
    },
    {
      id: '1',
      name: '测试2'
    }
  ])
</script>

<style lang="scss" scoped></style>
