<template>
  <YhPopup round position="bottom" custom-style="height: 80%" :close-on-click-overlay="false" :show="modelValue">
    <view class="content-wrapper">
      <div class="toolbar-wrapper">
        <div class="title-wrapper">
          <div class="title">{{ title }}</div>
          <div class="close" @click="onClosePopup">
            <YhIcon name="close" size="32rpx" color="#f00" />
          </div>
        </div>
        <div class="scroll-view-wrapper">
          <scroll-view
            scroll-x
            enable-flex
            scroll-with-animation
            class="scroll-view"
            :scroll-into-view="toolbarScrollIntoView">
            <div
              v-for="(item, index) in selectedList"
              :id="'toolbar_' + index"
              :key="item[idKey]"
              class="scroll-view-item"
              :class="index === currentSelectedLevel ? 'active' : ''"
              @click.stop="onClickToolbarScrollViewItem(index)">
              <span>{{ item[renderKey] }}</span>
            </div>
          </scroll-view>
        </div>
      </div>
      <div class="swiper-wrapper">
        <!-- <swiper class="swiper" :current="currentSelectedLevel" @change="changeSwiper">
          <template v-for="(swiperItme, swiperIndex) in renderDataArr" :key="swiperIndex">
            <swiper-item class="swiper-item">
              <view class="swiper-item-content"> 122 </view>
            </swiper-item>
          </template>
        </swiper> -->
      </div>
    </view>
  </YhPopup>
</template>

<script lang="ts" setup>
  import YhPopup from '@/components/yh/popup/popup.vue'
  import YhIcon from '@/components/yh/icon/icon.vue'

  import { ref, computed, onMounted } from 'vue'
  import orgList from './json/org'

  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    /**
     * 是否显示弹窗
     */
    modelValue: {
      type: Boolean,
      required: true
    },
    /**
     * 类型 org 组织选择 address 地址选择
     */
    type: {
      type: String,
      default: () => 'org'
    },
    /**
     * 标题
     */
    title: {
      type: String,
      default: () => '地区选择'
    },
    /**
     * 标题
     */
    idKey: {
      type: String,
      default: () => 'orgnid'
    },
    /**
     * 标题
     */
    renderKey: {
      type: String,
      default: () => 'orgname'
    }
  })

  // 已经选择的数据
  const selectedList = ref([])

  // 渲染数据
  const renderAllList = ref([])
  // 已经选择的渲染数据
  const renderSelectList = ref([])

  // 当前选择层级
  const currentSelectedLevel = ref(1)

  //
  const toolbarScrollIntoView = computed(() => {
    let str = 'toolbar_'
    return str + currentSelectedLevel.value
  })

  /**
   *  请求数据
   */
  const requestData = () => {
    setTimeout(() => {
      console.log('orgList', orgList)
    }, 2000)
  }

  // 点击事件
  const onClickToolbarScrollViewItem = (index: number) => {}

  // 关闭弹窗事件
  const onClosePopup = () => {
    emit('update:modelValue', false)
  }
  onMounted(() => {
    requestData()
  })
</script>

<style lang="scss" scoped>
  $border-radius: 16rpx;
  $toolbar-height: 80rpx;

  @keyframes spin {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .content-wrapper {
    width: 100%;
    background-color: #fff;
    color: #333;
    font-size: 28rpx;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  .toolbar-wrapper {
    .title-wrapper {
      text-align: center;
      line-height: 80rpx;
      font-size: 32rpx;
      position: relative;

      .title {
        font-weight: 700;
      }
      .close {
        position: absolute;
        right: $spacing - 20rpx;
        top: 50%;
        padding: 20rpx;
        transform: translateY(-50%);
      }
    }

    .scroll-view-wrapper {
      width: 100%;
      border-bottom: 1px solid $color-border;

      .scroll-view {
        width: 100%;
        flex-wrap: nowrap;
        display: flex;
        height: $toolbar-height;

        .scroll-view-items {
          min-width: 100%;
          display: flex;
          align-items: center;
          height: $toolbar-height;
        }

        .scroll-view-item {
          display: flex;
          font-size: 32rpx;
          padding: 0 32rpx;
          white-space: nowrap;

          span {
            line-height: $toolbar-height;
            position: relative;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

            &::after {
              content: '';
              position: absolute;
              bottom: -4px;
              left: 0;
              width: 100%;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
              height: 2px;
              // border-radius: 1px;
              background-color: $primary;
            }
          }

          &.active {
            color: $primary;

            span {
              font-weight: 700;

              &::after {
                bottom: 0;
                opacity: 1;
              }
            }
          }
        }
      }
    }
  }

  .swiper-wrapper {
    .swiper {
      width: 100%;
      height: 800rpx;
      height: 60vh;

      .swiper-item {
        width: 100%;
        height: 100%;

        .swiper-item-content {
          width: 100%;
          height: 100%;

          .swiper-scroll-view {
            width: 100%;
            height: 100%;
            position: relative;
          }
        }
      }

      .swiper-scroll-view-item {
        padding: 0 32rpx;
        line-height: 72rpx;
        color: #333;
        font-size: 28rpx;
        display: flex;
        align-items: center;
        &.city_511300 {
          font-size: 34rpx;
          font-weight: 600;
        }
        .iconfont-hook {
          padding-left: 32rpx;
          font-size: 0;
          transition: all 3s cubic-bezier(0.645, 0.045, 0.355, 1);
          opacity: 0;
          transform: scale(0);
        }

        &.active {
          color: $primary;

          .iconfont-hook {
            font-size: 28rpx;
            opacity: 1;
            transform: scale(1);
          }
        }

        &:first-child {
          padding-top: 20rpx;
        }

        &:last-child {
          padding-bottom: 20rpx;
        }
      }

      .loading {
        @include centerPositionTransform();
        color: $primary;
        text-align: center;

        p {
          font-size: 30rpx;
          padding-top: 20px;
          font-weight: 500;
        }

        .iconfont-loading {
          font-size: 80rpx;
          animation: spin 2s infinite cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }

      .error {
        @include centerPositionTransform();
        text-align: center;
        white-space: pre-wrap;

        .tip {
          font-size: 26rpx;
          padding-bottom: 64rpx;
          color: #666;
        }
      }
    }
  }
</style>
