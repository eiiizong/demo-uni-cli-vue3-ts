<template>
  <div class="demo-cell">
    <demo-block title="基础用法">
      <yh-cell-group>
        <yh-cell title="单元格" value="内容" />
        <yh-cell title="单元格" value="内容" label="描述信息" :border="false" />
      </yh-cell-group>
    </demo-block>

    <demo-block title="单元格大小">
      <yh-cell-group>
        <yh-cell title="单元格" value="内容" size="large" />
        <yh-cell title="单元格" value="内容" size="large" use-label-slot :border="false">
          <template #label>
            <view>描述信息</view>
          </template>
        </yh-cell>
      </yh-cell-group>
    </demo-block>

    <demo-block title="展示图标">
      <yh-cell title="单元格" value="内容" icon="male" :border="false" />
    </demo-block>

    <demo-block title="展示箭头">
      <yh-cell title="单元格" is-link />
      <yh-cell title="单元格" value="内容" is-link />
      <yh-cell title="单元格" is-link arrow-direction="down" value="内容" :border="false" />
    </demo-block>

    <demo-block title="页面跳转">
      <yh-cell title="单元格" is-link url="/pages/dashboard/index" />
      <yh-cell title="单元格" is-link url="/pages/dashboard/index" link-type="redirectTo" />
    </demo-block>

    <demo-block title="分组标题">
      <yh-cell-group title="分组 1">
        <yh-cell title="单元格" value="内容" />
      </yh-cell-group>
      <yh-cell-group title="分组 2">
        <yh-cell title="单元格" value="内容" />
      </yh-cell-group>
    </demo-block>

    <demo-block title="使用插槽">
      <yh-cell value="内容" icon="shop-o" is-link>
        <view slot="title">
          <view class="title">单元格</view>
          <yh-tag type="danger">标签</yh-tag>
        </view>
      </yh-cell>
      <yh-cell title="单元格" :border="false">
        <yh-icon slot="right-icon" name="search" />
      </yh-cell>
    </demo-block>

    <demo-block title="垂直居中">
      <yh-cell center title="单元格" value="内容" label="描述信息" />
    </demo-block>
  </div>
</template>
<script setup lang="ts">
import DemoBlock from '@/pages/packageDemo/components/demo-block/demo-block.vue'
import YhCellGroup from '@/components/yh/cell-group/cell-group.vue'
import YhCell from '@/components/yh/cell/cell.vue'
</script>

<style lang="scss" scoped>
.demo-icon {
  width: 100%;
  color: #323232;
  .items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    .item {
      text-align: center;
      margin-bottom: 32rpx;
      margin: 0 32rpx;
      .name {
        font-size: 24rpx;
        line-height: 48rpx;
        color: #666;
      }
    }
  }
}
</style>
