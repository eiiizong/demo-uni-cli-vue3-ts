<template>
  <qiun-data-charts type="line" :opts="opts" :chartData="chartData" />
</template>

<script setup lang="ts">
import { ref, watch, reactive, onMounted } from 'vue'

const popr = defineProps({
  renderList: {
    type: Array,
    required: true,
  },
})
const customData = reactive({
  chartData: {},
  opts: {},
})

const chartData = ref({})

const opts = ref({
  color: [
    '#1890FF',
    '#91CB74',
    '#FAC858',
    '#EE6666',
    '#73C0DE',
    '#3CA272',
    '#FC8452',
    '#9A60B4',
    '#ea7ccc',
  ],
  padding: [15, 10, 0, 15],
  dataLabel: false,
  dataPointShape: false,
  enableScroll: false,
  legend: {},
  xAxis: {
    disableGrid: true,
  },
  yAxis: {
    gridType: 'dash',
    dashLength: 2,
    data: [
      {
        min: 0,
        max: 150,
      },
    ],
  },
  extra: {
    line: {
      type: 'curve',
      width: 2,
      activeType: 'hollow',
      linearType: 'custom',
    },
  },
})

const getServerData = () => {
  //模拟从服务器获取数据时的延时
  setTimeout(() => {
    //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
    let res = {
      categories: ['2018', '2019', '2020', '2021', '2022', '2023'],
      series: [
        {
          name: '成交量A',
          linearColor: [
            [0, '#1890FF'],
            [0.25, '#00B5FF'],
            [0.5, '#00D1ED'],
            [0.75, '#00E6BB'],
            [1, '#90F489'],
          ],
          data: [15, 45, 15, 45, 15, 45],
        },
        {
          name: '成交量B',
          linearColor: [
            [0, '#91CB74'],
            [0.25, '#2BDCA8'],
            [0.5, '#2AE3A0'],
            [0.75, '#C4D06E'],
            [1, '#F2D375'],
          ],
          data: [55, 85, 55, 85, 55, 85],
        },
        {
          name: '成交量C',
          linearColor: [
            [0, '#FAC858'],
            [0.33, '#FFC371'],
            [0.66, '#FFC2B2'],
            [1, '#FA7D8D'],
          ],
          data: [95, 125, 95, 125, 95, 125],
        },
      ],
    }
    chartData.value = JSON.parse(JSON.stringify(res))
  }, 500)
}
onMounted(() => {
  getServerData()
})
</script>

<style lang="scss" scoped>
$color1: #2661ff;
$color2: #eca02d;
$color3: #009bc2;
$color4: #f85c5c;
.bill-compare {
  width: 100%;
  padding: 0 $spacing;
  padding-top: 24rpx;
  .item {
    display: flex;
    align-items: center;
    border-bottom: 5rpx solid #f5f5f5;
    padding-bottom: 40rpx;
    &:nth-of-type(2) {
      .left {
        .value {
          .val {
            color: $color2;
          }
          .unit {
            color: rgba($color2, 0.65);
          }
        }
      }
    }
    &:nth-of-type(3) {
      .left {
        .value {
          .val {
            color: $color3;
          }
          .unit {
            color: rgba($color3, 0.65);
          }
        }
      }
    }
    &:nth-of-type(4) {
      .left {
        .value {
          .val {
            color: $color4;
          }
          .unit {
            color: rgba($color4, 0.65);
          }
        }
      }
    }
  }
  .echart {
    width: 236rpx;
    height: 120rpx;
  }
  .left {
    flex: 1;
    overflow: hidden;
    .name {
      font-size: 32rpx;
      line-height: 44rpx;
      color: #a7b4d9;
      padding-top: 20rpx;
    }
    .value {
      display: flex;
      align-items: center;
      padding-top: 20rpx;
      .val {
        font-size: 66rpx;
        font-weight: 700;
        line-height: 74rpx;
        color: $color1;
      }
      .unit {
        font-size: 42rpx;
        line-height: 1;
        padding-left: 10rpx;
        color: rgba($color1, 0.65);
      }
    }
    .compare-value {
      display: flex;
      align-items: center;
      font-size: 28rpx;
      line-height: 40rpx;
      color: #a7b4d9;
      padding-top: 18rpx;
      .val {
        font-size: 34rpx;
        font-weight: 700;
      }
      .unit {
        font-size: 28rpx;
        padding-left: 8rpx;
      }
    }
  }
  .right {
    width: 236rpx;
  }
}
</style>
