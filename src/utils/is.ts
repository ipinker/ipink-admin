/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-15 11:07:16
 * @FilePath: /admin/src/utils/is.ts
 * @Description: 描述
 */
/**
 * 是否是方法
 * @param val - 参数
 */
export function isFunction(val: unknown): boolean {
  return typeof val === 'function'
}

/**
 * 是否是数字
 * @param obj - 值
 */
export function isNumber(obj: unknown): boolean {
  return typeof obj === 'number' && isFinite(obj)
}

/**
 * 是否是URL
 * @param path - 路径
 */
export function isUrl(path: string): boolean {
  const reg =
    /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/
  return reg.test(path)
}

/**
 * 是否是NULL
 * @param value - 值
 */
export function isNull(value: unknown): boolean {
  return value === null
}

export const isJson = (str: string): boolean => {
  let jsonObj: object | null;
  try {
      const obj: object = JSON.parse(str);
      jsonObj = obj as object;
  } catch (error) {
      jsonObj = null;
  }
  return jsonObj !== null && typeof jsonObj === "object";
};

export const isPhone = (): boolean => {
    if(window.matchMedia){
        return window.matchMedia("(max-width:500px)").matches;
    }
    return window.innerWidth <= 500;
}