<template>
  <view class="home-popular-services">
    <ZdbPanel title="热门服务">
      <div class="navs">
        <div class="nav" v-for="item in navs" :key="item.id">
          <div class="key">{{ item.name }}</div>
          <div class="desc">{{ item.desc }}</div>
        </div>
      </div>
    </ZdbPanel>
  </view>
</template>

<script setup lang="ts">
import ZdbPanel from '@/components/project/zdb-panel/zdb-panel.vue'

import { ref } from 'vue'

const navs = ref([
  {
    id: '01',
    name: '“蓉易贷”一本账',
    desc: '业务情况，在线总览',
    pathName: '',
    packageName: '',
    isAuth: false,
    disabled: false,
  },
  {
    id: '02',
    name: '合作机构',
    desc: '查询合作机构详情',
    pathName: '',
    packageName: '',
    isAuth: false,
    disabled: false,
  },
  {
    id: '03',
    name: '逾期提醒',
    desc: '业务即将逾期，请留意',
    pathName: '',
    packageName: '',
    isAuth: false,
    disabled: false,
  },
  {
    id: '04',
    name: '逾期督办',
    desc: '逾期督办，一键督办',
    pathName: '',
    packageName: '',
    isAuth: false,
    disabled: false,
  },
  {
    id: '05',
    name: '业务介绍',
    desc: '详尽了解“蓉易贷”业务',
    pathName: '',
    packageName: '',
    isAuth: false,
    disabled: false,
  },
  {
    id: '05',
    name: '审批进度查询',
    desc: '审批进度，快速查询',
    pathName: '',
    packageName: '',
    isAuth: false,
    disabled: false,
  },
])
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
      width: 50%;
    }
  }
}
</style>
