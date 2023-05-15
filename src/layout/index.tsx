/*
 * @Author: ipink
 * @Date: 2023-05-14 10:46:47
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 22:08:32
 * @FilePath: /ipink-admin/src/layout/index.tsx
 * @Description: 描述
 */
import { FC } from 'react';
import { Layout, theme } from 'antd';
import { Outlet, useLocation } from 'react-router-dom'
import classNames from 'classnames'

import { menuModeType, getCollapsed, getMenuMode } from "@/store/slices/publicSlice";

import Header from './components/header';
import MenuComponent from './components/menu';
import TabComponent from './components/tab'
import styles from './layout.module.less'
import { useSelector } from 'react-redux';

const { Content } = Layout;

const LayoutComponent: FC = () => {
    const { pathname } = useLocation();
    const menuMode: menuModeType = useSelector(getMenuMode);
    const collapsed: boolean = useSelector(getCollapsed);
    const { token: { colorWhite } } = theme.useToken();

    return (
        <Layout
            className={styles.container}
            onContextMenu={(e) => e.preventDefault()}
            style={{ display: pathname.includes('/login') ? 'none' : 'flex' }}
        >
            <MenuComponent />
            <Layout
                className={classNames(styles.content, {
                    [styles.collapsed]: collapsed && menuMode === 'vertical',
                    [styles.horizontal]: menuMode !== 'vertical'
                })}
            >
                <Header/>
                <TabComponent />
                <Content className={ styles.mainContent } style={{background: colorWhite}}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;