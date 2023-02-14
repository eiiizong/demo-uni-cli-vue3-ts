<template>
  <view class="query-result">
    <div v-if="keyword" class="wrapper">
      <ZdbTitle title="搜索结果" />
      <div class="items">
        <div v-for="item in aaa" :key="item.id" class="item">
          <CardItem />
        </div>
      </div>
    </div>
    <div v-else class="wrapper">
      <ZdbTitle title="当前对象" />
      <CardItem @clcik="emit('showPopup')" />
    </div>
  </view>
</template>

<script setup lang="ts">
  import ZdbTitle from '@/components/project/zdb-title/zdb-title.vue'
  import CardItem from './CardItem.vue'

  import { ref } from 'vue'

  const emit = defineEmits(['showPopup'])
  const props = defineProps({
    keyword: {
      type: String,
      required: true
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

  // const onClick = () => {
  //   console.log('12')
  // }
</script>

<style lang="scss" scoped>
  .query-result {
    width: 100%;
    padding: 0 $spacing;
    background-color: #fff;
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
