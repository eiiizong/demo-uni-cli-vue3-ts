<template>
  <div class="whitelist-apply custom-form-page">
    <div class="form-wrapper">
      <div class="input-wrapper required">
        <div class="key">借款人</div>
        <div class="value">
          <input v-model="formData.a1" type="text" class="input" maxlength="20" placeholder="请输入借款人" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">经营主体</div>
        <div class="value">
          <input v-model="formData.a2" type="text" class="input" maxlength="20" placeholder="请输入经营主体" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">所属行业</div>
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
              <div v-else class="picker-placeholder">请选择所属行业</div>
              <YhIcon class="picker-icon" color="#7a7a7a" name="picker" size="28rpx" />
            </div>
          </picker>
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">注册地址</div>
        <div class="value">
          <input v-model="formData.a3" type="text" class="input" maxlength="20" placeholder="请输入注册地址" />
        </div>
      </div>
      <div class="input-wrapper required">
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
              <div v-else class="picker-placeholder">请选择缴税地</div>
              <YhIcon class="picker-icon" color="#7a7a7a" name="picker" size="28rpx" />
            </div>
          </picker>
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

      <div class="input-wrapper">
        <div class="key">企业类型</div>
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
              <div v-else class="picker-placeholder">请选择企业类型</div>
              <YhIcon class="picker-icon" color="#7a7a7a" name="picker" size="28rpx" />
            </div>
          </picker>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="key">贷款金额</div>
        <div class="value">
          <input
            v-model="formData.a6"
            type="digit"
            class="input"
            maxlength="20"
            placeholder="请输入贷款金额(小于1000万)" />
        </div>
      </div>
      <div class="input-wrapper textarea-wrapper">
        <div class="key">贷款用途</div>
        <div class="value">
          <textarea v-model="formData.a5" class="textarea" maxlength="140" placeholder="请输入贷款用途"></textarea>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="key">贷款期限</div>
        <div class="value">
          <input v-model="formData.a7" type="digit" class="input" maxlength="20" placeholder="请输入贷款期限" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="key">是否贷过款</div>
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
              <div v-else class="picker-placeholder">请选择是否贷过款</div>
              <YhIcon class="picker-icon" color="#7a7a7a" name="picker" size="28rpx" />
            </div>
          </picker>
        </div>
      </div>
      <div class="input-wrapper">
        <div class="key">上一年度缴税金额</div>
        <div class="value">
          <input v-model="formData.a7" type="digit" class="input" maxlength="20" placeholder="请输入金额(万元)" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="key">上一年度主营业务收入</div>
        <div class="value">
          <input v-model="formData.a7" type="digit" class="input" maxlength="20" placeholder="请输入金额(万元)" />
        </div>
      </div>
      <div class="input-wrapper">
        <div class="key">目前负债情况</div>
        <div class="value">
          <input v-model="formData.a7" type="digit" class="input" maxlength="20" placeholder="请输入金额(万元)" />
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
  import YhIcon from '@/components/yh/icon/icon.vue'

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

  const onChangePicker = (event: WechatMiniprogram.PickerChange) => {
    const { value } = event.detail
    pickerValue.value = value as string
    formData.a4_desc = pickerRange.value[Number(value)].name
    console.log('value', value)
  }
</script>

<style lang="scss" scoped></style>
