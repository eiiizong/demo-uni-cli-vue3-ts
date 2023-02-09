<template>
  <div class="financing">
    <div class="form-wrapper">
      <div class="input-wrapper required">
        <div class="key">融资主体名称</div>
        <div class="value">
          <input v-model="formData.a1" type="text" class="input" maxlength="20" placeholder="请输入单位名称" />
        </div>
      </div>
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
      <div class="input-wrapper required">
        <div class="key">缴税地</div>
        <div class="value">
          <picker class="picker">
            <div class="picker-content">
              <div v-if="formData.a5" class="picker-value"></div>
              <div v-else class="picker-placeholder">请选择纳税地</div>
            </div>
          </picker>
        </div>
      </div>
      <div class="input-wrapper textarea-wrapper required">
        <div class="key">贷款用途</div>
        <div class="value">
          <textarea v-model="formData.a5" class="textarea" maxlength="140" placeholder="请输入贷款用途"></textarea>
        </div>
      </div>
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

  import { reactive } from 'vue'

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
</script>

<style lang="scss" scoped>
  $color-key: #3d424d;
  $color-value: #a1a7b3;
  $input-height: 82rpx;
  $input-font-size: 30rpx;
  $input-line-height: 42rpx;

  .financing {
    width: 100%;
    padding: $spacing;
    .form-wrapper {
      width: 100%;
      background-color: #ffffff;
      box-shadow: 0rpx 2rpx 24rpx 0rpx rgba(8, 76, 192, 0.06);
      border-radius: 16rpx;
      padding: 20rpx 40rpx;
      font-size: $input-font-size;
      line-height: $input-line-height;
      .input-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $color-border;

        .key {
          font-weight: 500;
          color: $color-key;
          padding: calc(($input-height - 2rpx - $input-line-height) / 2) 0;
          position: relative;
          padding-left: 16rpx;
        }
        .value {
          flex: 1;
          overflow: hidden;
          min-height: $input-height;
          display: flex;
          margin-left: 30rpx;
        }
        .input {
          display: block;
          width: 100%;
          height: $input-height;
          font-weight: 500;
          text-align: right;
          color: $color-value;
          padding: calc(($input-height - 2rpx - $input-line-height) / 2) 0;
          font-size: $input-font-size;
          line-height: $input-line-height;
        }
        .picker {
          width: 100%;
          .picker-content {
            width: 100%;
            min-height: $input-height;
            padding: calc(($input-height - 2rpx - $input-line-height) / 2) 0;
          }
          .picker-value,
          .picker-placeholder {
            width: 100%;
            text-align: right;
            font-weight: 500;
            transition: all 0.3s;
          }
          .picker-value {
            color: $color-value;
          }
          .picker-placeholder {
            color: #7a7a7a;
          }
        }

        &.required {
          .key {
            &::before {
              content: '*';
              position: absolute;
              top: 50%;
              left: 0;
              color: #f00;
              transform: translateY(-50%);
              margin-top: -4rpx;
            }
          }
        }
        &.textarea-wrapper {
          display: block;
          padding-bottom: 20rpx;
          .key {
            width: 100%;
          }
          .value {
            display: block;
            width: 100%;
            margin: 0;
          }
          .textarea {
            width: 100%;
            height: 200rpx;
            border: 1px solid $color-border;
            border-radius: 4rpx;
            padding: 8rpx 12rpx;
            font-weight: 500;
            color: $color-value;
            font-size: 30rpx;
            line-height: 36rpx;
            background-color: $color-page;
            text-align: left;
          }
        }
      }
    }
    .button-wrapper {
      padding-top: $spacing;
    }
  }
</style>
