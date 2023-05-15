/*
 * @Author: ipink
 * @Date: 2023-05-14 10:46:56
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 21:55:23
 * @FilePath: /ipink-admin/src/layout/components/header/index.tsx
 * @Description: 描述
 */
import { useState, useEffect, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Layout, theme as antdTheme, MenuProps } from 'antd'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    LoadingOutlined,
    CheckOutlined
} from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, setUserInfo } from '@/store/slices/userSlice'
import {
    getTheme,
    setCollapsed as setCollapsedGlobal,
    getMenuMode,
    setTheme,
    setMenuMode
} from '@/store/slices/publicSlice'
import BreadcrumbComponent from "../breadcrumb"

import classNames from 'classnames'
import style from './header.module.less'
import { isPhone } from '@/utils/is'

const { Header } = Layout;

const HeaderComponent: FC = () => {
    const dispatch = useDispatch()
    const theme = useSelector(getTheme)
    const userInfo = useSelector(getUserInfo)
    const menuMode = useSelector(getMenuMode)
    const history = useNavigate()
    const { username = '-' } = userInfo
    const firstWord = username.slice(0, 1)
    const [collapsed, setCollapsed] = useState(false)
    const [loading, setLoading] = useState(false)

    const isHorizontal: boolean = "" + menuMode === 'horizontal';
    const checkboxItemClass: string = !isHorizontal && style.checkboxItem || "";

    const {
        token: { colorBgContainer, colorText, colorWhite },
    } = antdTheme.useToken();
    const logout = async () => {
        console.log('user 登出', userInfo)
        if (userInfo.id) {
            setLoading(true)
            // 登出 ...
            // do something
            dispatch(setUserInfo({})) // 清除用户信息 下同
        } else {
            dispatch(setUserInfo({}))
            history('/login')
        }
    }

    const changeTheme = (themes: string) => {
        dispatch(setTheme(themes))
    }

    const isDefaultTheme: boolean = theme === "light";

    const toggle = (): void => {
        setCollapsed(!collapsed)
        dispatch(setCollapsedGlobal(!collapsed))
    }

    // 更换主题
    useEffect(() => {
        if ("" + theme === 'dark') {
            // 通过挂载 预定义的postcss less.min.js 来处于 挂载预定义的color.less
            const script = document.createElement('script')
            script.id = 'themeJs'
            script.src = '/less.min.js'
            document.body.appendChild(script)

            setTimeout(() => {
                const themeStyle = document.getElementById('less:color')
                if (themeStyle) localStorage.setItem('themeStyle', themeStyle.innerText)
            }, 500)
        } else {
            // 深色主题: 移除自定义主题 style 节点和 script.src=themeJs 节点. 深色主题见
            const themeJs = document.getElementById('themeJs')
            const themeStyle = document.getElementById('less:color')
            if (themeJs) themeJs.remove()
            if (themeStyle) themeStyle.remove()
            localStorage.removeItem('themeStyle')
        }
    }, [theme]);

    const settings: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className={style.layoutCheckIndicator}>
                    <Icon
                        className="block flex-1 btn ant-btn-link"
                        icon="tabler:layout-navbar"
                        rotate={3}
                        fontSize={36}
                        color="gray"
                        onClick={() => dispatch(setMenuMode('vertical'))}
                    />
                    <CheckOutlined className={checkboxItemClass} />
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div className={style.layoutCheckIndicator}>
                    <Icon
                        className="block flex-1"
                        icon="tabler:layout-navbar"
                        fontSize={36}
                        color="gray"
                        onClick={() => dispatch(setMenuMode('horizontal'))}
                    />
                    <CheckOutlined className={checkboxItemClass} />
                </div>
            ),
        }
    ];

    const menu: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div onClick={logout}>
                    <span className="ant-btn-link">退出登录</span>
                    {loading && <LoadingOutlined />}
                </div>
            ),
        }
    ];

    return (
        <Header
            style={{ padding: 0, background: colorBgContainer }}
            className={classNames(style.header, {
                [style.horizontal]: isHorizontal,
                [style.phone]: isPhone(),
                [style.dark]: theme === 'dark',
                [style.headerFull]: !isHorizontal
            })}
        >
            {/* 非手机端 & 左右分栏 显示 */}
            {!isPhone() && !isHorizontal && (
                <>
                    <div className={style.toggleMenu} onClick={toggle}>
                        {collapsed ? (
                            <MenuUnfoldOutlined className={style.trigger} />
                        ) : (
                            <MenuFoldOutlined className={style.trigger} />
                        )}
                    </div>
                    {/* 面包屑 */}
                    <BreadcrumbComponent />
                    <div className='fGrow'></div>
                </>
            )}

            {/* 右上角 切换菜单模式,  仅在非手机端显示 */}
            { !isPhone() && <Dropdown className={`fr ${style.content}`} menu={{ items: settings }}>
                <span className={style.preference}>
                    <Icon icon="emojione:gear" color={colorText} />
                </span>
            </Dropdown>
            }
            <div className={`fr ${style.themeSwitchWrapper}`}>
                <div
                    className={`${style.themeSwitch} ${!isDefaultTheme && style.themeSwitchDark}`}
                    title="更换主题"
                    onClick={() => changeTheme(isDefaultTheme ? 'dark' : 'light')}
                >
                    <div className={style.themeSwitchInner} />
                    <Icon icon="emojione:sun" color={colorText} />
                    <Icon icon="bi:moon-stars-fill" color={colorWhite} />
                </div>
            </div>
            <div className={` fr ${style.content}`}>
                <a
                    href="https://github.com/hsl947/react-antd-multi-tabs-admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="view github"
                >
                    <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4="
                        alt="github"
                        style={{ height: '26px', color: colorText  }}
                    />
                </a>
            </div>
            <Dropdown className={`fr ${style.content}`} menu={{items: menu}}>
                <span className={style.user}>
                    <span className="avart">{firstWord}</span>
                    <span>{username || '-'}</span>
                </span>
            </Dropdown>
        </Header>
    )
}
export default HeaderComponent
