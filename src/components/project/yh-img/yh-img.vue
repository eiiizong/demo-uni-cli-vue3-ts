<template>
  <view
    class="ez-img-wrapper"
    :style="imageWrapperStyle"
    @click="$emit('click')"
  >
    <img
      :src="imageSrc"
      alt=""
      :style="imageWrapperStyle"
    />
  </view>
</template>

<script>
/**
 * 图片组件
 * @description 图片组件
 * @param {Object} path 图片地址 httpSrc 优先级最高
 * @param {String} width 图片宽度
 * @param {String} height 图片高度
 */
export default {
  name: 'ezImage',
  props: {
    // 路径对象
    path: {
      type: [Object],
      required: true,
    },
    // 宽
    width: {
      type: [String],
      default: '',
    },
    // 高
    height: {
      type: [String],
      default: '',
    },
  },
  components: {},
  data() {
    return {}
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {
    imageSrc() {
      let str = ''
      const path = this.path
      if (path) {
        const { httpSrc, src } = path
        if (src) {
          str = src
        }
        if (httpSrc) {
          str = httpSrc
        }
      }
      return str
    },
    imageWrapperStyle() {
      let str = ''
      const width = this.width
      const height = this.height
      if (width) {
        str += `width: ${width}; `
      }
      if (height) {
        str += `height: ${height}; `
      }
      return str
    },
  },
  watch: {},
}
</script>

<style lang="scss" scoped>
.ez-img-wrapper {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
