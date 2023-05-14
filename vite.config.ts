/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 16:18:25
 * @FilePath: /ipink-admin-test01/vite.config.ts
 * @Description: 描述
 */
import { defineConfig, loadEnv } from 'vite'
import { handleEnv } from './build/utils/helper'
import { createProxy } from './build/vite/proxy'
import { createVitePlugins } from './build/plugins'
import { buildOptions } from './build/vite/build'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  const viteEnv = handleEnv(env)
  const { VITE_SERVER_PORT, VITE_PROXY } = viteEnv

  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '@': '/src',
        '#': '/types'
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          charset: false,
          additionalData: '@import "./src/assets/css/default.less";'
        },
      },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './tests/index.ts'
    },
    server: {
      open: true,
      port: VITE_SERVER_PORT,
      // 跨域处理
      proxy: createProxy(VITE_PROXY)
    },
    // 去除console和debugger
    esbuild: {
      pure: ["console.log", "debugger"]
    },
    build: buildOptions()
  }
})
