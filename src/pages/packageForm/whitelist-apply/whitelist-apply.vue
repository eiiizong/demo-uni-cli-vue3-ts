<template>
  <div class="whitelist-apply custom-form-page">
    <div class="form-wrapper">
      <ZdbFormInput
        v-model="formData.borrower"
        required
        type="text"
        maxlength="20"
        label="借款人"
        placeholder="请输入借款人" />
      <ZdbFormInput
        v-model="formData.businessEntity"
        required
        disabled
        type="text"
        label="经营主体"
        placeholder="请输入您的经营主体" />
      <ZdbFormPicker
        v-model="formData.industry"
        required
        :range="pickerRange"
        range-key="name"
        range-value="id"
        label="所属行业"
        placeholder="请选择所属行业" />
      <ZdbFormInput
        v-model="formData.registeredAddress"
        required
        type="text"
        maxlength="20"
        label="注册地址"
        placeholder="请输入注册地址" />
      <ZdbFormPicker
        v-model="formData.taxPlace"
        required
        :range="pickerRange"
        range-key="name"
        range-value="id"
        label="缴税地"
        placeholder="请选择缴税地" />
      <ZdbFormInput
        v-model="formData.contactPerson"
        required
        type="text"
        maxlength="20"
        label="联系人"
        placeholder="请输入联系人" />
      <ZdbFormInput
        v-model="formData.contactInformation"
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

  import { reactive, ref, watch, toRefs } from 'vue'
  import { requestW003 } from '@/server/api'
  import { showModal, showToast } from '@/utils/uni-api'
  import { checkPhoneNumber } from '@/utils/check'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 表单
  const formData = reactive({
    /**
     * 借款人
     */
    borrower: '',
    /**
     * 经营主体
     */
    businessEntity: '',
    /**
     * 所属行业
     */
    industry: '',
    /**
     * 注册地址
     */
    registeredAddress: '',
    /**
     * 纳税地
     */
    taxPlace: '',
    /**
     * 联系人姓名
     */
    contactPerson: '',
    /**
     * 联系人联系方式
     */
    contactInformation: '',
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

  // 校验form表达是否输入完成并且正确
  const checkFormData = () => {
    let { borrower, industry, registeredAddress, taxPlace, contactPerson, contactInformation, a8, a9 } = formData

    borrower = borrower.trim()
    if (!borrower) {
      showModal('请输入借款人')
      return false
    } else {
      if (borrower.length < 2) {
        showModal('请输入正确的借款人姓名')
        return false
      }
    }

    if (!industry) {
      showModal('请选择所属行业')
      return false
    }

    registeredAddress = registeredAddress.trim()
    if (!registeredAddress) {
      showModal('请输入注册地址')
      return false
    } else {
      if (registeredAddress.length < 4) {
        showModal('请输入完整的注册地址')
        return false
      }
    }

    if (!taxPlace) {
      showModal('请选择纳税地')
      return false
    }

    contactPerson = contactPerson.trim()
    if (!contactPerson) {
      showModal('请输入联系人')
      return false
    } else {
      if (contactPerson.length < 2) {
        showModal('请输入正确的联系人姓名')
        return false
      }
    }

    contactInformation = contactInformation.trim()
    if (!contactInformation) {
      showModal('请输入联系方式')
      return false
    } else {
      const checkResult = checkPhoneNumber(contactInformation, '联系方式')
      if (!checkResult.isOk) {
        showModal(checkResult.errMsg)
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

    requestW003().then((res) => {
      console.log('res', res)
    })
  }

  // 重置表单
  const onClickReset = () => {
    showToast('重置成功')
  }

  // 监听
  watch(
    () => userInfo.value.orgName,
    (val) => {
      if (val) {
        formData.businessEntity = val
      }
    },
    { immediate: true }
  )
</script>

<style lang="scss" scoped></style>
