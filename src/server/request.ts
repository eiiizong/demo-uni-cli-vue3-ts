import type { Api } from './types'
import { showModal, showLoading, hideLoading, request as uniRequest } from '@/utils/uni-api'
import { getIsDev } from '@/utils/get'
import { isObject } from '@/utils/is'
import { useStoreUserInfo } from '@/stores/modules'
import { AES_Encrypt, AES_Decrypt } from './aes' // 加密

const { VITE_API_REQUEST_URL, VITE_OPEN_DATA_ENCRYPTION } = process.env
const isOpenDataEncryption = VITE_OPEN_DATA_ENCRYPTION === 'true'

// 当前环境是否为开发环境
const isDev = getIsDev()
// 字符串中是否含有“http”或者“https”的正则验证表达式
const httpExp = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/

// 是否已经发生错误 如果发生错误 则不再执行
let isError = false

/**
 * 自定义发起 HTTPS 网络请求 未定义token过期业务逻辑
 * @param {string} url 开发者服务器接口地址，已默认加上前缀
 * @param {object} data 请求的参数
 * @param {boolean} isShowLoading [true] 请求数据时显示加载中
 * @param {boolean} showErrorToast [true] 是否显示错误提示
 * @param {"OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined} method [POST] HTTP 请求方法。
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
const request = (
  url: string,
  data: any = {},
  isShowLoading = true,
  showErrorToast = true,
  method:
    | 'OPTIONS'
    | 'GET'
    | 'HEAD'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'TRACE'
    | 'CONNECT'
    | undefined = 'POST',
  timeout = 60000
): Promise<any> => {
  const { userInfo } = useStoreUserInfo()

  let header = {}
  let paramsStr = ''

  // 根据加密情况使用content-type
  if (isOpenDataEncryption) {
    header = {
      'content-type': 'application/x-www-form-urlencoded',
    }
  } else {
    header = {
      'content-type': 'application/json;charset=UTF-8',
    }
  }

  // 存在token
  if (userInfo.token) {
    header = {
      ...header,
      authorization: 'Bearer ' + userInfo.token,
    }
  }

  return new Promise((resolve, reject) => {
    // 没有请求地址时 终止程序
    if (!url) {
      showModal('调用request接口参数 url 必须传入，请检查！')
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
      url = VITE_API_REQUEST_URL + url
    }

    // 合并 data 并且添加其他统一参数 如调用渠道
    if (isObject(data)) {
      data = {
        ...data,
        chb004: '03', // 调用渠道 01 核心系统 02 网厅 03 微信小程序
      }
    }

    if (isOpenDataEncryption) {
      paramsStr = JSON.stringify(data)
      paramsStr = AES_Encrypt(paramsStr)
      paramsStr = encodeURIComponent(paramsStr)
    }

    uniRequest(url, isOpenDataEncryption ? paramsStr : data, header, method, timeout)
      .then((res) => {
        let { statusCode, data: _data } = res // 服务器返回的数据

        // 请求成功 状态码为 200
        if (statusCode === 200 && _data) {
          // 最终服务器返回结果
          let apiResData: Api.RequestResponseReslut<any> = {}
          // 开启数据加密
          if (isOpenDataEncryption) {
            const decryptStr = AES_Decrypt(_data as string)
            apiResData = JSON.parse(decryptStr)
            if (isDev) {
              console.groupCollapsed(`请求地址 => ${url}`)
              console.log('%c params', 'color: #03A9F4; font-weight: bold', data)
              console.log('%c res data', 'color: #4CAF50; font-weight: bold', apiResData)
              console.groupEnd()
            }
          } else {
            apiResData = { ...(_data as Api.RequestResponseReslut<any>) }
          }

          const { code, data: resData, errors } = apiResData

          // 服务器返回错误
          if (errors && errors.length > 0) {
            const error = errors[0]
            if (showErrorToast) {
              showModal(error.msg)
            }
            reject(error)
          } else {
            // 服务器返回的数据是否正常判断
            if (code === 200 && resData) {
              const { resultData } = resData
              if (resultData) {
                const { code, message, token } = resultData
                if (code === '200') {
                  resolve(resultData)
                } else if (code === '401') {
                  // 登录超时
                  if (!isError) {
                    isError = true
                    showModal('登录超时！即将退出小程序，请重新进入！').then((res) => {
                      isError = false
                      // @ts-ignore：类型“Uni”上不存在属性“exitMiniProgram”
                      uni.exitMiniProgram()
                    })
                    reject(resultData)
                  }
                } else if (code === '402') {
                  // 更新token
                  resolve(resultData)
                } else {
                  if (showErrorToast) {
                    showModal(message ? message : '接口未返回message字段')
                    reject(resultData)
                  } else {
                    reject(resultData)
                  }
                }
              } else {
                reject(resData)
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
