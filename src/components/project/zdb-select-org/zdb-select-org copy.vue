<template>
  <ComponentPopup ref="ez_select_address_popup" type="bottom" @change="changeShowPopup">
    <view class="ez-select-address-wrapper">
      <div class="header-tip">
        <div class="title">地区选择</div>
        <i class="iconfont iconfont-close" @click.stop="$emit('input', false)"></i>
      </div>
      <div class="toolbar">
        <scroll-view
          scroll-x
          enable-flex
          scroll-with-animation
          class="scroll-view"
          :scroll-into-view="toolbarScrollIntoView">
          <div
            v-for="(item, index) in selectedAddressArr"
            :id="'toolbar_' + index"
            :key="item[idKey]"
            class="scroll-view-item"
            :class="index === currentSelectedLevel ? 'active' : ''"
            @click.stop="handleClickScrollViewItem(index)">
            <span>{{ item[renderKey] }}</span>
          </div>
        </scroll-view>
      </div>
      <div class="swiper-wrapper">
        <swiper class="swiper" :current="currentSelectedLevel" @change="changeSwiper">
          <block v-for="(swiperItme, swiperIndex) in renderDataArr" :key="swiperIndex">
            <swiper-item class="swiper-item">
              <view class="swiper-item-content">
                <!-- :scroll-into-view="
                      'adcode_' + selectedAddressArr[swiperIndex[fieldName]
                    " -->
                <scroll-view
                  v-if="requestStatusArr[swiperIndex] && requestStatusArr[swiperIndex].isHaveData"
                  scroll-y
                  class="swiper-scroll-view">
                  <block
                    v-for="(swiperScrollViewItme, swiperScrollViewIndex) in swiperItme"
                    :key="swiperScrollViewIndex">
                    <div
                      :id="idKey + '_' + swiperScrollViewItme[idKey]"
                      class="swiper-scroll-view-item"
                      :class="[
                        selectedAddressArr[swiperIndex][idKey] === swiperScrollViewItme[idKey] ? 'active' : '',
                        'city_' + areaCode
                      ]"
                      @click.stop="handleCiliSwiperScrollViewItem(swiperIndex, swiperScrollViewIndex)">
                      <span>{{ swiperScrollViewItme[renderKey] }}</span>
                      <i
                        v-show="selectedAddressArr[swiperIndex][idKey] === swiperScrollViewItme[idKey]"
                        class="iconfont iconfont-hook"></i>
                    </div>
                  </block>
                </scroll-view>
                <!-- 加载中 -->
                <div v-if="requestStatusArr[swiperIndex] && requestStatusArr[swiperIndex].isLoading" class="loading">
                  <i class="iconfont iconfont-loading"></i>
                  <p>数据加载中</p>
                </div>
                <!-- 暂无数据 或者请求数据失败 -->
                <div v-if="requestStatusArr[swiperIndex] && requestStatusArr[swiperIndex].isError" class="error">
                  <p class="tip">{{ requestStatusArr[swiperIndex].errMsg }}</p>
                  <ComponentButton
                    width="180rpx"
                    height="60rpx"
                    type="primary"
                    size="small"
                    @click.stop="handleClickRetry(swiperIndex)">
                    重试
                  </ComponentButton>
                </div>
                <!-- 暂无数据 或者请求数据失败 -->
                <!-- <div v-if="requestStatusArr[swiperIndex].isError"></div> -->
              </view>
            </swiper-item>
          </block>
        </swiper>
      </div>
    </view>
  </ComponentPopup>
</template>

<script>
  /**
   * 地址选择
   * @description 地址选择
   * @bug 在有请求地址 且设置有默认地址 当初始化时出现请求错误 重试按钮无法一次性全部请求
   */
  import ComponentPopup from '@/components/common/ez-popup/ez-popup.vue'
  import ComponentButton from '@/components/common/ez-button/ez-button.vue'

  import { mapGetters } from 'vuex'
  import config from '@/config'
  import { showModal } from '@/utils/uni-api'
  import { useGetIsDev } from '@/hooks/common'
  import { SUBSIDY_PROJECT_AUDIT_CHANNEL } from '@/store/constants'
  import {
    requestFFGetOrgNextLevelList,
    requestDSGetOrgNextLevelList,
    requestSPGetOrgListByOrgId,
    requestWXGetAddress
  } from '@/service/api'

  const isDev = useGetIsDev()
  export default {
    name: 'EzSelectAddress',
    components: {
      ComponentPopup,
      ComponentButton
    },
    props: {
      // 控制弹窗显示
      value: {
        type: [Boolean],
        required: true
      },
      // DValue 为 orglevel 和 swiper current 值的差
      DValue: {
        type: [Number],
        default: 0
      },
      // 可选择的层级 默认3级 省市区选择
      level: {
        type: [Number],
        default: 3
      },
      // 是否查询学校
      isSchoolQuery: {
        type: [Boolean],
        default: false
      },
      // 渲染字段名称
      renderKey: {
        type: [String],
        default: 'name'
      },
      // 唯一字段名称
      idKey: {
        type: [String],
        default: 'code'
      },
      // 筛选 值与idKey 一致 目前只支持一种
      filter: {
        type: [String],
        default: ''
      },

      // 默认地址 不要传入空的字符串 无法预知错误 传入格式 eg: ['四川省', '成都市', '锦江区']
      address: {
        type: [Array],
        default: () => {
          return []
        }
      },
      // 去掉某一地址
      remove: {
        type: [String],
        default: ''
      },

      // 系统类型 SP 审批系统 FF 发放系统 DSFF 德生发放 China 全国各省地址
      requestSystemType: {
        type: [String],
        default: 'SP'
      }
    },
    data() {
      return {
        // 定时器
        timer: null,
        // 当前选中的层级
        currentSelectedLevel: 0,
        // 选中的地址
        selectedAddressArr: [],
        // 渲染数据 仅保存本地数据 网络请求数据不保存在此
        renderDataArr: [],

        // 状态控制
        requestStatusArr: [
          // {
          //   // 是否在加载中
          //   isLoading: false,
          //   // 是否加载数据失败
          //   isError: true,
          //   // 数据失败时的提示
          //   errMsg: '网络错误，请重试！',
          //   // 是否已经存在数据
          //   isHaveData: false,
          // },
        ],

        // 请求参数数据零时储存 用于重试按钮
        cacheRequestDataParamsArr: [],
        // 渲染数据 本地缓存
        cacheRenderDataObj: {},
        // 当前请求层级
        currentRequestOrgLevel: 0,
        areaCode: '',
        isGetAddressFaild: false
      }
    },
    created() {
      this.areaCode = config.areaCode
    },
    mounted() {
      // console.log('====== mounted =========')
    },
    methods: {
      // 统一处理打开弹窗
      handleShowPopup() {
        this.$nextTick(() => {
          this.$refs['ez_select_address_popup'].open()
        })
      },
      // 统一处理关闭弹窗
      handleHidePopup() {
        this.$nextTick(() => {
          this.$refs['ez_select_address_popup'].close()
        })
      },
      // 清除数据
      clearData() {
        this.currentSelectedLevel = 0
        this.selectedAddressArr = []
        this.renderDataArr = []
        this.requestStatusArr = []
        this.cacheRequestDataParamsArr = []
        this.cacheRenderDataObj = {}
        this.currentRequestOrgLevel = 0
      },
      // 处理初始化
      handleInit() {
        // 类型
        const requestSystemType = this.requestSystemType
        const idKey = this.idKey
        const renderKey = this.renderKey
        const isGetAddressFaild = this.isGetAddressFaild
        // 此处只判断是否有请求地址
        const address = [...this.address] // 默认地址
        const addressLen = address.length

        // 此处只判断选择地址类型 全国选择
        if (requestSystemType === 'China') {
          if (addressLen < 1) {
            this.selectedAddressArr = [
              {
                [idKey]: 'select',
                [renderKey]: '请选择'
              }
            ]
          }
          this.requestData()
          return
        }

        if (address.length < 1) {
          this.selectedAddressArr = [
            {
              [this.idKey]: 'select',
              [this.renderKey]: '请选择'
            }
          ]
        }

        // 请求参数
        let requestParams = {}

        if (requestSystemType == 'SP') {
          requestParams = config.SPAddressRequestParams
        } else {
          requestParams = config.FFAddressRequestParams
        }

        const { orgid, orglevel } = requestParams
        // 调用接口需要这些字段
        if (orglevel) {
          this.currentRequestOrgLevel = Number(orglevel)
          if (!isGetAddressFaild && addressLen < 1) {
            // 无初始化地址
            if (orgid) {
              this.requestData(orgid, orglevel, 1)
            } else {
              showModal('地址请求缺失orgid，请检查！')
            }
          } else {
            // 有初始化地址
            this.initAddress(address)
          }
        } else {
          showModal('地址请求缺失orglevel，请检查！')
        }
      },

      // 请求数据
      requestData(orgid, orglevel, times = 0) {
        const requestSystemType = this.requestSystemType
        const subsidyProjectAuditChannel = this.subsidyProjectAuditChannel
        const idKey = this.idKey
        const filter = this.filter
        const remove = this.remove
        const isSchoolQuery = this.isSchoolQuery
        const currentSelectedLevel = this.currentSelectedLevel // 当前选中层级
        // 默认请求状态
        let defaultRequestStatusObj = {
          isLoading: true, // 是否在加载中
          isError: false, // 是否加载数据失败
          errMsg: '', // 数据失败时的提示
          isHaveData: false // 是否已经存在数据
        }
        this.updateRequestStatusArr(defaultRequestStatusObj, currentSelectedLevel)
        this.updateRenderDataArr([], currentSelectedLevel) // 提前加入 防止没有加载中动画

        let params = {
          orgid,
          orglevel: orglevel + ''
        }

        // console.log('subsidyProjectAuditChannel==', subsidyProjectAuditChannel)
        if (subsidyProjectAuditChannel) {
          // 乡镇补贴
          if (subsidyProjectAuditChannel == '1') {
            params = {
              ...params,
              costomno: 'township'
            }
          }
          // 学校补贴
          if (subsidyProjectAuditChannel == '2') {
            params = {
              ...params,
              costomno: 'school'
            }
          }
        }

        // 如果是查询学校补贴，添加字段schoolQuery值为1
        if (isSchoolQuery) {
          params = {
            ...params,
            schoolQuery: '1'
          }
        }

        if (requestSystemType === 'China') {
          switch (currentSelectedLevel) {
            case 0:
              params = {
                code: '0',
                type: currentSelectedLevel + 1 + ''
              }
              break
            case 1:
              params = {
                code: this.provinceId,
                provinceId: this.provinceId,
                type: currentSelectedLevel + 1 + ''
              }
              break
            case 2:
              params = {
                code: this.cityId,
                provinceId: this.provinceId,
                cityId: this.cityId,
                type: currentSelectedLevel + 1 + ''
              }
              break
            case 3:
              params = {
                code: this.twonId,
                provinceId: this.provinceId,
                cityId: this.cityId,
                twonId: this.twonId,
                type: currentSelectedLevel + 1 + ''
              }
              break
            default:
              break
          }
        }

        const hanldeData = (list) => {
          let data = []
          // 存在筛选 且 第一次请求
          if (filter && times === 1) {
            const filterArr = filter.split(',')
            for (let i = 0, len = list.length; i < len; i++) {
              const item = list[i]
              if (filterArr.includes(item[idKey])) {
                data.push(item)
              }
            }
          } else if (remove && times === 1) {
            const removeArr = remove.split(',')
            for (let i = 0, len = list.length; i < len; i++) {
              const item = list[i]
              if (!removeArr.includes(item[idKey])) {
                data.push(item)
              }
            }
          } else {
            data = [...list]
          }

          // 数据不为空
          if (data && data.length > 0) {
            // 成都过滤掉已经删除的地址组织机构
            if (this.areaCode === '510100') {
              data = data.filter((item) => item.dimension !== '1')
            }
            this.updateRenderDataArr(data, currentSelectedLevel)
            defaultRequestStatusObj.isHaveData = true
          } else {
            defaultRequestStatusObj.isHaveData = false
            // 下级数据没有数据了
            this.handleSelectComplete()
          }
        }
        const handleDataCatch = (err) => {
          defaultRequestStatusObj.isError = true
          defaultRequestStatusObj.errMsg = err.message
        }
        const handleDataFinally = () => {
          this.currentRequestOrgLevel = Number(orglevel)
          defaultRequestStatusObj.isLoading = false
          this.updateRequestStatusArr(defaultRequestStatusObj, currentSelectedLevel)
          this.updateCacheRequestDataParamsArr(params, currentSelectedLevel)
        }

        // 默认审批系统
        switch (requestSystemType) {
          case 'FF':
            return requestFFGetOrgNextLevelList(params, false)
              .then((res) => {
                const { list } = res
                if (list && list.length > 0) {
                  hanldeData(list)
                } else {
                  defaultRequestStatusObj.isHaveData = false
                  hanldeData([])
                }
              })
              .catch((err) => {
                handleDataCatch(err)
              })
              .finally(() => {
                handleDataFinally()
              })
            break
          case 'FFDS':
            console.log('FFDS=====================================')
            return requestDSGetOrgNextLevelList(params, false)
              .then((res) => {
                const { list } = res
                if (list && list.length > 0) {
                  hanldeData(list)
                } else {
                  defaultRequestStatusObj.isHaveData = false
                  hanldeData([])
                }
              })
              .catch((err) => {
                handleDataCatch(err)
              })
              .finally(() => {
                handleDataFinally()
              })
            break
          case 'China':
            return requestWXGetAddress(params, false)
              .then((res) => {
                const list = [...res.data]
                hanldeData(list)
              })
              .catch((err) => {
                handleDataCatch(err)
              })
              .finally(() => {
                handleDataFinally()
              })
            break
          case 'SP':
            return requestSPGetOrgListByOrgId(params, false)
              .then((res) => {
                const { list } = res.lists.orgList
                if (list && list.length > 0) {
                  hanldeData(list)
                } else {
                  defaultRequestStatusObj.isHaveData = false
                  hanldeData([])
                }
              })
              .catch((err) => {
                handleDataCatch(err)
              })
              .finally(() => {
                handleDataFinally()
              })
            break
          default:
            console.log('NO requestSystemType=====================================', requestSystemType)
            break
        }
      },

      // swiper滑动触发的回调函数
      changeSwiper(e) {
        const current = e.detail.current
        this.updateCurrentSelectedLevel(current)
        this.currentRequestOrgLevel = Number(current) + this.DValue
      },
      // popup 组件显示隐藏主动触发的回调函数
      changeShowPopup(e) {
        // 点击遮罩层会执行两次 因为 ez-popup 组件中的 close 方法会执行两次
        // 点击遮罩层 ez-popup 组件内部主动执行一次 close 方法
        // 监听到value值的改变执行一次 主动调用 handleHidePopup 方法
        this.$emit('input', e.show)
      },
      // 更新当前选择的层级
      updateCurrentSelectedLevel(index) {
        this.currentSelectedLevel = index
        // console.log('updata currentSelectedLevel => ', this.currentSelectedLevel)
      },
      // 更新缓存的渲染数据
      updateCacheRenderDataObj(newObj = {}) {
        const newCacheRenderDataObj = {
          ...this.cacheRenderDataObj
        }
        const idKey = this.idKey // orgid
        const keyValue = newObj[idKey]
        newCacheRenderDataObj[keyValue] = newObj
        this.cacheRenderDataObj = {
          ...newCacheRenderDataObj
        }
        // console.log('updata cacheRenderDataObj => ', this.cacheRenderDataObj)
      },
      // 更新缓存的请求数据
      updateCacheRequestDataParamsArr(newObj, index) {
        const newCacheRequestDataParamsArr = [...this.cacheRequestDataParamsArr]
        newCacheRequestDataParamsArr[index] = {
          ...newObj
        }
        this.cacheRequestDataParamsArr = [...newCacheRequestDataParamsArr]
        // console.log(
        //   'updata cacheRequestDataParamsArr => ',
        //   this.cacheRequestDataParamsArr
        // )
      },
      // 更新选中的地址信息
      updateSelectedAddressArr(newObj, index) {
        // console.log('updateSelectedAddressArr', newObj, index)
        const requestSystemType = this.requestSystemType
        const idKey = this.idKey
        const renderKey = this.renderKey
        if (requestSystemType === 'China') {
          switch (index) {
            case 0:
              this.provinceId = newObj[idKey]
              break
            case 1:
              this.cityId = newObj[idKey]
              break
            case 2:
              this.twonId = newObj[idKey]
              break
            default:
              break
          }
        }
        let level = this.level
        // 泸州特殊处理，学校查询最多只需要选中第二级即可
        if (this.subsidyProjectAuditChannel == '2' && config.areaCode === '510500') {
          level = 2
        }
        const newSelectedAddressArr = [...this.selectedAddressArr]
        const len = newSelectedAddressArr.length

        const defaultObj = {
          [idKey]: 'select',
          [renderKey]: '请选择'
        }

        let arr = []
        if (len > 0) {
          newSelectedAddressArr.map((item, i) => {
            if (i < index) {
              arr.push(item)
            }
          })
        }
        arr[index] = {
          ...newObj
        }

        if (index + 1 < level) {
          // 未选择完成
          arr.push(defaultObj)
        }

        this.selectedAddressArr = [...arr]
      },
      // 更新 请求状态 控制显示
      updateRequestStatusArr(data, index) {
        const requestStatusArr = [...this.requestStatusArr]
        const len = requestStatusArr.length
        let arr = []
        // 将之前有的数据推入
        for (let i = 0; i < len; i++) {
          const item = requestStatusArr[i]
          if (i < index) {
            arr.push(item)
          }
        }
        // 将最新数据加入
        arr[index] = {
          ...data
        }
        this.requestStatusArr = [...arr]
        this.$set(this.requestStatusArr, index, data)
      },
      // 更新 渲染数据
      updateRenderDataArr(data, index) {
        const renderDataArr = [...this.renderDataArr]
        renderDataArr[index] = data
        this.renderDataArr = [...renderDataArr]
        this.$set(this.renderDataArr, index, data)
      },
      // 处理地区选择区域列表的item点击事件
      handleCiliSwiperScrollViewItem(i, j) {
        clearTimeout(this.timer)
        const idKey = this.idKey // 渲染字段名
        const renderKey = this.renderKey // 渲染字段名
        let level = this.level
        // 泸州特殊处理，学校查询最多只需要选中第二级即可
        if (this.subsidyProjectAuditChannel == '2' && config.areaCode === '510500') {
          level = 2
        }

        const renderDataArr = [...this.renderDataArr] // 渲染数据
        const selectedAddressArr = [...this.selectedAddressArr] // 选择的数据
        const clickSelectItem = renderDataArr[i][j] // 点击的对象

        // console.log(123, 2355, clickSelectItem)
        const currentRequestOrgLevel = Number(clickSelectItem.orglevel)

        // 网络请求
        // 选择的item
        const selectObj = {
          [idKey]: clickSelectItem[idKey],
          [renderKey]: clickSelectItem[renderKey]
        }
        this.updateSelectedAddressArr(selectObj, i)
        // 当前选择层级是否小于设定层级
        if (i + 1 < level) {
          this.timer = setTimeout(() => {
            this.updateCurrentSelectedLevel(i + 1)
            this.requestData(selectObj[idKey], currentRequestOrgLevel + 1)
          }, 300)
        } else {
          // 最后一个
          this.timer = setTimeout(() => {
            this.handleSelectComplete()
          }, 300)
        }
      },
      // 处理toolbar已选择地址的item点击事件
      handleClickScrollViewItem(index) {
        this.updateCurrentSelectedLevel(index)
        this.currentRequestOrgLevel = index + this.DValue
      },
      // 重试按钮
      handleClickRetry(index) {
        const cacheRequestDataParamsArr = [...this.cacheRequestDataParamsArr]
        // console.log(requestParamsData)
        this.requestData(cacheRequestDataParamsArr[index][this.idKey], this.currentRequestOrgLevel)
      },
      // 选择完成执行的事件
      handleSelectComplete() {
        const selectedAddressArr = [...this.selectedAddressArr]
        const renderKey = this.renderKey
        const idKey = this.idKey
        const arr = []
        const arr_select = []
        selectedAddressArr.forEach((item) => {
          if (item[idKey] !== 'select') {
            arr.push(item[renderKey])
            arr_select.push(item)
          }
        })
        // console.log(arr, arr_select, 1234567890)
        this.$emit('input', false)
        this.$emit('change', arr, arr_select)
      },
      // 初始化地址
      async initAddress(address) {
        const idKey = this.idKey
        const renderKey = this.renderKey
        const requestSystemType = this.requestSystemType
        let level = this.level
        const { areaCode, FFAddressRequestParams, SPAddressRequestParams } = config
        // 泸州特殊处理，学校查询最多只需要选中第二级即可
        if (this.subsidyProjectAuditChannel == '2' && areaCode === '510500') {
          level = 2
        }
        // 请求参数
        let requestParams = {}

        if (requestSystemType == 'SP') {
          requestParams = SPAddressRequestParams
        } else {
          requestParams = FFAddressRequestParams
        }

        let { orgid, orglevel } = requestParams
        let len = address.length
        len = Math.min(len, level) // 保证最小值 防止误传多个
        orglevel = Number(orglevel)
        let result = null // 根据遍历拿到的数据

        // 递归函数
        const func = async (i) => {
          const nextIndex = i + 1
          const item = address[i]
          this.updateCurrentSelectedLevel(i)
          if (i === 0) {
            await this.requestData(orgid, orglevel)
          }
          // 第 n+1 次 且 不能超过最大层级 3 => 1 2
          if (i > 0 && i < len) {
            // 已经拿到一次数据
            if (result) {
              orglevel = Number(result.orglevel) + 1
              await this.requestData(result[idKey], orglevel)
            } else {
              this.clearData()
              this.isGetAddressFaild = true
              this.handleInit()
              if (isDev) {
                throw new Error(`传入的props中的address错误，传入的第${i + 1}个为空或者名称错误，无法匹配到相同字符串`)
              }
              return
            }
          }
          // 找到相同 item 用于下次请求
          const renderDataArr = [...this.renderDataArr]
          result =
            renderDataArr[i].filter((ele) => {
              return ele[renderKey] === item
            })[0] || null

          let selectAddressObj = {}
          if (result && result[idKey]) {
            selectAddressObj = {
              [idKey]: result[idKey],
              [renderKey]: result[renderKey]
            }
          }

          this.updateSelectedAddressArr(selectAddressObj, i)

          if (!this.isGetAddressFaild && nextIndex < len) {
            func(nextIndex)
          } else {
            // 最后一次加入
            // 层级不够 获取到传入的下一级
            if (len < level) {
              this.updateCurrentSelectedLevel(i + 1)
              orglevel = Number(result.orglevel) + 1
              await this.requestData(result[idKey], orglevel)
            }
          }
        }
        func(0)
      }
    },
    computed: {
      ...mapGetters([SUBSIDY_PROJECT_AUDIT_CHANNEL]),
      toolbarScrollIntoView() {
        let str = 'toolbar_'
        const currentSelectedLevel = this.currentSelectedLevel
        return str + currentSelectedLevel
      }
    },
    watch: {
      // 监听value 自动打开/关闭弹窗
      value: {
        handler(val) {
          if (val) {
            this.handleShowPopup()
          } else {
            this.handleHidePopup()
          }
        },
        immediate: true
      },
      // 监听 address 初始化地址
      address(val) {
        if (val && val.length > 0) {
          this.initAddress(val)
        }
      },
      // 监听 requestSystemType，待参数设置完成再请求
      requestSystemType: {
        handler(val) {
          if (val) {
            this.handleInit()
          }
        },
        immediate: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  $border-radius: 16rpx;
  $toolbar-height: 80rpx;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  scroll-view,
  view {
    box-sizing: border-box;
    box-sizing: -webkit-border-box;
  }

  .ez-select-address-wrapper {
    width: 100%;
    background-color: #fff;
    color: #333;
    font-size: 28rpx;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  .header-tip {
    text-align: center;
    line-height: 80rpx;
    font-size: 28rpx;
    position: relative;

    .title {
      font-weight: 500;
    }

    .iconfont-close {
      position: absolute;
      top: 0;
      right: 0;
      line-height: 80rpx;
      padding: 0 32rpx;
      color: $primary;
    }
  }

  .toolbar {
    width: 100%;
    border-bottom: 1px solid #eee;

    .scroll-view {
      width: 100%;
      flex-wrap: nowrap;
      display: flex;
      height: $toolbar-height;

      .scroll-view-items {
        min-width: 100%;
        display: flex;
        align-items: center;
        height: $toolbar-height;
      }

      .scroll-view-item {
        display: flex;
        font-size: 32rpx;
        padding: 0 32rpx;
        white-space: nowrap;

        span {
          line-height: $toolbar-height;
          position: relative;
          transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

          &::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            opacity: 0;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            height: 2px;
            // border-radius: 1px;
            background-color: $primary;
          }
        }

        &.active {
          color: $primary;

          span {
            font-weight: 700;

            &::after {
              bottom: 0;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .swiper {
    width: 100%;
    height: 800rpx;
    height: 60vh;

    .swiper-item {
      width: 100%;
      height: 100%;

      .swiper-item-content {
        width: 100%;
        height: 100%;

        .swiper-scroll-view {
          width: 100%;
          height: 100%;
          position: relative;
        }
      }
    }

    .swiper-scroll-view-item {
      padding: 0 32rpx;
      line-height: 72rpx;
      color: #333;
      font-size: 28rpx;
      display: flex;
      align-items: center;
      &.city_511300 {
        font-size: 34rpx;
        font-weight: 600;
      }
      .iconfont-hook {
        padding-left: 32rpx;
        font-size: 0;
        transition: all 3s cubic-bezier(0.645, 0.045, 0.355, 1);
        opacity: 0;
        transform: scale(0);
      }

      &.active {
        color: $primary;

        .iconfont-hook {
          font-size: 28rpx;
          opacity: 1;
          transform: scale(1);
        }
      }

      &:first-child {
        padding-top: 20rpx;
      }

      &:last-child {
        padding-bottom: 20rpx;
      }
    }

    .loading {
      @include centerPositionTransform();
      color: $primary;
      text-align: center;

      p {
        font-size: 30rpx;
        padding-top: 20px;
        font-weight: 500;
      }

      .iconfont-loading {
        font-size: 80rpx;
        animation: spin 2s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }

    .error {
      @include centerPositionTransform();
      text-align: center;
      white-space: pre-wrap;

      .tip {
        font-size: 26rpx;
        padding-bottom: 64rpx;
        color: #666;
      }
    }
  }
</style>
