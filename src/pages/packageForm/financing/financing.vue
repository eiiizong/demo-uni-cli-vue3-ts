<template>
  <div class="financing custom-form-page">
    <div class="form-wrapper">
      <ZdbFormInput
        v-model="formData.a1"
        required
        type="text"
        maxlength="20"
        label="融资主体名称"
        placeholder="请输入单位名称" />
      <ZdbFormInput
        v-model="formData.a2"
        required
        type="text"
        maxlength="20"
        label="合作银行"
        placeholder="请输入合作银行" />
      <ZdbFormInput
        v-model="formData.a3"
        required
        type="text"
        maxlength="18"
        label="统一社会信用代码"
        placeholder="请输入" />
      <ZdbFormPicker
        v-model="formData.a4"
        required
        :range="pickerRange"
        range-key="name"
        range-value="id"
        label="缴税地"
        placeholder="请选择纳税地" />
      <ZdbFormTextarea v-model="formData.a5" required maxlength="140" label="贷款用途" placeholder="请输入贷款用途" />
      <ZdbFormInput
        v-model="formData.a6"
        required
        type="digit"
        maxlength="6"
        label="融资期限"
        placeholder="请输入融资期限(单位：年)" />
      <ZdbFormInput
        v-model="formData.a7"
        required
        type="digit"
        maxlength="6"
        label="拟申请额度"
        placeholder="请输入金额(单位：万元)" />
      <ZdbFormInput
        v-model="formData.a8"
        required
        type="text"
        maxlength="20"
        label="联系人"
        placeholder="请输入联系人" />
      <ZdbFormInput
        v-model="formData.a9"
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
  import ZdbFormPicker from '@/components/project/zdb-form-picker/zdb-form-picker.vue'

  import { reactive, ref } from 'vue'

  // 表单数据
  const formData = reactive({
    a1: '',
    a2: '',
    a3: '',
    a4: '',
    a5: '',
    a6: '',
    a7: '',
    a8: '',
    a9: ''
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
