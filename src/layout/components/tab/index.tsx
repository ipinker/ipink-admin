/*
 * @Author: ipink
 * @Date: 2023-05-14 10:47:06
 * @LastEditors: ipink 1242849166@qq.com
 * @LastEditTime: 2023-05-15 23:09:48
 * @FilePath: /ipink-admin/src/layout/components/tab/index.tsx
 * @Description: 描述
 */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Tabs } from 'antd';
import { 
    getActiveKey,
    getTabs,
    setActiveKey,
    setNav,
    addTabs,
    closeTabs,
    closeTabGoNext,
    closeLeft,
    closeRight,
    closeOther,
    closeAllTab
} from "@/store/slices/tabsSlice"
import parentStyle from '../../layout.module.less'
import style from './tab.module.less'

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const defaultPanes = new Array(2).fill(null).map((_, index) => {
    const id = String(index + 1);
    return { label: `Tab ${id}`, key: id };
});

const TabComponent: React.FC = () => {
    const dispatch = useDispatch();
    const activeKey = useSelector(getActiveKey);
    const [items, setItems] = useState(defaultPanes);
    const newTabIndex = useRef(0);
    const tabs = useSelector(getTabs);
    
    useEffect(() => {
        console.log(tabs, activeKey)
        
    }, [tabs, activeKey])
    

    const onChange = (key: string) => {
        dispatch(setActiveKey(key));
    };

    const add = () => {
        const newActiveKey = `newTab${newTabIndex.current++}`;
        setItems([...items, { label: 'New Tab', key: newActiveKey }]);
        setActiveKey(newActiveKey);
    };

    const remove = (targetKey: TargetKey) => {
        const targetIndex = items.findIndex((pane) => pane.key === targetKey);
        const newPanes = items.filter((pane) => pane.key !== targetKey);
        if (newPanes.length && targetKey === activeKey) {
            const { key } = newPanes[targetIndex === newPanes.length ? targetIndex - 1 : targetIndex];
            setActiveKey(key);
        }
        setItems(newPanes);
    };

    const onEdit = (targetKey: TargetKey, action: 'add' | 'remove') => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };

    return (
        <div className={ `${parentStyle.mainContent} ${style.tabMain}` }>
            <Tabs
                // hideAdd
                onChange={onChange}
                activeKey={activeKey}
                type="editable-card"
                onEdit={onEdit}
                items={items}
            />
        </div>
    );
};

export default TabComponent;