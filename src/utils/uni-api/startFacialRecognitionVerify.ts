import { showToast } from './'

interface StartFacialRecognitionVerifyeSucccessRes {
  /**
   * 错误信息
   */
  errMsg?: string
  /**
   * 错误码
   */
  errCode?: number
  /**
   * 本次认证结果凭据，第三方可以选择根据这个凭据获取相关信息
   */
  verifyResult?: string
}

interface StartFacialRecognitionVerifyeOptions {
  /**
   * 姓名
   */
  name: string
  /**
   * 身份证号码
   */
  idCardNumber: string
  /**
   * 人脸核验的交互方式，默认读数字
   */
  checkAliveType?: 0 | 1 | 2
  /**
   * 成功返回的回调函数
   */
  success?: (result: StartFacialRecognitionVerifyeSucccessRes) => void
  /**
   * 失败的回调函数
   */
  fail?: (result: any) => void
  /**
   * 结束的回调函数（调用成功、失败都会执行）
   */
  complete?: (result: any) => void
}
namespace CustomUniApp {
  export interface Uni {
    startFacialRecognitionVerify(options?: StartFacialRecognitionVerifyeOptions): void
  }
}
declare const uni: CustomUniApp.Uni

/**
 * 请求进行基于生物识别的人脸核身。 
 * @param {string} name - 姓名。
 * @param {string} idCardNumber - 身份证号码。
 * @param {0 | 1 | 2} [checkAliveType=2] - 人脸核验的交互方式，默认值2 => 0 读数字 1 屏幕闪烁 2 先检查是否可以屏幕闪烁，不可以则自动为读数字（默认）。
 * @param {boolean} [showErrModal=true] - 是否显示错误提示 默认值true。
 * @support 官方详细说明： https://developers.weixin.qq.com/community/business/doc/000442d352c1202bd498ecb105c00d
 * @example 使用示例
  startFacialRecognitionVerify('张三', '510902199999999999').then(res => {
    // success
  }).catch(err => {
    // error
  })
 */
const startFacialRecognitionVerify = (
  name: string,
  idCardNumber: string,
  checkAliveType: 0 | 1 | 2 = 2,
  showErrModal = true
): Promise<StartFacialRecognitionVerifyeSucccessRes> => {
  const showErrMsg = (errCode: number) => {
    let message = '系统错误'
    switch (errCode) {
      case 10001:
        message = '参数错误'
        break
      case 10002:
        message = '人脸特征检测失败'
        break
      case 10003:
        message = '身份证号不匹配'
        break
      case 10004:
        message = '比对人脸信息不匹配'
        break
      case 10005:
        message = '正在检测中'
        break
      case 10006:
        message = 'appid没有权限（后台验证部分）'
        break
      case 10007:
        message = '后台获取图片失败'
        break
      case 10008:
        message = '比对系统失败'
        break
      case 10009:
        message = '未查到身份证照片比对源'
        break
      case 10010:
        message = '照片质量不满足比对要求'
        break
      case 10011:
        message = '身份证信息未开通比对权限'
        break
      case 10015:
        message = '比对服务暂时不可用'
        break
      case 10016:
        message = '存储用户图片失败'
        break
      case 10017:
        message = '非法identify_id'
        break
      case 10018:
        message = '用户信息不存在'
        break
      case 10020:
        message = '认证超时'
        break
      case 10021:
        message = '重复的请求，返回上一次的结果'
        break
      case 10022:
        message = '用户信息错误，请检测json格式'
        break
      case 10026:
        message = '用户身份证数据不在比对数据库中'
        break
      case 10027:
        message = '语音识别失败'
        break
      case 10028:
        message = '唇动检测失败'
        break
      case 10031:
        message = '公众号/小程序没有设置昵称'
        break
      case 10040:
        message = '请求数据编码不对，必须是UTF8编码'
        break
      case 10041:
        message = '非法user_id_key'
        break
      case 10042:
        message = '请求过于频繁，稍后再重试'
        break
      case 10045:
        message = '系统失败'
        break
      case 10052:
        message = '请求数超限制'
        break
      case 10057:
        message = '检测过程中人脸主体不一致'
        break
      case 10066:
        message = '人脸流水号bioid重复'
        break
      case 10069:
        message = '活体检测暂时不可用'
        break
      case 90100:
        message = '用户取消'
        break
      case 90101:
        message = '用户未授权'
        break
      case 90102:
        message = '底层库出错'
        break
      case 90103:
        message = 'CDN上传出错'
        break
      case 90104:
        message = '获取配置信息出错'
        break
      case 90105:
        message = '获取确认页信息失败'
        break
      case 90106:
        message = '相机初始化失败'
        break
      case 90107:
        message = '用户采集人脸超时'
        break
      case 90108:
        message = '用户采集过程中抖动太剧烈'
        break
      case 90109:
        message = '设备不支持人脸采集'
        break
      case 90199:
        message = '未知错误'
        break
      default:
        message = '未知错误'
    }
    return message
  }

  return new Promise((resolve, reject) => {
    uni.startFacialRecognitionVerify({
      name,
      idCardNumber,
      checkAliveType,
      success(res) {
        // 识别成功
        if (res.errCode === 0) {
          resolve(res.verifyResult)
        } else {
          const errMsg = showErrMsg(res.errCode)
          if (showErrModal) {
            showToast(errMsg)
          }
          reject({ data: res, errMsg })
        }
      },
      fail(err) {
        // 点击 关闭按钮 会调用失败
        let errMsg = err.errMsg
        errMsg = errMsg.substring(errMsg.indexOf('fail ') + 'fail '.length)
        if (errMsg.match(RegExp(/cancel/))) {
          errMsg = '您已取消人脸识别'
        }
        if (showErrModal) {
          showToast(errMsg)
        }
        reject({
          data: err,
          errMsg,
        })
      },
    })
  })
}

export { startFacialRecognitionVerify }
