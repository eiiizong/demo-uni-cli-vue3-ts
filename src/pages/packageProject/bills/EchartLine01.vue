<template>
  <qiun-data-charts
    class="echart"
    type="area"
    :canvas-id="echartId"
    :canvas2d="true"
    :opts="opts"
    :chart-data="chartData" />
</template>

<script setup lang="ts">
  import { ref, watch, nextTick } from 'vue'

  const props = defineProps({
    /**
     * 渲染数据
     */
    renderList: {
      type: Array,
      required: true
    },
    /**
     * x 轴数据
     */
    xAxis: {
      type: Array,
      required: true
    },
    /**
     * echart id
     */
    echartId: {
      type: String,
      required: true
    },
    /**
     * label
     */
    label: {
      type: String,
      required: true
    },
    /**
     * 展示颜色
     */
    color: {
      type: String,
      default: () => '#2661ff'
    }
  })

  const chartData = ref({})

  const opts = ref({
    color: [props.color],
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
      labelCount: props.renderList.length || 7
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

  const renderEchart = () => {
    const { xAxis, renderList, label } = props

    // 模拟从服务器获取数据时的延时
    setTimeout(() => {
      // 模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
      let res = {
        categories: xAxis,
        series: [
          {
            name: label,
            data: renderList
          }
        ]
      }
      chartData.value = JSON.parse(JSON.stringify(res))
    }, 500)
  }

  watch(
    () => props.renderList,
    (val) => {
      if (val && val.length > 0) {
        nextTick(() => {
          renderEchart()
        })
      }
    },
    { immediate: true }
  )
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
