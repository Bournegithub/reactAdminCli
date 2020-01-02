# reactAdminCli

说明:

基于react做的后台web架构，方便快速搭建后台项目.

主要插件为cross-env react-router-dom, react-redux, axios.

UI组件库使用antd

模拟数据使用fastmock

环境变量配置使用了cross-env,src目录下config.js配置文件通过判断当前环境引入了*.json

http请求方面,主要做了@RequestBody、@RequsetParam、get请求封装，对于header有自定义要求的自行修改.请求前统一拦截，返回后统一拦截.

react-redux模块化管理，其他数据根据userInfo示例修改即可

路由做了全局路由守卫,未设置页面重定向到登录页面、登录后返回原页面.

使用:

npm run install
npm run dev

