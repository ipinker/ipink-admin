## 简介

使用`React18`,`Typescript`,`Vite`,`Antd5.0`等主流技术开发的开箱即用的中后台前端项目，`Vite`实现自动生成路由，`react-redux`状态管理，支持虚拟滚动表格，`UnoCss`开发样式。

## 项目演示
[演示地址, 暂时没有](-)<br>

![image](-)

## 安装使用

- 获取项目

```bash
git clone https://github.com/ipinker/ipink-admin.git
```

- 进入目录

```bash
cd ipink-admin
```

- 安装依赖
```bash
yarn install
```

- 运行

```bash
yarn dev
```

- 打包

```bash
yarn build
```

## 项目结构介绍

AdminTemplate
├─build - 构建配置目录
│  ├─plugins - 插件配置
│  │  ├─entry.ts - 入口文件处理
│  │  ├─index.ts -
│  │  ├─pages.ts - 自动生成路由
│  │  ├─preload.ts - 文件加载配置
│  │  └─time.ts  - 显示打包时间插件
│  ├─utils   - 工具
│  │  ├─helper.ts - 工具函数
│  │  └─html.ts   - html的一些处理工具函数
│  ├─vite
│  │  ├─build.ts  - 
│  │  └─proxy.ts  - 代理配置 
│  └─config.ts -配置常量
├─public
│  ├─less.min.js  - 可能用不到,后续会删除, 采用 antd 的CSS-In-Js theme
│  ├─loading.css  - 项目加载动画css
│  ├─logo.png     - 
│  └─manifest.json-
├─types
│  ├─form.d.ts    - 表单类型
│  └─public.d.ts  - 全局类型
├─src
│   ├─assets      - css/fonts/images/js 静态资源
│   ├─components  - 组件库
│   ├─hooks       - hook
│   ├─util        - 工具包
│   ├─store       - redux
│   ├─server      - 请求API集合
│   ├─router      - 路由配置
│   ├─menus       - 菜单 Menu 结构配置
│   ├─layout      - 菜单 Menu 结构配置
│   │   ├─components  - 组件库
│   │   │   ├─breadcrumb  - 面包屑
│   │   │   ├─header
│   │   │   ├─menu      
│   │   │   ├─tab
│   │   │   └─index.tsx 
│   │   └─index.tsx 
│   └─pages       - 内容页面
├─vite.config.ts 
└─tsconfig.json
