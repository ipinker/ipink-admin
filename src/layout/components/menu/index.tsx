/*
 * @Author: ipink
 * @Date: 2023-05-14 10:46:47
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 22:05:20
 * @FilePath: /ipink-admin-test01/src/layout/components/menu/index.tsx
 * @Description: 描述
 */
import { FC, Key, ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme as antdTheme } from 'antd';
import { useSelector } from "react-redux";
import logo from '@/assets/images/logo.png'
import { menuModeType, selectCollapsed, selectMenuMode, selectTheme } from "@/store/modules/public";
import './menu.module.less';
import styles from './menu.module.less';

type MenuItem = Required<MenuProps>['items'][number];

const { Sider, Header } = Layout;

function getItem(
    label: ReactNode,
    key: Key,
    icon?: ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}


const items: MenuProps['items'] = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
        getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
    ]),

    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Option 11', '11'),
        getItem('Option 12', '12'),
    ])
];


const MenuComponent: FC = () => {
    const { pathname } = useLocation();
    console.log(pathname)
    const menuMode: menuModeType = useSelector(selectMenuMode);
    const collapsed: boolean = useSelector(selectCollapsed);
    const theme = useSelector(selectTheme)
    const [current, setCurrent] = useState(pathname);const {
        token: { colorBgContainer },
    } = antdTheme.useToken();

    // useEffect(() => {
    //     const { tabKey } = getKeyName(pathname)
    //     const higherKey = higherMenuKey(tabKey)
    //     setCurrent(higherKey)
    // }, [higherMenuKey, pathname])

    const onClick: MenuProps['onClick'] = ({ key }) => {
        console.log('click ', key);
        setCurrent(key)
    };

    const LogLink = (options: { vertical?: boolean }) => {
        return (
            <Link 
                className={ `${styles.logoContainer} columnCenter ${ options.vertical? styles.vertical:""}`} 
                to={{ pathname: '/' }}
            >
                <div className='logo center'>
                    <img alt="logo" src={logo} width="32" />
                </div>
            </Link>
        );
    };
    // 横向 Menu
    if (menuMode === 'horizontal') {
        return (
            <Header style={{background:colorBgContainer}} className="flex columnCenter header">
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