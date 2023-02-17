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
        :range="codeData.crb116"
        range-key="label"
        range-value="value"
        label="所属行业"
        placeholder="请选择所属行业" />
      <ZdbFormInput
        v-model="formData.registeredAddress"
        required
        type="text"
        maxlength="20"
        label="注册地址"
        placeholder="请输入注册地址" />
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
        v-model="formData.taxPlace"
        required
        :range="codeData.chb015"
        range-key="label"
        range-value="value"
        label="缴税地"
        placeholder="请选择缴税地" />
      <ZdbFormPicker
        v-if="formData.taxPlace && codeData.crb19n && codeData.crb19n.length > 0"
        v-model="formData.crb19n"
        :range="codeData.crb19n"
        range-key="orgName"
        range-value="orgId"
        label="区县产业部门"
        placeholder="请选择区县产业部门" />
      <ZdbFormPicker
        v-model="formData.typeOfEnterprise"
        :range="codeData.enterprisetype"
        range-key="label"
        range-value="value"
        label="企业类型"
        placeholder="请选择企业类型" />
      <ZdbFormInput
        v-model="formData.loanAmount"
        type="digit"
        maxlength="9"
        label="贷款金额"
        placeholder="请输入金额(单位:万元,小于1000万)" />
      <ZdbFormTextarea v-model="formData.loanPurpose" maxlength="140" label="贷款用途" placeholder="请输入贷款用途" />
      <ZdbFormInput
        v-model="formData.loanTerm"
        type="digit"
        maxlength="6"
        label="贷款期限"
        placeholder="请输入贷款期限(小于2年)" />

      <ZdbFormPicker
        v-model="formData.borrowerd"
        :range="codeData.yesorno"
        range-key="label"
        range-value="value"
        label="是否贷过款"
        placeholder="请选择是否贷过款" />

      <ZdbFormInput
        v-model="formData.taxAmount"
        type="digit"
        maxlength="10"
        label="上一年度缴税金额"
        placeholder="请输入金额(万元)" />

      <ZdbFormInput
        v-model="formData.businessIncome"
        type="digit"
        maxlength="10"
        label="上一年度主营业务收入"
        placeholder="请输入金额(万元)" />
      <ZdbFormInput
        v-model="formData.debtSituation"
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

  import type { CodeItem, GetIndustrialSectorSuccessResultListItem } from '@/server/types/api'
  import { reactive, watch, toRefs } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { requestGetCode, requestGetIndustrialSector, requestW003 } from '@/server/api'
  import { showModal, showToast, showLoading, hideLoading } from '@/utils/uni-api'
  import { checkPhoneNumber } from '@/utils/check'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 码表
  const codeData = reactive<{
    yesorno: CodeItem[]
    crb116: CodeItem[]
    chb015: CodeItem[]
    enterprisetype: CodeItem[]
    crb19n: GetIndustrialSectorSuccessResultListItem[]
  }>({
    /**
     * 是与否码表
     */
    yesorno: [],
    /**
     * 所属行业码表
     */
    crb116: [],
    /**
     * 纳税地码表
     */
    chb015: [],
    /**
     * 企业类型码表
     */
    enterprisetype: [],
    /**
     * 企业类型码表
     */
    crb19n: []
  })

  // 表单
  const formData = reactive({
    /**
     * 区县产业部门
     */
    crb19n: '',
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
    /**
     * 企业类型
     */
    typeOfEnterprise: '',
    /**
     * 贷款金额(万元)
     */
    loanAmount: '',
    /**
     * 贷款用途
     */
    loanPurpose: '',
    /**
     * 贷款期限
     */
    loanTerm: '',
    /**
     * 是否贷过款
     */
    borrowerd: '',
    /**
     * 上一年度缴税金额(万元)
     */
    taxAmount: '',
    /**
     * 上一年度主营业务收入(万元)
     */
    businessIncome: '',
    /**
     * 目前负债情况(万元)
     */
    debtSituation: ''
  })

  // 获取码表
  const getCodeData = async () => {
    showLoading()

    const data = await Promise.allSettled([
      // 行业
      requestGetCode('crb116', false),
      // 是否
      requestGetCode('yesorno', false),
      // 纳税地
      requestGetCode('chb015', false),
      // 企业类型
      requestGetCode('enterprisetype', false)
    ])

    const [res00, res01, res02, res03] = data

    if (res00.status === 'fulfilled' && res00.value) {
      codeData.crb116 = [...res00.value.codeList]
    }

    if (res01.status === 'fulfilled' && res01.value) {
      codeData.yesorno = [...res01.value.codeList]
    }

    if (res02.status === 'fulfilled' && res02.value) {
      codeData.chb015 = [...res02.value.codeList]
    }

    if (res03.status === 'fulfilled' && res03.value) {
      codeData.enterprisetype = [...res03.value.codeList]
    }

    hideLoading()
  }

  // 校验form表达是否输入完成并且正确
  const checkFormData = () => {
    let { borrower, industry, registeredAddress, taxPlace, contactPerson, contactInformation, loanAmount, loanTerm } =
      formData

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

    if (!taxPlace) {
      showModal('请选择纳税地')
      return false
    }

    // 以下非必填项填写之后需校验格式是否正确
    if (loanAmount && Number(loanAmount) > 1000) {
      showModal('贷款金额需小于1000万元，请重新输入！')
      return false
    }

    if (loanTerm && Number(loanTerm) > 2) {
      showModal('贷款期限需小于2年，请重新输入！')
      return false
    }

    return true
  }

  // 提交表单
  const onClickSubmit = () => {
    let {
      borrower,
      businessEntity,
      industry,
      registeredAddress,
      taxPlace,
      crb19n,
      contactPerson,
      contactInformation,
      typeOfEnterprise,
      loanAmount,
      loanPurpose,
      loanTerm,
      borrowerd,
      taxAmount,
      businessIncome,
      debtSituation
    } = formData
    const checkResult = checkFormData()
    if (!checkResult) {
      return false
    }

    requestW003(
      borrower,
      businessEntity,
      industry,
      registeredAddress,
      taxPlace,
      crb19n,
      contactPerson,
      contactInformation,
      typeOfEnterprise,
      loanAmount,
      loanPurpose,
      loanTerm,
      borrowerd,
      taxAmount,
      businessIncome,
      debtSituation
    ).then(() => {
      showToast('提交成功', 'success').then(() => {
        setTimeout(() => {
          onClickReset(false)
        }, 1500)
      })
    })
  }

  // 重置表单
  const onClickReset = (showTip = true) => {
    formData.borrower = ''
    formData.industry = ''
    formData.registeredAddress = ''
    formData.contactPerson = ''
    formData.contactInformation = ''
    formData.taxPlace = ''
    formData.crb19n = ''
    formData.typeOfEnterprise = ''
    formData.loanAmount = ''
    formData.loanTerm = ''
    formData.borrowerd = ''
    formData.taxAmount = ''
    formData.businessIncome = ''
    formData.debtSituation = ''
    showTip && showToast('重置成功')
  }

  // 监听 userInfo
  watch(
    () => userInfo.value.orgName,
    (val) => {
      if (val) {
        formData.businessEntity = val
      }
    },
    { immediate: true }
  )

  // 监听 taxPlace 缴税地改变
  watch(
    () => formData.taxPlace,
    (val) => {
      if (val) {
        requestGetIndustrialSector(val).then((res) => {
          codeData.crb19n = [...res]
        })
      }
    },
    { immediate: true }
  )

  onLoad(() => {
    getCodeData()
  })
</script>

<style lang="scss" scoped></style>
