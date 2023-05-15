/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-15 17:06:31
 * @FilePath: /admin/src/router/App.tsx
 * @Description: 描述
 */
import type { RouteObject } from "react-router-dom"
import { useRoutes } from "react-router-dom"
import routes from '~react-pages'
import Layout from "@/layout"
import Login from '@/pages/login'

const layoutRoutes = (routes: RouteObject[]): RouteObject[] => {
    const layouts: RouteObject[] = [] // layout内部组件

    for (let i = 0; i < routes.length; i++) {
        const { path } = routes[i]
        // 路径为登录页不添加layouts
        if (path !== 'login') {
            layouts.push(routes[i])
        }
    }

    return layouts
}
const newRoutes: RouteObject[] = [
    {
        path: "login",
        element: <Login />
    },
    {
        path: "",
        element: <Layout />,
        children: layoutRoutes(routes)
    }
];
console.log(newRoutes)

function App() {
    return (
        <>
            {useRoutes(newRoutes)}
        </>
    )
}

export default App