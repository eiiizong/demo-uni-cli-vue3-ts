<template>
  <div class="login">
    <div class="container">
      <LoginHeader></LoginHeader>

      <LoginForm
        :formData="formData"
        @change="handleChangeFormData"
      ></LoginForm>

      <div class="button-wrapper">
        <YhButton
          type="info"
          customStyle="height:80rpx; border-radius: 8rpx;"
          block
          :disabled="buttonDisabled"
          @click="handleCheck"
          >开始人脸识别验证</YhButton
        >
      </div>

      <LoginFooter></LoginFooter>
    </div>
  </div>
</template>
<script setup>
import imageLogin from './images/01.png'

import YhButton from '@/components/yh/button/button.vue'
import LoginFooter from './LoginFooter.vue'
import LoginForm from './LoginForm.vue'
import LoginHeader from './LoginHeader.vue'

import { reactive, computed } from 'vue'
import { useStore } from 'vuex'

import config from '@/config'
import {
  getUserProfile,
  showModal,
  navigateBack,
  startFacialRecognitionVerify,
  showLoading,
  hideLoading,
  showToast,
} from '@/utils/uni-api'
import { getIsDev } from '@/utils/get'
import { useGetters } from '@/hooks/common'
import { requestWXLogin, requestB070, requestB075 } from '@/service/api'

import {
  USER_INFO,
  M_UPDATE_USER_INFO,
  M_UPDATE_USER_LIST,
} from '@/store/constants'

const isDevEnv = getIsDev()
const store = useStore()
const formData = reactive({
  // userName: '曾小明',
  // idCard: '510902199507236534',
  // isAgree: true,
  // avatarUrl: '',
  // tel: '18482160080',

  userName: '',
  idCard: '',
  isAgree: false,
  avatarUrl: '',
  tel: '',
})

const { userInfo } = useGetters([USER_INFO])

// 开始人脸识别验证 按钮是否可用
const buttonDisabled = computed(() => {
  let result = false
  const { isAgree, userName, idCard, tel } = formData
  if (!userName || !idCard || !isAgree || !tel) {
    result = true
  }
  return result
})

// 数据改变
const handleChangeFormData = (data) => {
  if (data.isAgree || data.isAgree === false) {
    formData.isAgree = data.isAgree
  }
  if (data.tel) {
    formData.tel = data.tel
  }

  if (data.idCard || data.idCard === '') {
    formData.idCard = data.idCard
  }

  if (data.userName) {
    formData.userName = data.userName
  }
}

// 登录成功提示
const loginSuccessTip = () => {
  showToast('登录成功', 'success').then(() => {
    setTimeout(() => {
      navigateBack(1)
    }, 1500)
  })
}

// 获取用户其他基本信息
const getUserBasicInfo = async (aac002, aac003) => {
  showLoading()
  try {
    const B070Res = await requestB070(aac002, false)
    const { orgidpath, orgname, orgnamepath, lists } = B070Res
    const { chi031List, positionList } = lists

    let positionNameArr = []
    let orgNamePathArr = []
    let orgIdPathArr = []
    let chi031Arr = []
    let chi031NumberList = []

    positionList.list.map((item) => {
      positionNameArr.push(item.positionname)
      orgNamePathArr.push(item.orgnamepath)
      orgIdPathArr.push(item.orgidpath)
    })

    chi031List.list.map((item) => {
      chi031NumberList.push(item.chi031)
      chi031Arr.push({
        chi031: item.chi031,
      })
    })

    const orgidpathArr = orgidpath.split('/')
    const orgnamepathArr = orgnamepath.split('/')

    const chb015 = orgidpathArr[2] || '9999'
    const chb015Desc = orgnamepathArr[2] || ''
    const chb017 = orgidpathArr[3] || '9999'
    const chb017Desc = orgnamepathArr[3] || ''
    const chb018 = orgidpathArr[4] || '9999'
    const chb018Desc = orgidpathArr[4] || ''

    store.commit(M_UPDATE_USER_LIST, {
      chb015,
      chb017,
      chb018,
      aae012: aac003,
      aae018: aac003,
      cpb10d: aac002,
    })
    store.commit(M_UPDATE_USER_INFO, {
      positionList: positionList.list,
      chi031List: chi031List.list,
      chi031ObjArr: chi031Arr,
      chi031NumberList,
      orgname,
      orgnamepath,
      positionName: positionNameArr.join(','),
      positionNameArr,
      orgNamePath: orgNamePathArr.join(','),
      orgNamePathArr,
      orgIdPathArr,
      chb015,
      chb015Desc,
      chb017,
      chb017Desc,
      chb018,
      chb018Desc,
    })

    try {
      const B075Res = await requestB075(chi031Arr, false)
      const { list } = B075Res.lists.hi51List
      const arr = []
      if (list && list.length > 0) {
        list.map((item) => {
          if (item.chi511 === '1') {
            arr.push(item.chi031)
          }
        })
      }
      store.commit(M_UPDATE_USER_INFO, {
        chi031SetList: list,
        chi031CanHandleList: arr,
      })
      hideLoading()
      // 与app.vue 不一致的地方
      loginSuccessTip()
    } catch (err) {}
  } catch (err) {
    hideLoading()
    showModal(
      '您当前还不是惠民惠农阳光审批的经办人员，暂无权限进行操作，请及时联系管理员！'
    ).then((res) => {
      loginSuccessTip()
    })
  }
}

// 登录
const handleLogin = () => {
  const { userName, idCard, avatarUrl, tel } = formData
  const { openid, session_key } = userInfo.value
  requestWXLogin(openid, idCard, userName, tel, avatarUrl).then((res) => {
    const { userId, sessionId, token } = res.data
    store.commit(M_UPDATE_USER_INFO, {
      openid,
      idCard,
      session_key,
      userName,
      avatarUrl,
      sessionId,
      userId,
      user_id: userId,
      token,
    })
    getUserBasicInfo(idCard, userName)
  })
}

// 开始人脸识别认证
const handleStartFacialRecognitionVerify = () => {
  if (isDevEnv) {
    handleLogin()
  } else {
    const { userName, idCard } = formData
    startFacialRecognitionVerify(userName, idCard).then(() => {
      handleLogin()
    })
  }
}

// 开始校验 校验必填项成功进行个人信息获取
const handleCheck = () => {
  const { userName, idCard, avatarUrl } = formData
  if (userName.length < 2) {
    showModal('请输入正确的姓名')
    return
  }

  // 存在头像
  if (avatarUrl) {
    // 进行后续的操作
    handleStartFacialRecognitionVerify()
  } else {
    // 不存在头像
    getUserProfile()
      .then((res) => {
        const { errMsg, userInfo } = res
        if (errMsg === 'getUserProfile:ok') {
          const { avatarUrl } = userInfo
          formData.avatarUrl = avatarUrl

          // 进行后续的操作
          handleStartFacialRecognitionVerify()
        }
      })
      .catch((err) => {
        showModal('获取您的昵称、头像信息时请点击允许按钮！')
      })
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: $spacing;
  background-color: $primary;
  .container {
    flex: 1;
    width: 100%;
    background-color: #fff;
    position: relative;
    padding: 0 56rpx 80rpx + 24rpx;
    border-radius: 8rpx;
  }
}
</style>
