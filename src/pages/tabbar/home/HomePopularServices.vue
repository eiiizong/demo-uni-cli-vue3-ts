<template>
  <view class="home-popular-services">
    <ZdbPanel title="热门服务">
      <div class="navs">
        <div v-for="item in navs" :key="item.id" class="nav" @click="onJumpRoute(item)">
          <img :src="item.imgSrc" alt="" class="bg" />
          <div class="content">
            <div class="key">{{ item.name }}</div>
            <div class="desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </ZdbPanel>
  </view>
</template>

<script setup lang="ts">
  import imageNavBMDSQ from './images/nav-bmdsq.png'
  import imageNavWYRZ from './images/nav-wyrz.png'
  import imageNavYWJS from './images/nav-ywjs.png'
  import imageNavHZJG from './images/nav-hzjg.png'
  import imageNavBMDFK from './images/nav-bmdfk.png'
  import imageNavRYDYBZ from './images/nav-rydybz.png'
  import imageNavGZL from './images/nav-gzl.png'
  import imageNavSPJDCX from './images/nav-spjdcx.png'

  import ZdbPanel from '@/components/project/zdb-panel/zdb-panel.vue'

  import type { PopularServiceNavItem } from '@/types'

  import { computed, toRefs } from 'vue'
  import { navigateTo } from '@/utils/uni-api'
  import { useStoreUserInfo } from '@/stores/modules'

  const { userInfo } = toRefs(useStoreUserInfo())

  // 热门服务渲染数据
  const navs = computed<PopularServiceNavItem[]>(() => {
    // “蓉易贷”一本账
    const navRYDYBZ: PopularServiceNavItem = {
      id: 'rydybz',
      name: '“蓉易贷”一本账',
      desc: '业务情况，在线总览',
      pathName: 'bills',
      packageName: 'packageProject',
      isAuth: true,
      disabled: false,
      imgSrc: imageNavRYDYBZ
    }
    // 进度查询
    const navJDCX: PopularServiceNavItem = {
      id: 'jdcx',
      name: '进度查询',
      desc: '审批进度，随时查询',
      pathName: 'process-list',
      packageName: 'packageProcess',
      isAuth: true,
      disabled: false,
      imgSrc: imageNavSPJDCX
    }

    // 合作机构
    const navHZJG: PopularServiceNavItem = {
      id: 'hzjg',
      name: '合作机构',
      desc: '查询合作机构详情',
      pathName: 'org-list',
      packageName: 'packageOrg',
      isAuth: false,
      disabled: false,
      imgSrc: imageNavHZJG
    }

    // 工作量
    const navGZL: PopularServiceNavItem = {
      id: 'gzl',
      name: '工作量',
      desc: '经办数据、随时查询',
      pathName: 'workload',
      packageName: 'packageWorkload',
      isAuth: true,
      disabled: false,
      imgSrc: imageNavGZL
    }

    // 业务介绍
    const navYEJS: PopularServiceNavItem = {
      id: 'ywjs',
      name: '业务介绍',
      desc: '详尽了解“蓉易贷”业务',
      pathName: 'business-intro',
      packageName: 'packageBusiness',
      isAuth: false,
      disabled: false,
      imgSrc: imageNavYWJS
    }

    // 白名单申请
    const navBMDSQ: PopularServiceNavItem = {
      id: 'bmdsq',
      name: '白名单申请',
      desc: '快速申请加入白名单',
      pathName: 'whitelist-apply',
      packageName: 'packageForm',
      isAuth: true,
      disabled: false,
      imgSrc: imageNavBMDSQ
    }

    // 我要融资
    const navWYRZ: PopularServiceNavItem = {
      id: 'wyrz',
      name: '我要融资',
      desc: '快速融资入口',
      pathName: 'financing',
      packageName: 'packageForm',
      isAuth: true,
      disabled: false,
      imgSrc: imageNavWYRZ
    }

    // 白名单反馈
    const navBMDFK: PopularServiceNavItem = {
      id: 'bmdfk',
      name: '白名单反馈',
      desc: '一键监督白名单企业',
      pathName: 'whitelist-feedback',
      packageName: 'packageForm',
      isAuth: true,
      disabled: false,
      imgSrc: imageNavBMDFK
    }

    // 默认为游客访问内容
    const arr: PopularServiceNavItem[] = [navYEJS, navHZJG]

    const { userType } = userInfo.value

    switch (userType) {
      // 领导
      case '2':
        arr.push(navRYDYBZ)
        arr.push(navGZL)
        // 以下权限为测试使用
        arr.push(navJDCX)
        arr.push(navBMDSQ)
        arr.push(navWYRZ)
        arr.push(navBMDFK)
        break
      // 经办人
      case '3':
        arr.push(navRYDYBZ)
        arr.push(navGZL)
        break
      // 合作机构
      case '4':
        arr.push(navJDCX)
        break
      default:
        break
    }

    return arr
  })

  // 路由跳转
  const onJumpRoute = (data: PopularServiceNavItem) => {
    const { pathName, packageName } = data
    navigateTo(pathName, packageName)
  }
</script>

<style lang="scss" scoped>
  .home-popular-services {
    width: 100%;
    background-color: #fff;
    .navs {
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      .nav {
        width: 330rpx;
        height: 200rpx;
        margin-bottom: 28rpx;
        position: relative;
        color: #fff;
        .bg {
          width: 100%;
          height: 100%;
        }
        .content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 0 20rpx;
        }
        .key {
          font-size: 36rpx;
          line-height: 1;
          font-weight: 700;
          padding-top: 74rpx;
        }
        .desc {
          font-size: 28rpx;
          padding-top: 22rpx;
        }
        &:nth-of-type(2n + 1) {
          margin-right: 26rpx;
        }
      }
    }
  }
</style>
