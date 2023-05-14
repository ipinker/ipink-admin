/*
 * @Author: ipink
 * @Date: 2023-05-14 10:46:47
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 20:52:26
 * @FilePath: /ipink-admin-test01/src/layout/index.tsx
 * @Description: 描述
 */
import { FC } from 'react';
import { Layout } from 'antd';
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

import { menuModeType, selectCollapsed, selectMenuMode } from "@/store/modules/public";

import Header from './components/header';
import MenuComponent from './components/menu';
import styles from './layout.module.less'
import { useSelector } from 'react-redux';

const { Content } = Layout;

const LayoutComponent: FC = () => {
    const { pathname } = useLocation();
    const menuMode: menuModeType = useSelector(selectMenuMode);
    const collapsed: boolean = useSelector(selectCollapsed);

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
                <Header />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutComponent;