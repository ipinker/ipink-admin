/*
 * @Author: 牛洪法
 * @Date: 2023-05-15 09:38:12
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-15 16:28:04
 * @FilePath: /admin/src/menus/content.tsx
 * @Description: 描述
 */
import type { SideMenu } from '#/public'
import { BookOutlined } from '@ant-design/icons'

export const content: SideMenu[] = [
    {
        label: '内容管理',
        key: 'content',
        icon: <BookOutlined />,
        children: [
            {
                label: '文章管理',
                key: '/content/article',
                rule: '/content/article',
            },
        ]
    }
]
