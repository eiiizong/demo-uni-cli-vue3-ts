<template>
  <demo-block custom-class="white" title="基础用法" padding>
    <yh-divider />
  </demo-block>

  <demo-block custom-class="white" title="内容位置" padding>
    <yh-divider content-position="center">文本</yh-divider>
    <yh-divider content-position="left">文本</yh-divider>
    <yh-divider content-position="right">文本</yh-divider>
  </demo-block>

  <demo-block custom-class="white" title="虚线" padding>
    <yh-divider dashed />
  </demo-block>

  <demo-block custom-class="white" title="自定义样式" padding>
    <yh-divider
      content-position="center"
      custom-style="color: #1989fa; border-color: #1989fa; font-size: 18px;"
      >文本</yh-divider
    >
  </demo-block>
</template>
<script setup>
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhDivider from '@/components/yh/divider/divider.vue'

import { ref, onMounted } from 'vue'

const show = ref(false)

const change = () => {
  show.value = !show.value
}

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 3000)
})
</script>

<style lang="scss" scoped>
.demo-divider {
  width: 100%;
}
.demo-preview {
  display: flex;
  padding: 0 16px;
}

.demo-content {
  padding-top: 6px;
}

.demo-content-h3 {
  margin: 0;
  font-size: 18px;
  line-height: 20px;
}

.demo-content-p {
  margin: 13px 0 0;
  font-size: 14px;
  line-height: 20px;
}

.demo-preview-img {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  margin-right: 16px;
}
</style>
