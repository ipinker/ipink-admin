/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 10:43:26
 * @FilePath: /react-admin-main/src/servers/login/index.ts
 * @Description: 描述
 */
import type { LoginData, LoginResult } from '@/pages/login/model'
import type { ServerResult } from '#/public'
import { request } from '@/utils/request'

/**
 * 登录
 * @param data - 请求数据
 */
export function login(data: LoginData) {
    return request.post<ServerResult<LoginResult>>('/login', data)
}

/**
 * 修改密码
 * @param data - 请求数据
 */
export function updatePassword(data: unknown) {
    return request.post<ServerResult>('/update-password', data)
}