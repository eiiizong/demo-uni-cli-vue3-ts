import { request } from './request'

/**
 * 查询补贴项目
 * @param {Number} pageNo 第几页
 * @param {Number} pageSize 每页条数
 * @param {String} chi032 搜索关键词
 * @param {String} chi037 主管部门
 * @param {String} aka131 企业规模
 * @param {String} che241 扶持行业
 * @param {String} chi034 政策级别
 * @param {String} chi04z 是否上线并且在申报时间内 0 1
 * @param {String} chi031List 补贴项目编码arr
 * @param {Boolean} isShowLoading 是否显示加载中
 * @returns
 */
const requestC401 = (
  pageNo,
  pageSize,
  chi032 = '',
  chi037 = '0',
  aka131 = '0',
  che241 = '0',
  chi034 = '0',
  chi04z = '0',
  chi031List,
  isShowLoading = true
) => {
  const data = {
    methodnamedesc: '查询补贴项目',
    chi031List,
    pageNo: pageNo + '',
    pageSize: pageSize + '',
    chi032,
    chi037,
    chi04z,
    aka131,
    che241,
    chi034,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/invokeWx/C401',
      data,
      isShowLoading
    )
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestC401 }
