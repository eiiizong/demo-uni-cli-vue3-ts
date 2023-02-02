<template>
  <qiun-data-charts
    class="echart"
    type="area"
    canvas-id="echart_line_01"
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
    color: ['#eca02d'],
    padding: [2, 2, 2, 2],
    enableScroll: false,
    dataLabel: false,
    legend: {
      show: false
    },
    xAxis: {
      disabled: true,
      axisLine: false,
      disableGrid: true,
      min: 0
    },
    yAxis: {
      disabled: true,
      disableGrid: true,
      gridType: 'dash',
      dashLength: 1,
      min: 0
    },

    extra: {
      area: {
        type: 'straight',
        opacity: 0.2,
        addLine: true,
        width: 2,
        gradient: false,
        activeType: 'none'
      },
      tooltip: {
        showBox: false,
        showArrow: false,
        splitLine: false
      }
    }
  })

  const getServerData = () => {
    // 模拟从服务器获取数据时的延时
    setTimeout(() => {
      // 模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
      let res = {
        series: [
          {
            name: '',
            data: [15, 45, 15, 45, 15, 45, 40]
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
    background-color: #f0f;
  }
</style>
