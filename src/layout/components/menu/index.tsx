/*
 * @Author: ipink
 * @Date: 2023-05-14 10:46:47
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 22:49:53
 * @FilePath: /ipink-admin/src/layout/components/menu/index.tsx
 * @Description: 描述
 */
import { FC, ReactElement, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
    BarsOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme as antdTheme } from 'antd';
import { useSelector } from "react-redux";
import logo from '@/assets/images/logo.png'
import { menuModeType, getCollapsed, getMenuMode, getTheme } from "@/store/slices/publicSlice";
import './menu.module.less';
import styles from './menu.module.less';
import { isPhone } from '@/utils/is';
import { defaultMenus } from "@/menus";

const { Sider, Header } = Layout;


const items: MenuProps['items'] = isPhone() ? 
    [{label: '', key: 'menu', icon: <BarsOutlined />, children: defaultMenus}] :
    defaultMenus
;


const MenuComponent: FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const menuMode: menuModeType = useSelector(getMenuMode);
    const collapsed: boolean = useSelector(getCollapsed);
    const theme = useSelector(getTheme)
    const [current, setCurrent] = useState(pathname);
    const {
        token: { colorBgContainer },
    } = antdTheme.useToken();

    // useEffect(() => {
    //     const { tabKey } = getKeyName(pathname)
    //     const higherKey = higherMenuKey(tabKey)
    //     setCurrent(higherKey)
    // }, [higherMenuKey, pathname])

    const onClick: MenuProps['onClick'] = ({ key }) => {
        setCurrent(key);
        navigate(key);
    };

    const LogLink = (options: { vertical?: boolean }): ReactElement => {
        return !isPhone() && (
            <Link 
                className={ `${styles.logoContainer} columnCenter ${ options.vertical? styles.vertical:""}`} 
                to={{ pathname: '/' }}
            >
                <div className='logo center'>
                    <img alt="logo" src={logo} width="32" />
                </div>
            </Link>
        ) || (<></>);
    };
    // 横向 Menu
    if (isPhone() || menuMode === 'horizontal') {
        return (
            <Header 
                style={{
                    background:colorBgContainer
                }} 
                className={`flex columnCenter header ${isPhone() && styles.phone }`}
            >
                <LogLink />
                <div className={styles.autoWidthMenu}>
                    <Menu
                        mode="horizontal"
                        onClick={onClick}
                        selectedKeys={[current]}
                        theme={theme === 'dark' ? 'dark' :  'light' }
                        items={ items }
                    />
                </div>
            </Header>
        );
    }
    // 传统左侧菜单
    return (
        <Sider theme={theme === 'dark' ? 'dark' :  'light' }
            collapsed={collapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                display: "flex",
                justifyContent: "space-between",
                left: 0,
                userSelect: 'none'
            }}
            width={200}
        >
            <LogLink vertical/>
            <Menu
                mode="inline"
                onClick={onClick}
                selectedKeys={[current]}
                theme={theme === 'dark' ? 'dark' :  'light' }
                items={ items }
            />
        </Sider>
    )
};

export default MenuComponent;