/*
 * @Author: ipink
 * @Date: 2023-05-13 22:08:59
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 22:36:21
 * @FilePath: /ipink-admin-test01/src/hooks/useToken.ts
 * @Description: 描述
 */
import { TOKEN } from '@/utils/config'
import { set, get, remove } from '@/utils/local'

/**
 * token存取方法
 */
export function useToken() {
    /** 获取token */
    const getToken = () => {
        return get(TOKEN) || ''
    }

    /**
     * 设置token
     * @param value token值
     */
    const setToken = (value: string) => {
        set(TOKEN, value)
    }

    /** 删除token */
    const removeToken = () => {
        remove(TOKEN)
    }

    return [getToken, setToken, removeToken] as const
}
