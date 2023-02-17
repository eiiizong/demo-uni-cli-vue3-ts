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
        :range="codeData.chb015"
        range-key="label"
        range-value="value"
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
        :model-value="formatPhoneNumber(formData.a9)"
        required
        disabled
        type="text"
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

  import type { CodeItem } from '@/server/types/api'
  import { reactive, toRefs, watch } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { showModal, showToast, showLoading, hideLoading } from '@/utils/uni-api'
  import { formatPhoneNumber } from '@/utils/format'
  import { requestGetCode, requestW004 } from '@/server/api'
  import { checkSocialCode } from '@/utils/check'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 码表
  const codeData = reactive<{
    chb015: CodeItem[]
  }>({
    /**
     * 纳税地码表
     */
    chb015: []
  })

  // 表单数据
  const formData = reactive({
    /**
     * 融资主体名称
     */
    a1: '',
    /**
     * 合作银行
     */
    a2: '',
    /**
     * 统一社会信用代码
     */
    a3: '',
    /**
     * 缴税地
     */
    a4: '',
    /**
     * 贷款用途
     */
    a5: '',
    /**
     * 融资期限
     */
    a6: '',
    /**
     * 拟申请额度
     */
    a7: '',
    /**
     * 联系人
     */
    a8: '',
    /**
     * 联系方式
     */
    a9: ''
  })

  // 获取码表
  const getCodeData = async () => {
    showLoading()

    const data = await Promise.allSettled([
      // 纳税地
      requestGetCode('chb015', false)
    ])

    const [res00] = data

    if (res00.status === 'fulfilled' && res00.value) {
      codeData.chb015 = [...res00.value.codeList]
    }

    hideLoading()
  }

  // 校验form表达是否输入完成并且正确
  const checkFormData = () => {
    let { a2, a3, a4, a5, a6, a7, a8 } = formData

    a2 = a2.trim()
    if (!a2) {
      showModal('请输入合作银行')
      return false
    } else {
      if (a2.length < 4) {
        showModal('请输入正确的合作银行')
        return false
      }
    }

    a3 = a3.trim()
    if (!a3) {
      showModal('请输入统一社会信用代码')
      return false
    } else {
      if (!checkSocialCode(a3)) {
        showModal('请输入正确的统一社会信用代码')
        return false
      }
    }

    if (!a4) {
      showModal('请选择纳税地')
      return false
    }

    a5 = a5.trim()
    if (!a5) {
      showModal('请输入贷款用途')
      return false
    }

    a6 = a6.trim()
    if (!a6) {
      showModal('请输入融资期限')
      return false
    } else {
      if (Number(a6) > 2) {
        showModal('融资期限需小于2年，请重新输入！')
        return false
      }
    }

    a7 = a7.trim()
    if (!a7) {
      showModal('请输入拟申请额度')
      return false
    }

    a8 = a8.trim()
    if (!a8) {
      showModal('请输入联系人')
      return false
    } else {
      if (a8.length < 2) {
        showModal('请输入正确的联系人姓名')
        return false
      }
    }

    return true
  }

  // 提交表单
  const onClickSubmit = () => {
    const { a1, a2, a3, a4, a5, a6, a7, a8, a9 } = formData
    const checkResult = checkFormData()
    if (!checkResult) {
      return false
    }

    requestW004(a1, a3, a5, a6, a7, a8, a9, a4, a2).then(() => {
      showToast('提交成功', 'success').then(() => {
        setTimeout(() => {
          onClickReset(false)
        }, 1500)
      })
    })
  }

  // 重置表单
  const onClickReset = (showTip = true) => {
    formData.a1 = ''
    formData.a2 = ''
    formData.a3 = ''
    formData.a4 = ''
    formData.a5 = ''
    formData.a5 = ''
    formData.a7 = ''
    formData.a8 = ''
    formData.a9 = ''
    showTip && showToast('重置成功')
  }

  watch(
    () => userInfo.value.orgName,
    (val) => {
      if (val) {
        const { tel } = userInfo.value
        formData.a1 = val
        formData.a9 = tel || ''
      }
    },
    { immediate: true }
  )

  onLoad(() => {
    getCodeData()
  })
</script>

<style lang="scss" scoped></style>
