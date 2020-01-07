import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LayoutProvider} from 'react-page-layout'; // 引用react-page-layout， 合适路由引用模版
import PublicLayout from '../components/layOut/index'

const layouts = {
    'public': PublicLayout,
};

export class FrontendAuth extends React.Component{
    constructor(props){
        super(props);
        // console.log(props, 'props');
    }
    render(){
        const { location, routers } = this.props;
        const { pathname } = location;
        const isLogin = localStorage.getItem('token');

        // 如果该路由不用进行权限校验，登录状态下登陆页除外.登陆后，无法跳转到登陆页
        // 非登陆状态下，访问不需要权限校验的路由
        // const targetRouterConfig = config.find((v) => v.path === pathname);
        const targetRouterConfig = routers.find((v) => {
            if (v.path === pathname) {
                return v.path === pathname;
            } else if(v.children) {
                targetRouterConfig(v.children);
            }

        });
        if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
            const { component } = targetRouterConfig;
            return  <LayoutProvider location={this.props.location} layouts={layouts}><Route exact path={pathname} component={component} /></LayoutProvider>
        }

        if(isLogin){
            // 如果是登陆状态，想要跳转到登陆，重定向到主页
            if(pathname === '/login'){
                return <Redirect to='/' />
            }else{
                // 如果路由合法，就跳转到相应的路由
                if(targetRouterConfig){
                    // console.log(this.props.location, 'frontend-this.props.location');
                    // 此处可做判断引用对应的的layout模版
                    // 此种写法可对Route增加自定义属性
                    // return <LayoutProvider location={this.props.location} layouts={layouts}><Route path={pathname} render={(props) => <targetRouterConfig.component example={example} {...props}/>}/></LayoutProvider>
                    return  <LayoutProvider location={this.props.location} layouts={layouts}><Route path={pathname} component={targetRouterConfig.component} /></LayoutProvider>
                }else{
                    // 如果路由不合法，重定向到 404 页面
                    return <Redirect to='/error' />
                }
            }
        }else{
            // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
            if(targetRouterConfig && targetRouterConfig.auth){
                return <Redirect to='/login' />
            }else{
                // 非登陆状态下，路由不合法时，重定向至 404
                return <Redirect to='/error' />
            }
        }
    }
}
export default FrontendAuth;