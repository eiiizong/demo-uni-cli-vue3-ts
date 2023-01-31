export interface RequestConfig {
  key: string
  s: string
  platform: string
  appname: string
  sdkversion: string
  logversion: string
}
export interface PoiAround {
  location: string
  querytypes?: string
  querykeywords?: string
}

export interface Pois {
  address: string
  adname: string
  biz_ext: {
    cost: string
    meal_ordering: string
    open_time: string
    opentime2: string
    rating: string
  }
  biz_type: string
  childtype: string
  cityname: string
  distance: string
  id: string
  importance: string
  location: string
  name: string
  parent: string
  photos: {
    title: string
    url: string
  }[]
  pname: string
  poiweight: string
  shopid: string
  shopinfo: string
  tel: string
  type: string
  typecode: string
}

export type PoisArr = Pois[]
export interface PoiAroundRes {
  data: {
    count: number
    info: string
    infoCode: string
    status: string
    pois: PoisArr
    suggestion: {
      cities: string
      keywords: string
    }
  }
}
export interface Inputtips {
  location?: string
  keywords: string
}

export interface Tips {
  adcode: string
  address: string
  city: string
  district: string
  id: string
  location: string
  name: string
  typecode: string
}

export type TipsArr = Tips[]
export interface InputtipsRes extends UniApp.RequestSuccessCallbackResult {
  data: {
    count: string
    info: string
    infocode: string
    status: string
    tips: TipsArr
  }
}

export interface RegeoRes extends UniApp.RequestSuccessCallbackResult {
  data: {
    info: string
    infocode: string
    status: string
    regeocode: {
      addressComponent: {
        adcode: string
        building: {
          name: string
          type: string
        }
        businessAreas: {
          id: string
          location: string
          name: string
        }[]
        city: string
        citycode: string
        country: string
        district: string
        neighborhood: {
          name: string
          type: string
        }
        province: string
        streetNumber: {
          direction: string
          distance: string
          location: string
          number: string
          street: string
        }
        towncode: string
        township: string
      }
      aois: {
        adcode: string
        area: string
        distance: string
        id: string
        location: string
        name: string
        type: string
      }[]
      formatted_address: string
      pois: {
        address: string
        businessarea: string
        direction: string
        distance: string
        id: string
        location: string
        name: string
        poiweight: string
        tel: string
        type: string
      }[]
      roadinters: {
        direction: string
        distance: string
        first_id: string
        first_name: string
        location: string
        second_id: string
        second_name: string
      }[]
      roads: {
        direction: string
        distance: string
        id: string
        location: string
        name: string
      }[]
      status: string
    }
  }
}

export interface WeatherRes extends UniApp.RequestSuccessCallbackResult {
  data: {
    count: string
    info: string
    infocode: string
    lives: {
      adcode: string
      city: string
      humidity: string
      province: string
      reporttime: string
      temperature: string
      weather: string
      winddirection: string
      windpower: string
    }[]
    status: string
  }
}

class AmapWx {
  private requestConfig: RequestConfig
  static instance: AmapWx
  constructor(props: { key: string }) {
    this.requestConfig = {
      key: props.key,
      s: 'rsx',
      platform: 'WXJS',
      appname: props.key,
      sdkversion: '1.2.0',
      logversion: '2.0'
    }
  }

  static getInstance(props: { key: string }): AmapWx {
    if (!this.instance) {
      this.instance = new AmapWx({ key: props.key })
    }
    return this.instance
  }

  getWxLocation(cb: (location: string) => void): void {
    uni.getLocation({
      type: 'gcj02',
      success(locRes) {
        const location = locRes.longitude + ',' + locRes.latitude
        cb(location)
      },
      fail: (err) => {
        uni.showModal({
          title: '提示',
          content: '请点击确定进入设置页授予位置消息权限',
          success: (res) => {
            if (res.confirm) {
              uni.openSetting({
                success: () => {
                  this.getWxLocation(cb)
                }
              })
            }
          }
        })
      }
    })
  }
  /**
   * 获取周边信息
   */
  getPoiAround(props: PoiAround): Promise<PoiAroundRes> {
    return new Promise((success, fail) => {
      const config: RequestConfig & PoiAround = {
        location: props.location || '',
        querytypes: props.querytypes || '',
        querykeywords: props.querykeywords || '',
        ...this.requestConfig
      }
      uni.request({
        url: 'https://restapi.amap.com/v3/place/around',
        data: config,
        method: 'GET',
        header: { 'content-type': 'application/json' },
        success,
        fail
      })
    })
  }
  /**
   * 关键词搜索
   */
  getInputtips(props: Inputtips): Promise<InputtipsRes> {
    return new Promise((success, fail) => {
      const config: RequestConfig & Inputtips = {
        location: props.location || '',
        keywords: props.keywords || '',
        ...this.requestConfig
      }
      uni.request({
        url: 'https://restapi.amap.com/v3/assistant/inputtips',
        data: config,
        method: 'GET',
        header: { 'content-type': 'application/json' },
        success,
        fail
      })
    })
  }
  /**
   * 地址逆编码
   */
  getRegeo(props: { location: string }): Promise<RegeoRes> {
    return new Promise((resolve, reject) => {
      const config: RequestConfig & { location: string; extensions: string } = {
        location: props.location || '',
        extensions: 'all',
        ...this.requestConfig
      }
      uni.request({
        url: 'https://restapi.amap.com/v3/geocode/regeo',
        data: config,
        method: 'GET',
        header: { 'content-type': 'application/json' },
        success: (res) => {
          resolve(res as RegeoRes)
        },
        fail: (err) => {
          reject(err)
        }
      })
    })
  }
  /**
   * 获取天气
   */
  getWeather(props: { city: string }): Promise<WeatherRes> {
    return new Promise((resolve, rejects) => {
      const config: RequestConfig & { city: string } = {
        city: props.city,
        ...this.requestConfig
      }
      uni.request({
        url: 'https://restapi.amap.com/v3/weather/weatherInfo',
        data: config,
        method: 'GET',
        header: { 'content-type': 'application/json' },
        success: (res) => {
          resolve(res as WeatherRes)
        },
        fail: (err) => {
          rejects(err)
        }
      })
    })
  }
}

export default AmapWx
