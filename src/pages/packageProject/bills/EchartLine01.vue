<template>
  <qiun-data-charts
    class="echart"
    type="area"
    canvas-id="OSNJlWOeODqfMVYbybuCSSZFBjryAXeJ"
    :canvas2d="true"
    :opts="opts"
    :chart-data="chartData" />
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const props = defineProps({
    renderList: {
      type: Array,
      required: true
    }
  })

  const chartData = ref({})

  const opts = ref({
    color: ['#1890FF'],
    padding: [0, 0, 0, 0],
    enableScroll: false,
    canvas2d: true,
    dataPointShape: false,
    dataLabel: false,
    legend: {
      show: false
    },

    xAxis: {
      disabled: true,
      axisLine: false,
      disableGrid: true,
      lineHeight: 0,
      fontSize: 0,
      titleFontSize: 0,
      labelCount: 7
    },
    yAxis: {
      gridType: 'dash',
      dashLength: 2,
      disabled: true,
      disableGrid: true
    },
    extra: {
      area: {
        type: 'straight',
        opacity: 0.2,
        addLine: true,
        width: 2,
        gradient: false,
        activeType: 'hollow'
      },
      tooltip: {
        showBox: false,
        splitLine: false
      }
    }
  })

  const getServerData = () => {
    // 模拟从服务器获取数据时的延时
    setTimeout(() => {
      // 模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
      let res = {
        categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        series: [
          {
            name: '成交量A',
            data: [35, 18, 25, 37, 30, 20, 30]
          }
        ]
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
  .echart {
    width: 100%;
    height: 100%;
  }
</style>
