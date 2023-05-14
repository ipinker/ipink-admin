import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '..'

export type ThemeType = 'dark' | 'light';
export type menuModeType = 'horizontal' | 'vertical';

export const publicSlice = createSlice({
    name: 'public',
    initialState: {
        theme: 'light' as ThemeType, // 主题
        collapsed: false, // 菜单收纳状态, 用于垂直布局
        menuMode: 'horizontal' as menuModeType, // 菜单模式, 用于水平布局
        isFullscreen: false, // 是否全屏
        isRefresh: false, // 重新加载
        isRefreshPage: false // 重新加载页面
    },
    reducers: {
        /** 设置主题 */
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        /** 设置全屏 */
        setFullscreen: (state, action) => {
            state.isFullscreen = action.payload
        },
        /** 设置重新加载 */
        setRefresh: (state, action) => {
            state.isRefresh = action.payload
        },
        /** 设置重新加载页面 */
        setRefreshPage: (state, action) => {
            state.isRefreshPage = action.payload
        },
        setCollapsed(state, action) {
            state.collapsed = action.payload
        },
        setMenuMode(state, action) {
            state.menuMode = action.payload as menuModeType;
        }
    }
})

export const {
    setTheme,
    setFullscreen,
    setRefresh,
    setRefreshPage,
    setCollapsed,
    setMenuMode
} = publicSlice.actions

export const selectTheme = (state: RootState) => state.app.theme
export const selectCollapsed = (state: RootState) => state.app.collapsed
export const selectMenuMode = (state: RootState) => state.app.menuMode



export default publicSlice.reducer