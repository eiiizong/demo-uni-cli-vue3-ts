<template>
  <div class="financing custom-form-page">
    <div class="form-wrapper">
      <ZdbFormInput
        v-model="formData.a1"
        required
        disabled
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
        placeholder="请输入融资期限(单位:年,小于2年)" />
      <ZdbFormInput
        v-model="formData.a7"
        required
        type="digit"
        maxlength="20"
        label="拟申请额度"
        placeholder="请输入金额（单位:万元）" />
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
      <YhButton block type="primary" @click="onClickSubmit">提交</YhButton>
      <YhButton
        block
        type="primary"
        custom-style="border:0; background-color: transparent;"
        plain
        @click="onClickReset">
        重置
      </YhButton>
    </div>
  </div>
</template>
<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'

  import ZdbFormInput from '@/components/project/zdb-form-input/zdb-form-input.vue'
  import ZdbFormTextarea from '@/components/project/zdb-form-textarea/zdb-form-textarea.vue'
  import ZdbFormPicker from '@/components/project/zdb-form-picker/zdb-form-picker.vue'

  import { reactive, ref, toRefs, watch } from 'vue'
  import { showModal, showToast } from '@/utils/uni-api'
  import { checkSocialCode } from '@/utils/check'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

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

  // 校验form表达是否输入完成并且正确
  const checkFormData = () => {
    let { a1, a2, a3, a4, a5, a6, a7, a8, a9 } = formData
    if (!a2) {
      showModal('请输入合作银行')
      return false
    } else {
      a2 = a2.trim()
      if (a2.length < 4) {
        showModal('请输入正确的合作银行')
        return false
      }
    }

    if (!a3) {
      showModal('请输入统一社会信用代码')
      return false
    } else {
      if (!checkSocialCode(a3)) {
        showModal('请输入正确的统一社会信用代码')
        return false
      }
    }
  }

  // 提交表单
  const onClickSubmit = () => {
    const checkResult = checkFormData()
    if (!checkResult) {
      return false
    }
  }

  // 重置表单
  const onClickReset = () => {
    showToast('重置成功')
  }

  watch(
    () => userInfo.value.orgName,
    (val) => {
      if (val) {
        formData.a1 = val
      }
    },
    { immediate: true }
  )
</script>

<style lang="scss" scoped></style>
