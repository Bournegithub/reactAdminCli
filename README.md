# reactAdminCli

说明:

基于react做的后台web架构，方便快速搭建后台项目.

主要插件为cross-env react-router-dom, react-redux, axios, react-page-layout.

UI组件库使用antd

模拟数据使用fastmock

环境变量配置使用了cross-env,src目录下config.js配置文件通过判断当前环境引入了*.json(json中定义对应的接口地址)

http请求方面,主要做了@RequestBody、@RequsetParam、get请求封装，对于header有自定义要求的自行修改.请求前统一拦截，返回后统一拦截.可自行选择在那一层做对应处理，公用处理放在http.js里面

react-redux模块化管理，其他数据根据userInfo示例修改即可

路由做了全局路由守卫,未设置页面重定向到登录页面、登录后返回原页面.

在frontendAuth.js路由守卫处理文件里，可对应不同路由选择不同的页面layout布局，具体参考引入PublicLayout的用法,多套layout布局可通过判断路由来加载不同的layout.

使用:

npm install
npm run start

