<template>
  <div class="demo-popup">
    <demo-block title="基础用法">
      <yh-cell title="展示弹出层" is-link @click="show.basic = true" />
      <yh-popup :show="show.basic" custom-style="padding: 30px 50px" @close="show.basic = false">
        内容
      </yh-popup>
    </demo-block>

    <!-- <demo-block title="弹出位置">
      <yh-cell title="顶部弹出" is-link @click="showTop" />
      <yh-cell title="底部弹出" is-link @click="showBottom" />
      <yh-cell title="左侧弹出" is-link @click="showLeft" />
      <yh-cell title="右侧弹出" is-link @click="showRight" />

      <yh-popup :show="show.top" position="top" custom-style="height: 20%" bind:close="hideTop" />
      <yh-popup
        :show="show.bottom"
        position="bottom"
        custom-style="height: 20%"
        bind:close="hideBottom"
      />
      <yh-popup
        :show="show.left"
        position="left"
        custom-style="width: 20%; height: 100%"
        bind:close="hideLeft"
      />
      <yh-popup
        :show="show.right"
        position="right"
        custom-style="width: 20%; height: 100%"
        bind:close="hideRight"
      />
    </demo-block>

    <demo-block title="关闭图标">
      <yh-cell title="关闭图标" is-link @click="showCloseIcon" />
      <yh-cell title="自定义图标" is-link @click="showCustomCloseIcon" />
      <yh-cell title="图标位置" is-link @click="showCustomIconPosition" />

      <yh-popup
        :show="show.closeIcon"
        closeable
        position="bottom"
        custom-style="height: 20%"
        bind:close="hideCloseIcon"
      />

      <yh-popup
        :show="show.customCloseIcon"
        closeable
        close-icon="close"
        position="bottom"
        custom-style="height: 20%"
        bind:close="hideCustomCloseIcon"
      />

      <yh-popup
        :show="show.customIconPosition"
        closeable
        close-icon-position="top-left"
        position="bottom"
        custom-style="height: 20%"
        bind:close="hideCustomIconPosition"
      />
    </demo-block>

    <demo-block title="圆角弹窗">
      <yh-cell title="圆角弹窗" is-link @click="showRound" />

      <yh-popup
        :show="show.round"
        round
        position="bottom"
        custom-style="height: 20%"
        bind:close="hideRound"
      />
    </demo-block> -->
  </div>
</template>
<script setup lang="ts">
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhPopup from '@/components/yh/popup/popup.vue'
import YhCell from '@/components/yh/cell/cell.vue'
import YhIcon from '@/components/yh/icon/icon.vue'

import { ref, reactive } from 'vue'

const show = reactive({
  basic: false,
  top: false,
  bottom: false,
  left: false,
  right: false,
  round: false,
  closeIcon: false,
  customCloseIcon: false,
  customIconPosition: false,
})
</script>

<style lang="scss" scoped>
.demo-popup {
  background-color: #f8f8f8;
}
</style>
