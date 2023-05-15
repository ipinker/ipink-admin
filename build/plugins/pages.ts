/*
 * @Author: 牛洪法
 * @Date: 2023-05-15 09:38:12
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-15 15:29:27
 * @FilePath: /admin/build/plugins/pages.ts
 * @Description: 自动生成路由基本配置
 */
import Pages from 'vite-plugin-pages'

/**
 * @description 自动生成路由
 */
export function configPageImportPlugin() {
    return [
        Pages({
            dirs: "src/pages",
            resolver: 'react',
            importMode: 'sync',
            routeStyle: 'next',
            extensions: ['tsx', 'jsx'],
            exclude: [
                '**/components/**/*'
            ]
        })
    ]
}