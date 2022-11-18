import uni from '@dcloudio/vite-plugin-uni'
import path from 'path'
// import vue from '@vitejs/plugin-vue'
// import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
// import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  plugins: [uni()],
  build: {
    sourcemap: true,
  },
})
