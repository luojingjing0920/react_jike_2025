# 项目搭建

## 基于CRA创建项目

> CRA是一个底层基于webpack快速创建React项目的脚手架工具

```bash
# 使用npx创建项目
npx create-react-app react-jike

# 进入到项
cd react-jike

# 启动项目
npm start
```
## 调整项目目录结构 

```bash
-src
  -apis           项目接口函数
  -assets         项目资源文件，比如，图片等
  -components     通用组件
  -pages          页面组件
  -store          集中状态管理
  -utils          工具，比如，token、axios 的封装等
  -App.js         根组件
  -index.css      全局样式
  -index.js       项目入口

# 使用scss预处理器

> `SASS` 是一种预编译的 CSS，支持一些比较高级的语法，可以提高编写样式的效率，CRA接入scss非常简单只需要我们装一个sass工具

**实现步骤**

1.  安装解析 sass 的包：`npm i sass -D` 
2.  创建全局样式文件：`index.scss` 

# 组件库antd使用

> 我们的项目是一个传统的PC管理后台，有现成的组件库可以使用，帮助我们提升开发效率，其中使用最广的就是antD

[Ant Design of React - Ant Design](https://ant.design/docs/react/introduce-cn)
**实现步骤**

1. 安装 antd 组件库：`npm i antd`
2. 导入 Button 组件
3. 在 Login 页面渲染 Button 组件进行测试

**测试Button**
`pages/Login/index.jsx`

# 配置基础路由

> 单页应用需要对应的路由支持，我们使用 `react-router-dom` 最新版本

**实现步骤**

1. 安装路由包  `npm i react-router-dom`
2. 准备 `Layout`和 `Login`俩个基础组件
3. 配置路由

**代码实现**
`pages/Layout/index.js`

`pages/Login/index.js`

`router/index.js`

`index.js`

# 配置别名路径

> 项目背景：在业务开发过程中文件夹的嵌套层级可能会比较深，通过传统的路径选择会比较麻烦也容易出错，设置路径别名可以简化这个过程

## 路径编译配置

1. 安装 `craco` 工具包
2. 增加 `craco.config.js` 配置文件(根目录)
3. 修改 `scripts 命令`
4. 测试是否生效

```bash
npm i @craco/craco -D
```

## VsCode提示配置

**实现步骤**

1. 在项目根目录创建 `jsconfig.json` 配置文件
2. 在配置文件中添加以下配置

**代码实现**

:::warning
说明：VSCode会自动读取`jsconfig.json` 中的配置，让vscode知道@就是src目录
:::

# 使用gitee管理项目

# 基本结构搭建

**实现步骤**

1. 在 `Login/index.js` 中创建登录页面基本结构
2. 在 Login 目录中创建 index.scss 文件，指定组件样式
3. 将 `logo.png` 和 `login.png` 拷贝到 assets 目录中

**代码实现**
`pages/Login/index.js`

`pages/Login/index.scss`

# 表单校验实现

**实现步骤**

1. 为 Form 组件添加 `validateTrigger` 属性，指定校验触发时机的集合
2. **为 Form.Item 组件添加 name 属性**
3. 为 Form.Item 组件添加 `rules` 属性，用来添加表单校验规则对象

**代码实现**
`page/Login/index.js`

# 获取登录表单数据

**实现步骤**

1. 为 Form 组件添加 `onFinish` 属性，该事件会在点击登录按钮时触发
2. 创建 onFinish 函数，通过函数参数 values 拿到表单值
3. Form 组件添加 `initialValues` 属性，来初始化表单值

**代码实现**
`pages/Login/index.js`

# 封装request工具模块

> 业务背景: 前端需要和后端拉取接口数据，axios是使用最广的工具插件，针对于项目中的使用，我们需要做一些简单的封装

**实现步骤**

1. 安装 axios 到项目  
2. 创建 utils/request.js 文件
3. 创建 axios 实例，配置 `baseURL，请求拦截器，响应拦截器` 
4. 在 utils/index.js 中，统一导出request

```bash
npm i axios
```

# 使用Redux管理token

## 安装Redux相关工具包

```bash
npm i react-redux @reduxjs/toolkit
```

## 配置Redux

# 实现登录逻辑

> 业务逻辑：
>
> 1. 跳转到首页
> 2. 提示用户登录成功

# token持久化

> 业务背景: Token数据具有一定的时效时间，通常在几个小时，有效时间内无需重新获取，而基于Redux的存储方式又是基于内存的，刷新就会丢失，为了保持持久化，我们需要单独做处理

## 封装存取方法

## 实现持久化逻辑

刷新浏览器，通过Redux调试工具查看token数据

# 请求拦截器注入token

> 业务背景: Token作为用户的数据标识，在接口层面起到了接口权限控制的作用，也就是说后端有很多接口都需要通过查看当前请求头信息中是否含有token数据，来决定是否正常返回数据


> 拼接方式：config.headers.Authorization = `Bearer ${token}}`


`utils/request.js`

# 路由鉴权实现

> 业务背景：封装 `AuthRoute` 路由鉴权高阶组件，实现未登录拦截，并跳转到登录页面
> 实现思路：判断本地是否有token，如果有，就返回子组件，否则就重定向到登录Login


**实现步骤**

1. 在 components 目录中，创建 `AuthRoute/index.jsx` 文件
2. 登录时，直接渲染相应页面组件
3. 未登录时，重定向到登录页面
4. 将需要鉴权的页面路由配置，替换为 AuthRoute 组件渲染

**代码实现**
`components/AuthRoute/index.jsx`

`src/router/index.jsx`