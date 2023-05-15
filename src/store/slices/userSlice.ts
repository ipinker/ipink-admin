/*
 * @Author: ipink
 * @Date: 2023-05-13 22:09:44
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 21:54:33
 * @FilePath: /ipink-admin/src/store/slices/userSlice.ts
 * @Description: 描述
 */
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        // 用户权限
        permissions: [],
        // 用户信息
        userInfo: {
            id: 0,
            username: '',
            email: '',
            phone: ''
        }
    },
    reducers: {
        /** 设置用户信息 */
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        /** 设置权限 */
        setPermissions: (state, action) => {
            state.permissions = action.payload
        },
        /** 清除用户信息 */
        clearInfo: (state) => {
            state.userInfo = {
                id: 0,
                username: '',
                email: '',
                phone: ''
            }
        }
    }
})

export const {
    setUserInfo,
    setPermissions,
    clearInfo
} = userSlice.actions;


export const getUserInfo = (state: RootState) => state.user.userInfo;
export const getPermissions = (state: RootState) => state.user.permissions;


export default userSlice.reducer