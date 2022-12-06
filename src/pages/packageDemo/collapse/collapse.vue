<template>
  <div class="demo-calendar">
    <demo-block title="基础用法">
      <yh-collapse :value="active1" data-key="active1" @change="onChange">
        <yh-collapse-item :title="title1">{{ content1 }}</yh-collapse-item>
        <yh-collapse-item :title="title2">{{ content2 }}</yh-collapse-item>
        <yh-collapse-item :title="title3" disabled>{{ content3 }}</yh-collapse-item>
      </yh-collapse>
    </demo-block>

    <demo-block title="手风琴">
      <yh-collapse :value="active2" data-key="active2" accordion @change="onChange">
        <yh-collapse-item :title="title1">{{ content1 }}</yh-collapse-item>
        <yh-collapse-item :title="title2">{{ content2 }}</yh-collapse-item>
        <yh-collapse-item :title="title3">{{ content3 }}</yh-collapse-item>
      </yh-collapse>
    </demo-block>

    <demo-block title="自定义标题内容">
      <yh-collapse :value="active3" data-key="active3" @change="onChange">
        <yh-collapse-item>
          <template #title>
            <view>
              {{ title1 }}
              <yh-icon name="male" custom-class="yh-icon-question" />
            </view>
          </template>

          {{ content1 }}
        </yh-collapse-item>
        <yh-collapse-item :title="title2" value="内容" icon="male">
          {{ content2 }}
        </yh-collapse-item>
      </yh-collapse>
    </demo-block>
  </div>
</template>
<script setup lang="ts">
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'

import YhCollapse from '@/components/yh/collapse/collapse.vue'
import YhCollapseItem from '@/components/yh/collapse-item/collapse-item.vue'
import YhIcon from '@/components/yh/icon/icon.vue'

import { ref, reactive, computed } from 'vue'

const active1 = ref('')
const active2 = ref('')
const active3 = ref('')
const content1 = ref('')
const content2 = ref('')
const content3 = ref('')
const title1 = ref('')
const title2 = ref('')
const title3 = ref('')

const onChange = (e: boolean) => {
  console.log(e)
}
</script>

<style lang="scss" scoped>
.demo-calendar {
  width: 100%;
  background-color: #f8f8f8;
}
</style>
