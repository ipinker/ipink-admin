/*
 * @Author: ipink
 * @Date: 2023-05-13 22:09:44
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 22:10:30
 * @FilePath: /ipink-admin/src/store/slices/menuSlice.tsx
 * @Description: 菜单 Menu
 */
import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        selectedKeys: 'dashboard', // 菜单选中值
        openKeys: ['Dashboard'], // 菜单展开项
    },
    reducers: {
        setSelectedKeys: (state, action) => {
            state.selectedKeys = action.payload
        },
        setOpenKeys: (state, action) => {
            state.openKeys = action.payload
        }
    }
})

export const {
    setSelectedKeys,
    setOpenKeys
} = menuSlice.actions

export default menuSlice.reducer