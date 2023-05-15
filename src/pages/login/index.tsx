/*
 * @Author: 牛洪法
 * @Date: 2023-05-15 09:38:12
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 22:04:16
 * @FilePath: /ipink-admin/src/pages/login/index.tsx
 * @Description: 描述
 */
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Form, Input, Button, theme as antdTheme } from 'antd'
import { useSelector } from "react-redux"
import ReactCanvasNest from 'react-canvas-nest'
import { CommonObjectType } from '#/public';
import style from './login.module.less';
import Logo from '@/assets/images/logo.png';
import { getTheme } from "@/store/slices/publicSlice";


const LoginForm: FC = () => {
    const navigate = useNavigate();
    const theme = useSelector(getTheme);
    console.log(theme)
    const floatColor = theme === 'dark' ? '110,65,255' : '24,144,255';
    const { token: { colorBgContainer } } = antdTheme.useToken();

    //   useEffect(() => {
    //     const { token } = userInfo
    //     if (token) {
    //       navigate.push('/')
    //       return
    //     }
    //     // 重置 tab栏为首页
    //     dispatch(setTabs(['/']))
    //   }, [navigate, dispatch, userInfo])

    // 触发登录方法
    const onFinish = async (values: CommonObjectType<string>) => {
        const { username, password } = values;
        console.log(values)
        // message.error( `发生错误:${response.data}` )
        if(username && password){
            navigate('/');
        }
    }

    const FormView = (
        <Form
            initialValues={{ username: 'admin', password: '123456' }}
            className={ style.loginForm }
            name="login-form"
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: '请输入用户名' }]}
            >
                <Input placeholder="用户名" prefix={<UserOutlined />} size="large" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
            >
                <Input.Password
                    placeholder="密码"
                    prefix={<LockOutlined />}
                    size="large"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    className={ style.loginFormButton }
                    htmlType="submit"
                    size="large"
                    type="primary"
                >
                    登录
                </Button>
            </Form.Item>
        </Form>
    )

    return (
        <div className={ style.loginLayout } style={{ backgroundColor: colorBgContainer }} id="login-layout">
            <ReactCanvasNest
                config={{
                    pointColor: floatColor,
                    lineColor: floatColor,
                    pointOpacity: 0.6
                }}
                style={{ zIndex: 1 }}
            />
            <div className={ style.logoBox }>
                <img alt="" className={style.logo} src={Logo} />
                <span className={style.logoName}>React-Antd Multi-Tab</span>
            </div>
            {FormView}
        </div>
    )
}

export default LoginForm
