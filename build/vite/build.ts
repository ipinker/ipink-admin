/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-13 21:51:44
 * @FilePath: /react-admin-main/build/vite/build.ts
 * @Description: 描述
 */
import type { BuildOptions } from 'vite'
import {
  COMP_PATH,
  COMP_PREFIX,
  LAYOUTS_PATH,
  LAYOUTS_NAME
} from '../config'

/**
 * @description 分包配置
 */
export function buildOptions(): BuildOptions {
  return {
    chunkSizeWarningLimit: 1000, // 大于1000k才警告
    sourcemap: process.env.NODE_ENV !== 'production', // 非生产环境开启
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/js/[name].[hash].js',
        entryFileNames: 'assets/js/[name].[hash].js',
        assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
        manualChunks(id) {

          // 布局
          if (id.includes(LAYOUTS_PATH)) {
            return LAYOUTS_NAME
          }

          // 公共组件
          if (id.includes(COMP_PATH)) {
            const result = id
              .split(COMP_PATH)[1]
              .split('/')[0]

            return `${COMP_PREFIX}${result}`
          }
        }
      }
    }
  }
}