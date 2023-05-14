import { configureStore } from '@reduxjs/toolkit'
import publicReducer from './modules/public'
import menuReducer from './modules/menu'
import tabsReducer from './modules/tabs'
import userReducer from './modules/user'

export const store = configureStore({
    reducer: {
        app: publicReducer,
        menu: menuReducer,
        tabs: tabsReducer,
        user: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
