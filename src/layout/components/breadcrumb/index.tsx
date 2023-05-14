/*
 * @Author: ipink
 * @Date: 2023-05-14 10:49:27
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-14 22:20:55
 * @FilePath: /ipink-admin-test01/src/layout/components/breadcrumb/index.tsx
 * @Description: 描述
 */
import { FC } from 'react';
import { Breadcrumb, theme } from 'antd';

const BreadcrumbComponent: FC = () => {
    const {
        token: { colorText },
    } = theme.useToken();

    const Text = (props: { title: string}) => {
        const { title } = props;
        return ( <span style={{color: colorText}}>{title}</span> );
    };
    return (
        <Breadcrumb
            separator=">"
            items={[
            {
                title: <Text title='Home'/>,
            },
            {
                title: <Text title='Application Center'/>,
                href: '',
            },
            {
                title: <Text title='Application List'/>,
                href: '',
            },
            {
                title: <Text title='An Application'/>,
            },
            ]}
        />
    );
}
export default BreadcrumbComponent;