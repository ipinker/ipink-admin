/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 13:27:37
 * @FilePath: /react-admin-main/src/menus/index.ts
 * @Description: 描述
 */
import type { SideMenu } from '#/public'
import { content } from './content'

export const defaultMenus: SideMenu[] = [
  {
      label: '数据总览',
      key: 'dashboard',
      icon: 'la:tachometer-alt',
      children: [
        {
          label: '数据总览',
          key: '/dashboard',
          rule: '/dashboard',
        }
      ]
  },
  ...content as SideMenu[],
]