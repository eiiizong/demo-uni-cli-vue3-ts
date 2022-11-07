import { showLoading, hideLoading } from '@/utils/uni-api'
import { requestB017 } from '@/service/api'
/**
 * 获取申报数据
 * @param {String} chi031 补贴项目编号
 */
const useDeclareGetData = (chi031) => {
  showLoading()
  return new Promise((resolve, reject) => {
    let personnelSelectData = [] // 人员类别选择的数据
    let personnelRenderList = [] // 人员类别渲染的数据
    Promise.allSettled([requestB017(chi031, false)]).then((res) => {
      const res0 = res[0]

      const { status: statusRes0, value: valueRes0 } = res0

      // 社保卡信息
      if (statusRes0 === 'fulfilled' && valueRes0) {
        const { list } = valueRes0.lists.ac10List
        const len = list.length
        let tempArr = []
        if (list && len > 0) {
          // 只有一种人员类别 默认选中
          if (len === 1) {
            const item = list[0]
            item.checked = true
            personnelSelectData = [item]
            tempArr.push(item)
          } else {
            for (let i = 0; i < len; i++) {
              const item = list[i]
              item.checked = false
              tempArr.push(item)
            }
          }

          personnelRenderList = [...tempArr]
        }
      }

      resolve({
        personnelRenderList,
        personnelSelectData,
      })

      hideLoading()
    })
  })
}

export { useDeclareGetData }
