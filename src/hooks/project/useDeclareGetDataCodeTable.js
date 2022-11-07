import { getCodeListByCodeName } from '@/utils/custom-api'
/**
 * 获取申报中需要使用的码表数据
 * @param {String} codeNames 补贴项目编号组成的字符串。例如： 20022,20033
 */
const useDeclareGetDataCodeTable = (codeNames) => {
  if (!codeNames) {
    return
  }
  const codeNameArr = codeNames.split(',')
  const tempArr = []
  const requestList = []
  codeNameArr.map((item) => {
    if (item) {
      requestList.push(getCodeListByCodeName(item))
      tempArr.push(item)
    }
  })
  return new Promise((resolve, reject) => {
    let codeTableData = {}
    Promise.allSettled(requestList).then((res) => {
      for (let i = 0, len = res.length; i < len; i++) {
        const resItem = res[i]
        const { status, value } = resItem
        // 民族码表
        if (status === 'fulfilled' && value) {
          codeTableData[tempArr[i]] = value
        }
      }

      resolve({
        codeTableData,
      })
    })
  })
}

export { useDeclareGetDataCodeTable }
