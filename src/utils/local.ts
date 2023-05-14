/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 10:44:29
 * @FilePath: /react-admin-main/src/utils/local.ts
 * @Description: 描述
 */
import { isJson } from "./is";

export const get = (key: string): unknown => {
      const value: string = localStorage.getItem(key) || "";
      if(isJson(value)){
          return JSON.parse(value)
      }
      return value;
  }

export const set = (key: string, value: unknown): boolean => {
      if (value !== null && value !== undefined) {
          const target = typeof value === "string" ? value : JSON.stringify(value);
          localStorage.setItem(key, target);
          return true;
      }
      return false;
  }

export const remove = (key: string): void => {
      localStorage.removeItem(key)
  }

export const clear = (): void => {
      localStorage.clear()
  }