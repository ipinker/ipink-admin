/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 22:06:01
 * @FilePath: /ipink-admin/src/store/index.tsx
 * @Description: 描述
 */
import { configureStore } from '@reduxjs/toolkit'
import publicReducer from './slices/publicSlice'
import menuReducer from './slices/menuSlice'
import tabsReducer from './slices/tabsSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
    reducer: {
        app: publicReducer,
        menu: menuReducer,
        tabs: tabsReducer,
        user: userReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
