/**
 * w007 接口调用成功返回的数据格式
 */
export interface W007SuccessResult {
  /**
   * 投放金额数据
   */
  beiAn?: {
    /**
     * 投放户数
     */

    beiAnBiShu: number
    /**
     * 投放笔数
     */
    beiAnHuShu: number
    /**
     * 投放金额
     */
    beiAnJinE: number
    /**
     * 投放金额单位，默认万元（接口未返回该字段，改字段为自定义字段）
     */
    beiAnJinEUnit?: string
  }
  /**
   * 补偿数据
   */
  buChang?: {
    /**
     * 补偿户数
     */
    buchangjigoushu: number
    /**
     * 补偿笔数
     */
    buchangbishu: number
    /**
     * 补偿金额
     */
    buchangjine: number
    /**
     * 补偿金额单位，默认元（接口未返回该字段，改字段为自定义字段）
     */
    buchangjineUnit?: string
  }
  /**
   * 补贴数据
   */
  buTie?: {
    /**
     * 补贴户数
     */
    butiejigoushu: number
    /**
     * 补贴笔数
     */
    butiebishu: number
    /**
     * 补贴金额
     */
    butiejine: number
    /**
     * 补贴金额单位，默认元（接口未返回该字段，改字段为自定义字段）
     */
    butiejineUnit?: string
  }
}
