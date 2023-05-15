/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 22:05:23
 * @FilePath: /ipink-admin/src/router/index.tsx
 * @Description: 描述
 */
import { useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import nprogress from 'nprogress'
import App from './App'

// antd
import { theme, ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

// antd主题
const { defaultAlgorithm, darkAlgorithm } = theme

// keepalive
import { AliveScope } from 'react-activation'

function Page() {
    const theme: string = 'light';

    // 顶部进度条
    useEffect(() => {
        nprogress.done()

        // 关闭loading
        const firstElement = document.getElementById('first')
        if (firstElement && firstElement.style?.display !== 'none') {
            firstElement.style.display = 'none'
        }

        return () => {
            nprogress.start()
        }
    }, [])
    return (
        <Router>
            <ConfigProvider
                locale={zhCN}
                theme={{
                    algorithm: [theme === 'dark' ? darkAlgorithm : defaultAlgorithm]
                }}
            >
                <AliveScope>
                    <App/>
                </AliveScope>
            </ConfigProvider>
        </Router>
    )
}

export default Page