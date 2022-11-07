import { request } from './request'

/** 根据码表名称获取码表
 * @param {String} collectionName 码表名称
 * @param {String} collectionValue 码值
 * @returns
 */
const requestGetCollectionData = (collectionName, collectionValue) => {
  if (!collectionName) {
    console.error('调取getCollectionData接口未传入码表名称！')
    return
  }
  collectionName = collectionName.toLowerCase()

  const data = {
    collection: collectionName,
    val: collectionValue,
  }

  return new Promise((resolve, reject) => {
    request(
      '/frontRestService/frontCommonDataRestService/getCollectionData',
      data,
      {},
      false
    )
      .then((res) => {
        const { code, codeCacheMap } = res
        if (code != '-1') {
          const value = codeCacheMap[collectionName]
          if (value) {
            if (collectionValue) {
              for (let i = 0, len = value.length; i < len; i++) {
                const item = value[i]
                if (collectionValue == item.aaa102) {
                  resolve(item.aaa103)
                  break
                }
              }
              resolve('')
            } else {
              resolve(value)
            }
          } else {
            reject(codeCacheMap)
          }
        } else {
          reject(res)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
export { requestGetCollectionData }
