<template>
  <view class="query-result">
    <div class="wrapper">
      <ZdbTitle title="搜索结果" />
      <div class="items">
        <div v-for="item in aaa" :key="item.id" class="item">
          <CardItem />
        </div>
      </div>
    </div>
    <div class="wrapper">
      <ZdbTitle title="当前对象" />
      <CardItem @clcik="onClick" />
    </div>
  </view>
</template>

<script setup lang="ts">
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'
  import CardItem from './CardItem.vue'

  import { ref } from 'vue'

  const props = defineProps({
    value: {
      type: String,
      default: ''
    }
  })

  const aaa = ref([
    {
      id: '1'
    },
    {
      id: '2'
    }
  ])

  const onClick = () => {
    console.log('12')
  }
</script>

<style lang="scss" scoped>
  .query-result {
    width: 100%;
    .wrapper {
      .items {
        .item {
          margin-bottom: 20rpx;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
</style>
