<template>
  <view class="search-statistics-object">
    <QueryCondition v-model="keyword" @confirm="onConfirm" @focus="isShowCurrentObject = true" />
    <template v-if="!isShowCurrentObject">
      <QueryResult
        :render-list="customData.queryResultList"
        :is-request-over="customData.isRequestOver"
        @select="onSelectObj" />
    </template>

    <template v-else>
      <CurrentObject :current-object="currentObject" @show-popup="isShowPopup = true" />
      <div class="button-wrapper">
        <YhButton type="primary" block @click="onClickButton">确定</YhButton>
      </div>
    </template>

    <ZdbSelectOrg v-model="isShowPopup" @change="onChangeSelectOrg" />
  </view>
</template>

<script setup lang="ts">
  import YhButton from '@/components/yh/button/button.vue'
  import ZdbSelectOrg from '@/components/project/zdb-select-org/zdb-select-org.vue'

  import QueryCondition from './QueryCondition.vue'
  import QueryResult from './QueryResult.vue'
  import CurrentObject from './CurrentObject.vue'

  import type { W014SuccessResultListItem } from '@/server/types/api'

  import { ref, reactive, toRefs } from 'vue'
  import { useStoreWorkloadQueryInfo } from '@/stores/modules'
  import { navigateBack } from '@/utils/uni-api'
  import { requestW014 } from '@/server/api'
  import { onLoad } from '@dcloudio/uni-app'

  const storeWorkloadQueryInfo = useStoreWorkloadQueryInfo()

  const { workloadQueryInfo } = toRefs(storeWorkloadQueryInfo)

  /**
   * 是否显示弹窗
   */
  const isShowPopup = ref(false)

  /**
   * 是否显示当前统计对象
   */
  const isShowCurrentObject = ref(true)

  /**
   * 搜索关键字
   */
  const keyword = ref('')

  // 自定义数据
  const customData = reactive<{
    /**
     * 查询结果数据
     */
    queryResultList: W014SuccessResultListItem[]
    /**
     * 是否请求完成 控制 no-data 组件在未请求完成时不显示
     */
    isRequestOver: boolean
  }>({
    queryResultList: [],
    isRequestOver: false
  })

  /**
   * 是否显示当前统计对象
   */
  const currentObject = ref({})

  // 选择组织
  const onChangeSelectOrg = (data: any[]) => {
    if (data && data.length > 0) {
      let org = []
      let userName = ''
      let userId = ''
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        const { ispeople, name, userid } = item
        if (ispeople === '1') {
          userName = name
          userId = userid
        } else {
          org.push(name)
        }
      }
      currentObject.value = {
        name: userName,
        userid: userId,
        org,
        orgnampath: org.join('/')
      }
    }
  }

  // 确定搜索
  const onConfirm = () => {
    const name = keyword.value
    if (name) {
      isShowCurrentObject.value = false
      requestW014(name)
        .then((res) => {
          for (let i = 0, len = res.length; i < len; i++) {
            const item = res[i]
            item.org = item.orgnampath?.split('/')
          }
          customData.queryResultList = [...res]
        })
        .finally(() => {
          customData.isRequestOver = true
        })
    }
  }

  // 选择某个搜索对象
  const onSelectObj = (data: W014SuccessResultListItem) => {
    storeWorkloadQueryInfo.updateWorkloadQueryInfo(data)
    navigateBack()
  }

  const onClickButton = () => {
    storeWorkloadQueryInfo.updateWorkloadQueryInfo(currentObject.value)
    navigateBack()
  }

  onLoad(() => {
    currentObject.value = {
      ...workloadQueryInfo.value,
      org: workloadQueryInfo.value.orgnampath?.split('/')
    }
  })
</script>

<style lang="scss" scoped>
  .search-statistics-object {
    width: 100%;
    .button-wrapper {
      padding: $spacing;
    }
  }
</style>
