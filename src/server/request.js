import config from '@/config'
import {
  showModal,
  showLoading,
  hideLoading,
  request as uniRequest,
} from '@/utils/uni-api'
import { getIsDev } from '@/utils/get'
import store from '@/store'
import { M_UPDATE_TOKEN } from '@/store/constants'
import { AES_Encrypt } from './aes' // 加密

let isError = false // 是否已经发生错误
/**
 * 自定义发起 HTTPS 网络请求
 * @param {string} url 开发者服务器接口地址，已默认加上前缀
 * @param {object} data 请求的参数
 * @param {boolean} isShowLoading [true] 请求数据时显示加载中
 * @param {boolean} showErrorToast [true] 是否显示错误提示
 * @param {string} method [POST] HTTP 请求方法。可取值 OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT
 *
 * @returns { Promise }
 * @example
  request('test').then(res => {
    // 接口调用成功
  }).catch(err => {
    // 接口调用失败
  }).finally((res) => {
    // 接口调用完成
  })
*/
const request = async (
  url,
  data = {},
  isShowLoading = true,
  showErrorToast = true,
  method = 'POST',
  timeout = 60000
) => {
  // 当前环境是否为开发环境
  const isDev = getIsDev()
  // 字符串中是否含有“http”或者“https”的正则验证表达式
  const httpExp = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
  const { requestUrl } = config
  const { token, userList } = store.state

  let header = {}
  // 根据加密情况使用content-type
  if (config.isOpenEncryption) {
    header = {
      'content-type': 'application/x-www-form-urlencoded',
    }
  } else {
    header = {
      'content-type': 'application/json;charset=UTF-8',
    }
  }

  // 存在token
  if (token) {
    header = {
      ...header,
      authorization: 'Bearer ' + token,
    }
  }

  return new Promise((resolve, reject) => {
    // 没有请求地址时 终止程序
    if (!url) {
      showModal('uni request接参数url必须传入，请检查！')
      reject(false)
    }

    // 是否显示数据加载中
    if (isShowLoading && !isError) {
      showLoading()
    }

    // 路径是否带有“http”或者“https”
    const isHttpUrl = httpExp.test(url)

    // 不是以http/https开头的路径
    if (!isHttpUrl) {
      url = requestUrl + url
    }
    data = {
      ...data,
      userList: JSON.stringify([userList]),
    }

    // 合并 data
    data = {
      ...data,
      chb004: '03', // 调用渠道 01 核心系统 02 网厅 03 微信小程序
    }

    if (config.isOpenEncryption) {
      data = JSON.stringify(data)
      data = AES_Encrypt(data)
    }

    uniRequest(url, data, header, method, timeout)
      .then((res) => {
        let { statusCode, data: resData } = res // 服务器返回的数据

        // 请求成功 状态码为 200
        if (statusCode === 200 && resData) {
          const { code, data, errors } = resData
          // 服务器返回错误
          if (errors && errors.length > 0) {
            const error = errors[0]
            if (showErrorToast) {
              showModal(error.msg)
            }
            reject(error)
          } else {
            // 服务器返回的数据是否正常判断
            if (code === 200 && data) {
              const { resultData } = data
              if (resultData) {
                const { code, message, token } = resultData
                if (code == '200') {
                  resolve(resultData)
                } else if (code == '401') {
                  // 登录超时
                  if (!isError) {
                    isError = true
                    showModal('登录超时！即将退出小程序，请重新进入！').then(
                      (res) => {
                        isError = false
                        uni.exitMiniProgram()
                      }
                    )
                    reject(resultData)
                  }
                } else if (code == '402') {
                  // 更新token
                  store.commit(M_UPDATE_TOKEN, token)
                  resolve(resultData)
                } else {
                  if (showErrorToast) {
                    showModal(message)
                    reject(resultData)
                  } else {
                    reject(resultData)
                  }
                }
              }
            }
          }
        } else {
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
      .finally(() => {
        if (isShowLoading) {
          hideLoading()
        }
      })
  })
}

export { request }
