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
          <input v-model="formData.a3" type="text" class="input" maxlength="20" placeholder="请输入统一社会信用代码" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">缴税地</div>
        <div class="value">
          <picker class="picker">
            <div class="picker-content">
              <div class="picker-value" v-if="formData.a5"></div>
              <div class="picker-placeholder" v-else>请选择纳税地</div>
            </div>
          </picker>
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">贷款用途</div>
        <div class="value">
          <input v-model="formData.a5" type="text" class="input" placeholder="请输入单位名称" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">融资期限</div>
        <div class="value">
          <input v-model="formData.a6" type="number" class="input" placeholder="请输入融资期限（单位：年，小于2年）" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">拟申请额度</div>
        <div class="value">
          <input v-model="formData.a7" type="text" class="input" placeholder="请输入拟申请额度" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">联系人</div>
        <div class="value">
          <input v-model="formData.a8" type="text" class="input" placeholder="请输入联系人" />
        </div>
      </div>
      <div class="input-wrapper required">
        <div class="key">联系方式</div>
        <div class="value">
          <input v-model="formData.a9" type="text" class="input" placeholder="请输入联系方式" />
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
  .financing {
    width: 100%;
    padding: $spacing;
    .form-wrapper {
      width: 100%;
      background-color: #ffffff;
      box-shadow: 0rpx 2rpx 24rpx 0rpx rgba(8, 76, 192, 0.06);
      border-radius: 16rpx;
      padding: 20rpx 40rpx;
      .input-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $color-border;

        .key {
          font-size: 30rpx;
          font-weight: 400;
          color: #3d424d;
          line-height: 42rpx;
          padding: 32rpx 0;
          position: relative;
          padding-left: 16rpx;
        }
        .value {
          flex: 1;
          overflow: hidden;
          display: flex;
          margin-left: 30rpx;
        }
        .input {
          display: block;
          width: 100%;
          font-size: 30rpx;
          text-align: right;
          line-height: 1.4;
          color: #9b9b9f;
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
      }
    }
    .button-wrapper {
      padding-top: $spacing;
    }
  }
</style>
