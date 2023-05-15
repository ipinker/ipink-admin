/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-15 17:04:57
 * @FilePath: /admin/src/menus/index.tsx
 * @Description: 描述
 */
import type { SideMenu } from '#/public'
import { DashboardOutlined } from '@ant-design/icons'
import { content } from './content'

export const defaultMenus: SideMenu[] = [
  {
      label: '数据总览',
      key: 'dashboard',
      icon: <DashboardOutlined />,
      children: [
        {
          label: '数据总览',
          key: '/dashboard/index',
          rule: '/dashboard/index'
        }
      ]
  },
  ...content as SideMenu[],
]