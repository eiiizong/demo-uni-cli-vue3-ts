<template>
  <view class="home-popular-services">
    <ZdbPanel title="热门服务">
      <div class="navs">
        <div class="nav" v-for="item in navs" :key="item.id" @click="onJumpRoute(item)">
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
import imageNav01 from './images/nav-01.png'
import imageNav02 from './images/nav-02.png'
import imageNav03 from './images/nav-03.png'
import imageNav04 from './images/nav-04.png'

import ZdbPanel from '@/components/project/zdb-panel/zdb-panel.vue'

import { ref, computed } from 'vue'
import { navigateTo } from '@/utils/uni-api'

import type { PopularServiceNavItem } from './type'

// 热门服务渲染数据
const navs = computed<PopularServiceNavItem[]>(() => {
  const arr: PopularServiceNavItem[] = [
    {
      id: 'rydybz',
      name: '“蓉易贷”一本账',
      desc: '业务情况，在线总览',
      pathName: 'bills',
      packageName: 'packageProject',
      isAuth: false,
      disabled: false,
      imgSrc: imageNav01,
    },
    {
      id: 'hzjg',
      name: '合作机构',
      desc: '查询合作机构详情',
      pathName: '',
      packageName: '',
      isAuth: false,
      disabled: false,
      imgSrc: imageNav02,
    },
    {
      id: 'gzl',
      name: '工作量',
      desc: '经办数据、随时查询',
      pathName: '',
      packageName: '',
      isAuth: false,
      disabled: false,
      imgSrc: imageNav03,
    },
    {
      id: 'ywjs',
      name: '业务介绍',
      desc: '详尽了解“蓉易贷”业务',
      pathName: '',
      packageName: '',
      isAuth: false,
      disabled: false,
      imgSrc: imageNav04,
    },
  ]
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
