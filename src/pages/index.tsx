/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: 牛洪法 1242849166@qq.com
 * @LastEditTime: 2023-05-15 17:14:05
 * @FilePath: /admin/src/pages/index.tsx
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
    <div className='full flex flexCenter'>
      <img
        src={Image}
        alt="Image"
        className='imgFit'
      />
    </div>
  )
}

export default Page