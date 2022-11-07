<template>
  <view class="yh-declare">
    <YhDeclareStep :current="2"></YhDeclareStep>
    <div class="wrapper">
      <YhDeclareBaseInfo
        @change="handleChangeBasicInfo"
        ref="ref_basic_info"
      ></YhDeclareBaseInfo>
    </div>
    <div class="wrapper">
      <YhDeclarePersonnel
        :render-list="customData.personnelRenderList"
        @change="handleChangePersonnel"
      ></YhDeclarePersonnel>
    </div>
    <!-- 业务受理信息 -->
    <div class="wrapper">
      <YhPanel title="业务受理信息">
        <div class="panel-content declare-form">
          <div class="cell-items">
            <slot></slot>
          </div>
        </div>
      </YhPanel>
    </div>

    <!-- 下一步操作按钮 -->
    <div class="wrapper">
      <YhButton type="info" block round @click="handleGoNextStep"
        >下一步</YhButton
      >
    </div>
  </view>
</template>

<script setup>
import YhButton from '@/components/yh/button/button.vue'
import YhPanel from '@/components/project/yh-panel/yh-panel.vue'
import YhDeclareStep from '@/components/project/yh-declare-step/yh-declare-step.vue'
import YhDeclareBaseInfo from '@/components/project/yh-declare-base-info/yh-declare-base-info.vue'
import YhDeclarePersonnel from '@/components/project/yh-declare-personnel/yh-declare-personnel.vue'

import { reactive, watch, ref } from 'vue'
import { useStore } from 'vuex'

import { requestC409, requestC416 } from '@/server'
import { useGetters } from '@/hooks/common'
import { showModal, navigateTo } from '@/utils/uni-api'
import {
  M_UPDATE_SUBSIDY_PROJECT_DECLARE_INFO,
  USER_INFO,
} from '@/store/constants'

import config from '@/config'
const { areaCode } = config
const store = useStore()
const { userInfo } = useGetters([USER_INFO])
const emit = defineEmits(['check'])

const props = defineProps({
  chi031: {
    type: String,
    required: true,
  },
  chi031Desc: {
    type: String,
    required: true,
  },
  declareInfo: {
    type: Object,
    required: true,
  },
})

const ref_basic_info = ref(null)

// 自定义渲染数据
const customData = reactive({
  basicInfo: {}, // 申报人基本信息
  personnelSelectData: [], // 人员类别选择的数据
  personnelRenderList: [], // 人员类别渲染的数据
})

// 通过chi031获取数据
const getDataByChi031 = (chi031) => {
  requestC416(chi031).then((res) => {
    const { he14VoList } = res.data
    if (he14VoList && he14VoList.length > 0) {
      const len = he14VoList.length
      if (len === 1) {
        for (let i = 0; i < len; i++) {
          const item = he14VoList[i]
          item.checked = true
          customData.personnelSelectData = [item]
        }
      } else {
        for (let i = 0; i < len; i++) {
          const item = he14VoList[i]
          item.checked = false
        }
      }
    }
    customData.personnelRenderList = [...he14VoList]
  })
}

// 人员类别改变触发的事件
const handleChangePersonnel = (val) => {
  const { personnelRenderList } = customData
  personnelRenderList.map((item) => {
    item.checked = false
    if (item.aka131 === val) {
      item.checked = true
      customData.personnelSelectData = [item]
    }
  })
}

// 获取申报人基本信息
const handleChangeBasicInfo = (val) => {
  customData.basicInfo = { ...val }
}

// 提交数据 缓存至store
const handleSubmit = () => {
  const { idCard } = userInfo.value
  const { chi031, chi031Desc, declareInfo } = props
  const { basicInfo, personnelSelectData } = customData
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
  } = basicInfo

  let aka131 = '' // 人员类别
  let aka131_arr = [] // 人员类别构成的数组
  personnelSelectData.map((item) => {
    aka131_arr.push(item.aka131)
  })
  aka131 = aka131_arr.join(',')

  let chb000 = ''

  const _basicInfo = {
    aab001, // 证件号码/企业ID
    aab012, // 姓名/企业名称
    chb00l: aab018, // 成立时间
    chb00u: aab014, // 企业类型
    chb00z: aae006, // 注册地址
    chb00p: aac003, // 企业法人姓名
    chb00y: aab017, // 所属行业
    chb00s: aae004, // 联系人姓名
    aae005: aae005, // 联系电话
    chb00t: aae007, // 联系人职务
    chb015: aae006, // 区县
    chb017, // 乡镇
    chb018, // 村
    chb00j: aae012, // 联系人邮箱
    chb00w: aab019, // 企业地址
    aae008, //开户行名称
    aae010, //开户账号
    chb000, //申报草稿主键
  }
  let data = {
    ..._basicInfo,
    ...declareInfo,
    aka131, // 申报类别
    chi031, // 补贴项目编码
    chi031Desc, // 补贴项目编码
    aab301: areaCode, // 申报城市
    aac058: '02', // 线上申报 02
    loginid: idCard, // 登录账号id
    hi21List: '', // 上传的材料列表
    hp17List: JSON.stringify([]),
    chb00k: '', // 0 保存
  }

  store.commit(M_UPDATE_SUBSIDY_PROJECT_DECLARE_INFO, data)
  navigateTo('declare-upload-files', 'packageDeclare')
}

// 下一步
const handleGoNextStep = () => {
  // 校验申报人基本信息是否填写完整
  const checkResult = ref_basic_info.value.handleCheck()
  if (!checkResult) {
    return false
  }

  // 校验人员类别
  const { personnelSelectData } = customData
  if (personnelSelectData.length < 1) {
    showModal('请选择企业申报类别')
    return false
  }

  let checkResultBasicInfo = false
  // 校验申报信息
  emit('check', (val) => {
    checkResultBasicInfo = val
  })
  console.log(checkResultBasicInfo, 987)
  // 申报信息校验通过
  if (checkResultBasicInfo) {
    handleSubmit()
  }
}

watch(
  () => props.chi031,
  (val) => {
    if (val) {
      getDataByChi031(val)
    }
  },
  { immediate: true }
)
</script>
