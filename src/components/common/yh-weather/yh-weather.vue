<template>
  <div class="yh-weather-wrapper">
    <div
      class="yh-weather-temperature Impact"
      :style="temperatureStyle"
      v-if="weatherInfo.temperature"
    >
      {{ weatherInfo.temperature }}°C
    </div>
    <div class="yh-weather-city" v-if="weatherInfo.city">
      <span class="city">{{ weatherInfo.city }}</span>
      <span class="weather">{{ weatherInfo.weather }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'

// #ifdef MP-WEIXIN
import AMapWX from '@/plugins/mapSDK/amap-wx.130.js'
// #endif
import config from '@/config/index.js'

const props = defineProps({
  align: {
    type: [String],
    default: '',
  },
})

const _aMap = ref(null)

const weatherInfo = reactive({
  city: '',
  temperature: '',
  weather: '',
})

const getAMapWeatherWEIXIN = () => {
  _aMap.value.getWeather({
    success(res) {
      const { city, temperature, weather } = res.liveData
      weatherInfo.city = city
      weatherInfo.temperature = temperature
      weatherInfo.weather = weather
    },
    fail(err) {
      console.log(err, 8888)
    },
  })
}
const temperatureStyle = computed(() => {
  let str = ''
  const { align } = props
  if (align) {
    str += `text-align: ${align}; `
  }
  return str
})
onMounted(() => {
  _aMap.value = new AMapWX({
    key: config.aMapKey,
  })
  getAMapWeatherWEIXIN()
})
</script>
<style lang="scss" scoped>
.yh-weather-wrapper {
  font-size: 48rpx;
  line-height: 58rpx;
  color: #ffffff;
  font-weight: 500;
}
.yh-weather-city {
  font-weight: 500;
  font-size: 24rpx;
  padding-top: 4rpx;
  line-height: 32rpx;
  display: flex;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  .weather {
    padding-left: 12rpx;
  }
}
</style>
