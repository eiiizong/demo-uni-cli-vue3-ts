<template>
  <div class="whitelist-feedback custom-form-page">
    <div class="form-wrapper">
      <ZdbFormInput
        v-model="formData.a1"
        required
        type="text"
        maxlength="20"
        label="白名单企业名称"
        placeholder="请输入白名单企业名称" />
      <ZdbFormPicker
        v-model="formData.a2"
        required
        :range="codeData.chb015"
        range-key="label"
        range-value="value"
        label="所属区域"
        placeholder="请选择白名单企业所属区域" />
      <ZdbFormTextarea v-model="formData.a3" required maxlength="140" label="问题描述" placeholder="请输入问题描述" />
      <ZdbFormInput
        v-model="formData.a4"
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

  import type { CodeItem } from '@/server/types/api'
  import { reactive, toRefs, watch } from 'vue'
  import { onLoad } from '@dcloudio/uni-app'
  import { showModal, showToast, showLoading, hideLoading } from '@/utils/uni-api'
  import { formatPhoneNumber } from '@/utils/format'
  import { checkPhoneNumber } from '@/utils/check'
  import { requestGetCode, requestW005 } from '@/server/api'
  import { useStoreUserInfo } from '@/stores/modules'

  const storeUserInfo = useStoreUserInfo()
  const { userInfo } = toRefs(storeUserInfo)

  // 码表
  const codeData = reactive<{
    chb015: CodeItem[]
  }>({
    /**
     * 所属区域码表
     */
    chb015: []
  })

  // 表单数据
  const formData = reactive({
    /**
     * 白名单企业名称
     */
    a1: '',
    /**
     * 所属区域
     */
    a2: '',
    /**
     * 问题描述
     */
    a3: '',
    /**
     * 联系方式 可能为脱敏数据
     */
    a4: '',
    /**
     * 联系方式 未脱敏数据
     */
    a4_old: '',
    /**
     * 填报单位
     */
    a5: ''
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

  // 根据用户信息初始化数据
  const initDataByUserInfo = () => {
    const { tel, orgName } = userInfo.value
    formData.a5 = orgName || ''
    formData.a4 = formatPhoneNumber(tel || '')
    formData.a4_old = tel || ''
  }

  // 校验form表达是否输入完成并且正确
  const checkFormData = () => {
    let { a1, a2, a3, a4, a4_old } = formData

    a1 = a1.trim()
    if (!a1) {
      showModal('请输入白名单企业名称')
      return false
    } else {
      if (a1.length < 4) {
        showModal('请输入正确的白名单企业名称')
        return false
      }
    }

    if (!a2) {
      showModal('请选择所属区域')
      return false
    }

    a3 = a3.trim()
    if (!a3) {
      showModal('请输入问题描述')
      return false
    } else {
      if (a1.length < 10) {
        showModal('请至少输入10个字符！')
        return false
      }
    }

    if (!a4) {
      showModal('请输入联系方式')
      return false
    } else {
      // 不为脱敏后数据
      if (a4 !== formatPhoneNumber(a4_old)) {
        const checkResult = checkPhoneNumber(a4, '联系方式')
        // 未校验通过
        if (!checkResult.isOk) {
          showModal(checkResult.errMsg)
          return false
        }
      }
    }

    return true
  }

  // 提交表单
  const onClickSubmit = () => {
    const { a1, a2, a3, a4, a4_old, a5 } = formData
    const checkResult = checkFormData()
    if (!checkResult) {
      return false
    }

    let tel = ''
    if (a4 === formatPhoneNumber(a4_old)) {
      tel = a4_old
    } else {
      tel = a4
    }

    requestW005(a1, a2, a3, tel, a5).then(() => {
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
    showTip && showToast('重置成功')
  }

  watch(
    () => userInfo.value.orgName,
    (val) => {
      if (val) {
        initDataByUserInfo()
      }
    },
    { immediate: true }
  )

  onLoad(() => {
    getCodeData()
  })
</script>

<style lang="scss" scoped></style>
