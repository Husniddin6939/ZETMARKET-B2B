import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@charts": path.resolve(__dirname, "./src/components/charts"),
      "@ui": path.resolve(__dirname, "./src/components/ui"),
      "@utils": path.resolve(__dirname, "./src/utils/index.ts"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@router": path.resolve(__dirname, "./src/router"),
      "@pages": path.resolve(__dirname, "./src/pages/index.tsx"),
      "@layouts": path.resolve(__dirname, "./src/layouts"),
      "@ttypes": path.resolve(__dirname, "./src/ttypes"),
      "@constants": path.resolve(__dirname, "./src/constants/index.data.tsx"),
      "@store": path.resolve(__dirname, "./src/stores/store.tsx"),
      "@stores": path.resolve(__dirname, "./src/stores/index.tsx"),
      "@images": path.resolve(__dirname, "./src/images"),
      "@fonts": path.resolve(__dirname, "./src/fonts"),
      "@theme": path.resolve(__dirname, "./src/theme"),

    } as AliasOptions
  },
  css: {
    preprocessorOptions: {
        scss: {
        api: 'modern-compiler'
        }
    }
    }
})
