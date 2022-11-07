import config from '@/config'
import {
  showModal,
  showLoading,
  hideLoading,
  request,
  getStorage,
} from '@/utils/uni-api'
import { getIsDev } from '@/utils/get'
import { USER_LIST, USER_INFO } from '@/store/constants'

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
  const isDevEnv = getIsDev()
  let userList = {}
  let userInfo = {}

  const { requestUrl } = config
  // 合并 header
  let header = {
    'content-type': 'application/json;charset=UTF-8',
  }
  // 字符串中是否含有“http”或者“https”的正则验证表达式
  const httpExp = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/

  try {
    const res = await getStorage(USER_LIST)
    userList = JSON.parse(res)
  } catch (err) {
    console.log(err, '===userList err===')
  }

  try {
    const res = await getStorage(USER_INFO)
    userInfo = JSON.parse(res)
  } catch (err) {
    console.log(err, '===userInfo err===')
  }

  if (userInfo.user_id) {
    header = {
      ...header,
      token: userInfo.token,
    }
  }

  return new Promise((resolve, reject) => {
    // 没有请求地址时 终止程序
    if (!url) {
      showModal('uni request接参数url必须传入，请检查！')
      reject(false)
    }

    // 是否显示数据加载中
    if (isShowLoading) {
      showLoading()
    }

    // 路径是否带有“http”或者“https”
    const isHttpUrl = httpExp.test(url)

    // 不是以http/https开头的路径
    if (!isHttpUrl) {
      url = requestUrl + url
    }
    if (userList.loginid) {
      data = {
        ...data,
        userList: JSON.stringify([userList]),
      }
    }

    // 合并 data
    data = {
      ...data,
      chb004: '03', // 调用渠道 01 核心系统 02 网厅 03 微信小程序
    }
    request(url, data, header, method, timeout)
      .then((res) => {
        let { statusCode, data: resData } = res // 服务器返回的数据

        // 请求成功 状态码为 200
        if (statusCode === 200 && resData) {
          const { data, errors } = resData

          // 服务器返回错误
          if (errors && errors.length > 0) {
            const error = errors[0]
            if (showErrorToast) {
              showModal(error.msg)
            }
            reject(error)
          } else {
            const { resultData } = data
            if (resultData.code === '-1') {
              if (isDevEnv) {
                console.log(
                  `
                  服务器返回错误！
                  请求地址：${url},
                  请求的 data 数据:
                  `,
                  data,
                  `
                  服务器的返回的 resultData 数据:
                  `,
                  resultData
                )
              }
              if (showErrorToast) {
                showModal(resultData.message)
                reject(resultData)
              } else {
                reject(resultData)
              }
            } else {
              if (isDevEnv) {
                console.log(
                  `
                  请求成功！
                  请求地址：${url},
                  请求的 data 数据:
                  `,
                  data,
                  `
                  服务器的返回的 resultData 数据:
                  `,
                  resultData
                )
              }
              resolve(resultData)
            }
          }
        } else {
          if (isDevEnv) {
            console.log(
              `
              接口调用成功，数据错误！
              请求地址：${url},
              请求的 data 数据:
              `,
              data,
              `
              调用失败返回的 res 数据:
              `,
              res
            )
          }
          reject(res)
        }
      })
      .catch((err) => {
        if (isDevEnv) {
          console.log(
            `
            接口调用失败！
            请求地址：${url},
            请求的 data 数据:
            `,
            data,
            `
            调用失败返回的 err 数据:
            `,
            err
          )
        }
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
