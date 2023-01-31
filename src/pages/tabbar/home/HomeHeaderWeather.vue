<template>
  <view class="home-header-weather">
    <div v-if="weatherInfo.city" class="address">
      {{ weatherInfo.city }}
    </div>
    <div v-if="weatherInfo.temperature" class="temperature">{{ weatherInfo.temperature }}°C</div>
  </view>
</template>

<script setup lang="ts">
  import type { Ref } from 'vue'
  import { reactive, ref, onBeforeMount, onMounted } from 'vue'
  import AmapWx from '@/plugins/map/amap-wx'

  const aMap: Ref<any> = ref(null)
  const weatherInfo = reactive({
    city: '',
    temperature: '',
    weather: ''
  })

  // 微信小程序获取天气信息
  const getAMapWeatherWEIXIN = () => {
    console.log('aMap.value', aMap.value)
    const aMapInstance = aMap.value
    aMapInstance.getWxLocation(async (loc: string) => {
      // 获取地址描述数据
      const regeoRes = await aMapInstance.getRegeo({ location: loc })
      let { adcode } = regeoRes.data.regeocode.addressComponent

      // 获取天气数据
      const weatherRes = await aMapInstance.getWeather({
        city: adcode
      })

      const { statusCode, data } = weatherRes
      if (statusCode === 200 && data) {
        const { lives } = data
        const { city, temperature, weather } = lives[0]
        weatherInfo.city = city
        weatherInfo.temperature = temperature
        weatherInfo.weather = weather
      } else {
        console.error('天气数据获取失败')
      }
    })
  }

  onBeforeMount(() => {
    aMap.value = AmapWx.getInstance({ key: '94b2daeab0bc34eece38b7bed6eadbc1' })
  })

  onMounted(() => {
    getAMapWeatherWEIXIN()
  })
</script>

<style lang="scss" scoped>
  .home-header-weather {
    width: auto;
  }
</style>
