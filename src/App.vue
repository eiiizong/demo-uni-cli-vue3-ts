<script setup lang="ts">
  import { onLaunch, onShow, onHide, onError } from '@dcloudio/uni-app'
  import { checkAppUpdate } from '@/utils/check'
  import { requestCustomLogin } from '@/server/custom-api'
  import { useStoreUserInfo } from '@/stores/modules'

  onLaunch((e) => {
    const storeUserInfo = useStoreUserInfo()

    // 登录
    requestCustomLogin().then((res) => {
      storeUserInfo.updateStoreUserInfo(res)
    })
  })

  onShow((e) => {
    // console.log('App Show', e)
    checkAppUpdate()
  })

  onHide(() => {
    // console.log('App Hide')
  })

  onError((err) => {
    console.log('App error', err)
  })
</script>
<style lang="scss">
  // 引入通用样式
  @use '@/assets/styles/index.scss';
  /* 每个页面公共css */
  // @import '@/assets/styles/scss/index.scss';
  // @import '@/assets/iconfont/index.scss'; // iconfont
  @import '@/assets/fonts/Impact/Impact.scss'; // 字体文件
  // @import '@/assets/fonts/YouSheBiaoTiHei/YouSheBiaoTiHei.scss'; // 字体文件
  // @import '@/assets/fonts/PangMenZhengDao/PangMenZhengDao.scss'; // 字体文件
</style>
