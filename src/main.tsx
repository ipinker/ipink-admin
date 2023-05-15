/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-15 10:06:24
 * @FilePath: /admin/src/main.tsx
 * @Description: 描述
 */
import ReactDOM from 'react-dom/client'
import Router from './router'
import './main.css'
import '@/assets/css/theme-color.less'
import '@/assets/css/public.less'
import '@/assets/fonts/font.less'

// 状态管理
import { Provider } from 'react-redux'
import { store } from './store'

// 样式
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs' // 兼容低版本浏览器
import 'nprogress/nprogress.css'
import '@/assets/css/scrollbar.less'

// 时间设为中文
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StyleProvider
        hashPriority='high'
        transformers={[legacyLogicalPropertiesTransformer]}
    >
        <Provider store={store}>
            <Router />
        </Provider>
    </StyleProvider>
)

// 关闭loading
const firstElement = document.getElementById('first')
if (firstElement && firstElement.style?.display !== 'none') {
    firstElement.style.display = 'none'
}