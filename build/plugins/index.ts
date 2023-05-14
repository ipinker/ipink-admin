/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 14:53:22
 * @FilePath: /ipink-admin-test01/build/plugins/index.ts
 * @Description: 描述
 */
import type { PluginOption } from 'vite'
import { configPageImportPlugin } from './pages'
import { visualizer } from 'rollup-plugin-visualizer'
import { preloadPlugin } from './preload'
import { timePlugin } from './time'
import react from '@vitejs/plugin-react-swc'
import legacy from '@vitejs/plugin-legacy'
import viteCompression from 'vite-plugin-compression'

export function createVitePlugins() {
  // 插件参数
  const vitePlugins: PluginOption[] = [
    react(),
    // 自动生成路由
    configPageImportPlugin()
  ]

  if (process.env.NODE_ENV === 'production') {
    // 包分析
    visualizer({
      gzipSize: true,
      brotliSize: true,
    }),
    // 兼容低版本
    legacy({
      targets: [ 
          'Android > 39', 
          'Chrome >= 60', 
          'Safari >= 10.1', 
          'iOS >= 10.3', 
          'Firefox >= 54', 
          'Edge >= 15', 
        ], 
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    // 打包时间
    timePlugin(),
    // 预加载处理
    vitePlugins.push(preloadPlugin())
    // 压缩包
    vitePlugins.push(viteCompression())
  }

  return vitePlugins
}
