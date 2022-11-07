<template>
  <view class="yh-declare-base-info">
    <YhPanel title="企业基本信息">
      <div class="yh-declare-base-info__panel-content declare-form">
        <div class="declare-tip">
          以下数据来源为阿坝州市场监督管理局，如有误，请联系数据来源方进行修正。联系电话：0823-2171013
        </div>
        <div class="cell-items">
          <div class="cell-item required disabled">
            <div class="key">企业名称</div>
            <div class="value">{{ basicInfo.aab012 || '暂无' }}</div>
          </div>
          <div class="cell-item required disabled">
            <div class="key">企业统一社会信用代码</div>
            <div class="value">{{ basicInfo.aab01w || '暂无' }}</div>
          </div>
          <div class="cell-item required disabled">
            <div class="key">企业类型</div>
            <div class="value">{{ basicInfo.aab014Desc || '暂无' }}</div>
          </div>
          <div class="cell-item required disabled">
            <div class="key">成立日期</div>
            <div class="value">{{ basicInfo.aab018Desc || '暂无' }}</div>
          </div>
          <div class="cell-item required disabled">
            <div class="key">法定代表人</div>
            <div class="value">{{ basicInfo.aac003 || '暂无' }}</div>
          </div>
          <div class="cell-item required disabled">
            <div class="key">注册地址</div>
            <div class="value">{{ basicInfo.aab019 || '暂无' }}</div>
          </div>
          <div class="cell-item required disabled textarea">
            <div class="key">主营业务（经营范围）</div>
            <div class="value">{{ basicInfo.aab01t || '暂无' }}</div>
          </div>
        </div>
        <div class="declare-tip">
          以下数据由企业自主填报
        </div>
        <div class="cell-items">
          <YhDeclarePicker
            label="生产经营地址（项目申报地址）"
            idName="aae006"
            required
            rangeKey="orgname"
            valueKey="orgid"
            placeholder="请选择"
            :range="codeTableData.aae006"
            v-model="basicInfo.aae006"
          ></YhDeclarePicker>
          <YhDeclarePicker
            label="开户行名称"
            idName="aae008"
            required
            placeholder="请选择开户行名称"
            :range="codeTableData.aae008"
            v-model="basicInfo.aae008"
          ></YhDeclarePicker>

          <div class="cell-item required">
            <div class="key">开户行账号</div>
            <div class="value">
              <input
                class="input"
                type="text"
                maxlength="30"
                v-model="basicInfo.aae010"
                placeholder="请输入开户行名称"
              />
            </div>
          </div>
          <div class="cell-item required">
            <div class="key">企业联系人</div>
            <div class="value">
              <input
                class="input"
                type="text"
                maxlength="20"
                v-model="basicInfo.aae004"
                placeholder="请输入企业联系人"
              />
            </div>
          </div>
          <div class="cell-item required">
            <div class="key">联系人职务</div>
            <div class="value">
              <input
                class="input"
                type="text"
                maxlength="20"
                v-model="basicInfo.aae007"
                placeholder="请输入联系人职务"
              />
            </div>
          </div>
          <div class="cell-item required">
            <div class="key">联系人电话</div>
            <div class="value">
              <input
                class="input"
                type="number"
                maxlength="11"
                v-model="basicInfo.aae005"
                placeholder="请输入联系人电话"
              />
            </div>
          </div>
          <div class="cell-item required">
            <div class="key">联系人邮箱</div>
            <div class="value">
              <input
                class="input"
                type="text"
                v-model="basicInfo.aae012"
                placeholder="请输入联系人邮箱"
              />
            </div>
          </div>
        </div>
      </div>
    </YhPanel>
  </view>
</template>

<script setup>
/**
 * 申报人基本信息
 */
import YhPanel from '@/components/project/yh-panel/yh-panel.vue'
import YhDeclarePicker from '@/components/project/yh-declare-picker/yh-declare-picker.vue'

import { reactive, watch } from 'vue'
import { requestGetCollectionData } from '@/server'
import { useGetters } from '@/hooks/common'

import { USER_INFO } from '@/store/constants'
import { showModal } from '@/utils/uni-api'
import { requestE407 } from '@/server'

const emit = defineEmits(['change'])

const props = defineProps({
  _codeTableData: {
    type: [Object],
    default: () => {},
  },
})

const { userInfo } = useGetters([USER_INFO])

const codeTableData = reactive({
  aae006: [],
  aae008: [],
})

// 基本数据
const basicInfo = reactive({
  aab012: '', // 企业名称
  aab01w: '', // 企业统一社会信用代码
  aab014: '', // 企业类型
  aab018: '', // 成立日期
  aac003: '', // 法定代表人
  aab019: '', // 注册地址
  aab01t: '', // 主营业务（经营范围）
  aae006: '', // 生产经营地址（项目申报地址）
  aae008: '', // 开户行名称
  aae010: '', // 开户行账号
  aae004: '', // 企业联系人
  aae007: '', // 联系人职务
  aae005: '', // 联系人电话
  aae012: '', // 联系人邮箱
})

// 校验数据
const handleCheck = () => {
  const { aae006, aae008, aae010, aae004, aae007, aae005, aae012 } = basicInfo
  if (!aae006) {
    showModal(`请选择生产经营地址（项目申报地址）`)
    return false
  }
  if (!aae008) {
    showModal(`请选择开户行名称`)
    return false
  }
  if (!aae010) {
    showModal(`请输入开户行账号`)
    return false
  } else {
    if (!/^([1-9]{1})(\d{11}|\d{15}|\d{16}|\d{18}|\d{19})$/.test(aae010)) {
      showModal(`请输入正确的开户行账号`)
      return false
    }
  }
  if (!aae004) {
    showModal(`请输入企业联系人`)
    return false
  }
  if (!aae007) {
    showModal(`请输入联系人职务`)
    return false
  }
  if (!aae005) {
    showModal(`请输入联系人电话`)
    return false
  } else {
    if (!/^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(aae005)) {
      showModal(`请输入正确的联系人电话`)
      return false
    }
  }
  if (!aae012) {
    showModal(`请输入联系人邮箱`)
    return false
  } else {
    if (
      !/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
        aae012
      )
    ) {
      showModal(`请输入正确的联系人邮箱`)
      return false
    }
  }
  emit('change', basicInfo)
  return true
}

const initBasicInfo = () => {
  const {
    aab012,
    aab01w,
    aab014,
    aab018,
    aac003,
    aab019,
    aab01t,
    aae006,
    aae008,
    aae010,
    aae004,
    aae007,
    aae005,
    aae012,
    aab001, // 证件号码/企业ID
    aab017, // 所属行业
    chb017,
    chb018,
  } = userInfo.value.companyInfo

  basicInfo.aab012 = aab012
  basicInfo.aab01w = aab01w
  basicInfo.aab014 = aab014
  basicInfo.aab018 = aab018
  basicInfo.aab018Desc = aab018.substr(0, 10)
  basicInfo.aac003 = aac003
  basicInfo.aab019 = aab019
  basicInfo.aab01t = aab01t
  basicInfo.aae006 = aae006
  basicInfo.aae008 = aae008
  basicInfo.aae010 = aae010
  basicInfo.aae004 = aae004
  basicInfo.aae007 = aae007
  basicInfo.aae005 = aae005
  basicInfo.aae012 = aae012
  basicInfo.aab001 = aab001
  basicInfo.aab017 = aab017
  basicInfo.chb017 = chb017
  basicInfo.chb018 = chb018

  requestE407('110386', false).then((res) => {
    const { orgList } = res.data
    codeTableData.aae006 = [...orgList]
  })
  requestGetCollectionData('aab016').then((res) => {
    codeTableData.aab016 = [...res]
  })
  requestGetCollectionData('aae008').then((res) => {
    codeTableData.aae008 = [...res]
  })
  requestGetCollectionData('aab014').then((res) => {
    for (let i = 0, len = res.length; i < len; i++) {
      const item = res[i]
      if (item.aaa102 === aab014) {
        basicInfo.aab014Desc = item.aaa103
      }
    }
  })
}

watch(
  () => userInfo.value.user_id,
  (val) => {
    if (val) {
      initBasicInfo()
    }
  },
  { immediate: true }
)

defineExpose({
  handleCheck,
})
</script>
<style lang="scss" scoped>
.yh-declare-base-info {
  &__panel-content {
    width: 100%;
  }
}
</style>
