/*
 * @Author: ipink
 * @Date: 2023-05-11 22:20:37
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 22:54:43
 * @FilePath: /ipink-admin/src/pages/index.tsx
 * @Description: 描述
 */
import { FC, useEffect } from 'react'
import { useNavigate, useLocation, NavigateFunction } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Image from '@/assets/images/welcome.png'
import { addTabs, setActiveKey } from "@/store/slices/tabsSlice"
import { createTab } from '@/utils/helper/tabHelper';

const Page : FC = () => {
    const dispatch = useDispatch()
    const token: string = "rgb";
    const navigate: NavigateFunction = useNavigate()
    const { pathname } = useLocation();
    dispatch( addTabs( createTab(pathname, "首页") ) );
    dispatch( setActiveKey(pathname) );

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