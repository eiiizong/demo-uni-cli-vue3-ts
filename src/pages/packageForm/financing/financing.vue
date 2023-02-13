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
      <div class="input-wrapper required">
        <div class="key">合作银行</div>
        <div class="value">
          <input v-model="formData.a2" type="text" class="input" maxlength="20" placeholder="请输入合作银行" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">统一社会信用代码</div>
        <div class="value">
          <input v-model="formData.a3" type="text" class="input" maxlength="20" placeholder="请输入" />
        </div>
      </div>
      <ZdbFormPicker v-model="formData.a5" required label="缴税地" placeholder="请选择纳税地" />
      <!-- <div class="input-wrapper required">
        <div class="key">缴税地</div>
        <div class="value">
          <picker
            class="picker"
            mode="selector"
            range-key="name"
            :range="pickerRange"
            :value="pickerValue"
            @change="onChangePicker">
            <div class="picker-content">
              <div v-if="pickerValue" class="picker-value">{{ formData.a4_desc }}</div>
              <div v-else class="picker-placeholder">请选择纳税地</div>
              <YhIcon class="picker-icon" color="#7a7a7a" name="picker" size="28rpx" />
            </div>
          </picker>
        </div>
      </div> -->
      <ZdbFormTextarea v-model="formData.a5" required maxlength="140" label="贷款用途" placeholder="请输入贷款用途" />
      <div class="input-wrapper required">
        <div class="key">融资期限</div>
        <div class="value">
          <input
            v-model="formData.a6"
            type="digit"
            class="input"
            maxlength="20"
            placeholder="请输入融资期限(单位：年)" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">拟申请额度</div>
        <div class="value">
          <input v-model="formData.a7" type="digit" class="input" maxlength="20" placeholder="请输入金额(单位：万元)" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">联系人</div>
        <div class="value">
          <input v-model="formData.a8" type="text" class="input" maxlength="20" placeholder="请输入联系人" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">联系方式</div>
        <div class="value">
          <input v-model="formData.a9" type="number" class="input" maxlength="20" placeholder="请输入联系方式" />
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

  import ZdbFormInput from '@/components/project/zdb-form-input/zdb-form-input.vue'
  import ZdbFormTextarea from '@/components/project/zdb-form-textarea/zdb-form-textarea.vue'
  import ZdbFormPicker from '@/components/project/zdb-form-picker/zdb-form-picker.vue'

  import { reactive, ref } from 'vue'

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

  const pickerValue = ref('')
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
