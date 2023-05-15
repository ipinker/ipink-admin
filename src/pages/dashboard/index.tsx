/*
 * @Author: ipink
 * @Date: 2023-05-13 22:16:17
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-15 14:36:58
 * @FilePath: /admin/src/pages/dashboard/index.tsx
 * @Description: 描述
 */
import type { FormData } from '#/form'
import { useCallback, useEffect, useState } from 'react'
import { useTitle } from '@/hooks/useTitle'

// 初始化搜索
const initSearch = {
  pay_date: ['2022-10-19', '2022-10-29']
}

function Dashboard() {
  useTitle('数据展览')
  const [isLoading, setLoading] = useState(false)

  /**
   * 搜索提交
   * @param values - 表单返回数据
   */
  const handleSearch = useCallback(async (values: FormData) => {
    const query = { ...values }
    try {
      setLoading(true)
      console.log(query, isLoading)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    handleSearch(initSearch)
  }, [handleSearch])

  return (
   
    <div className='py-10px'>
      hello world dashboard!
    </div>
  )
}

export default Dashboard