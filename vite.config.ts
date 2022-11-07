import path from 'path'
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

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
});
