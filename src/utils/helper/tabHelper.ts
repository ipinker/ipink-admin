/*
 * @Author: ipink
 * @Date: 2023-05-15 22:20:21
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 22:33:22
 * @FilePath: /ipink-admin/src/utils/helper/tabHelper.ts
 * @Description: 描述
 */

import { ReactNode } from "react";
import { Tabs } from "#/public";


export const findTab = (key: string, tabs: Tabs[]): number => tabs.findIndex(item => item.key === key);

export const createTab = (key: string, label: ReactNode, children?: ReactNode): Tabs => {
    return {
        key,
        label,
        children: children || []
    }
}