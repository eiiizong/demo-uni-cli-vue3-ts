<template>
  <view class="yh-declare-agent-info">
    <YhPanel title="代办人基本信息">
      <div class="yh-declare-agent-info__panel-content declare-form">
        <div class="cell-items">
          <div class="cell-item required disabled">
            <div class="key">姓名</div>
            <div class="value">{{ agentInfo.userName_TM }}</div>
          </div>
          <div class="cell-item required disabled">
            <div class="key">身份证号</div>
            <div class="value">{{ agentInfo.idCard_TM }}</div>
          </div>
          <div class="cell-item required disabled">
            <div class="key">联系电话</div>
            <div class="value">{{ agentInfo.tel_TM }}</div>
          </div>
        </div>
      </div>
    </YhPanel>
  </view>
</template>

<script setup>
/**
 * 代办人信息
 */
import YhPanel from '@/components/project/yh-panel/yh-panel.vue'

import { reactive, watch } from 'vue'

import {
  useGetters,
  useFormatIDCardNumber,
  useFormatPhoneNumber,
  useFormatUserName,
} from '@/hooks/common'
import { USER_INFO } from '@/store/constants'

const emit = defineEmits(['change'])

const { userInfo } = useGetters([USER_INFO])
const agentInfo = reactive({
  idCard: '',
  idCard_TM: '',
  userName: '',
  userName_TM: '',
  tel: '',
  tel_TM: '',
})

const initData = () => {
  const { idCard, userName, tel } = userInfo.value
  agentInfo.idCard = idCard
  agentInfo.idCard_TM = useFormatIDCardNumber(idCard)
  agentInfo.userName = userName
  agentInfo.userName_TM = useFormatUserName(userName)
  agentInfo.tel = tel
  agentInfo.tel_TM = useFormatPhoneNumber(tel)
  emit('change', agentInfo)
}

watch(
  () => userInfo.value.user_id,
  (val) => {
    if (val) {
      initData()
    }
  },
  { immediate: true }
)
</script>
<style lang="scss" scoped>
.yh-declare-agent-info {
  &__panel-content {
    width: 100%;
  }
}
</style>
