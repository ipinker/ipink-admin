/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-13 21:59:21
 * @FilePath: /react-admin-main/src/pages/index.tsx
 * @Description: 描述
 */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Image from '@/assets/images/welcome.png'

function Page() {
  const token = "rgb";
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) navigate('/login')
  }, [token])
  
  return (
    <div className='flex justify-center'>
      <img
        src={Image}
        alt="Image"
        className='w-980px h-full container'
      />
    </div>
  )
}

export default Page