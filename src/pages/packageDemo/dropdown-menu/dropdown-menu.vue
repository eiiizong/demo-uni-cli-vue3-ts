<template>
  <demo-block custom-class="white" title="基础用法">
    <yh-dropdown-menu>
      <yh-dropdown-item :value="data.value1" :options="data.option1" />
      <yh-dropdown-item :value="data.value2" :options="data.option2" />
    </yh-dropdown-menu>
  </demo-block>

  <!-- <demo-block custom-class="white" title="自定义菜单内容">
    <yh-dropdown-menu>
      <yh-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
      <yh-dropdown-item id="item" title="{{ itemTitle }}">
        <yh-cell title="{{ switchTitle1 }}">
          <yh-switch
            slot="right-icon"
            size="24px"
            style="height: 26px"
            checked="{{ switch1 }}"
            active-color="#ee0a24"
            bind:change="onSwitch1Change"
          />
        </yh-cell>
        <yh-cell title="{{ switchTitle2 }}">
          <yh-switch
            slot="right-icon"
            size="24px"
            style="height: 26px"
            checked="{{ switch2 }}"
            active-color="#ee0a24"
            bind:change="onSwitch2Change"
          />
        </yh-cell>
        <view style="padding: 5px 16px">
          <yh-button type="danger" block round bind:click="onConfirm">
            确认
          </yh-button>
        </view>
      </yh-dropdown-item>
    </yh-dropdown-menu>
  </demo-block>

  <demo-block custom-class="white" title="自定义选中状态颜色">
    <yh-dropdown-menu active-color="#1989fa">
      <yh-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
      <yh-dropdown-item value="{{ value2 }}" options="{{ option2 }}" />
    </yh-dropdown-menu>
  </demo-block>

  <demo-block custom-class="white" title="向上展开">
    <yh-dropdown-menu direction="up">
      <yh-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
      <yh-dropdown-item value="{{ value2 }}" options="{{ option2 }}" />
    </yh-dropdown-menu>
  </demo-block>

  <demo-block custom-class="white" title="禁用菜单">
    <yh-dropdown-menu>
      <yh-dropdown-item
        value="{{ value1 }}"
        disabled
        options="{{ option1 }}"
      />
      <yh-dropdown-item
        value="{{ value2 }}"
        disabled
        options="{{ option2 }}"
      />
    </yh-dropdown-menu>
  </demo-block> -->
</template>
<script setup>
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhDropdownMenu from '@/components/yh/dropdown-menu/dropdown-menu.vue'
import YhDropdownItem from '@/components/yh/dropdown-item/dropdown-item.vue'

import { ref, onMounted, reactive } from 'vue'

const data = reactive({
  switchTitle1: '包邮',
  switchTitle2: '团购',
  itemTitle: '筛选',
  option1: [
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ],
  option2: [
    { text: '默认排序', value: 'a' },
    { text: '好评排序', value: 'b' },
    { text: '销量排序', value: 'c' },
  ],
  switch1: true,
  switch2: false,
  value1: 0,
  value2: 'a',
})

onMounted(() => {})
</script>

<style lang="scss" scoped></style>
