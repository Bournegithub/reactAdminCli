// 路由map
import Home from '../views/home/index';
import Login from '../views/login/index';
import ListIndex from '../views/list/index';
import ListDetail from '../views/list/detail';
import ErrorPage from '../views/error/index';
import NoLoginTest from '../views/noLoginTest/index';

const Routers = [
    {path: '/', name:'App', component: Home, auth: true},
    {path: '/home', name:'home', component: Home, auth: true},
    {path: '/login', name: 'login', component: Login, auth: false},
    {path: '/list', name:'list', component: ListIndex, auth: true},
    {path: '/detail:id', name:'detail', component: ListDetail, auth: true},
    {path: '/error', name:'error', component: ErrorPage, auth: false},
    {path:'/nologin', name:'nologin', component: NoLoginTest, auth: false}
];
export default Routers;