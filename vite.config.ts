import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { resolve } from 'path'

const pathResolve = (dir: string): string => {
  /**
   *  process.cwd()方法是流程模块的内置应用程序编程接口，用于获取node.js流程的当前工作目录。
   *  此方法返回一个字符串，该字符串指定node.js进程的当前工作目录。保证文件在不同的目录下执行时，路径始终不变
   */
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.log('当前环境配置字段===>', env)
  return {
    resolve: {
      alias: {
        '@': pathResolve('src') + '/',
        '~': pathResolve('src') + '/',
      },
    },
    css: {
      preprocessorOptions: {
        // 全局样式引入
        scss: {
          additionalData: `
            @use "@/assets/styles/variables/_index.scss" as *;
          `,
        },
      },
    },
    plugins: [uni()],
    build: {
      sourcemap: true,
    },
  }
})
