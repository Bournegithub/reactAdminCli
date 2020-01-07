// 路由map
import Home from '../views/home/index';
import Login from '../views/login/index';
import ListIndex from '../views/list/index';
import ListDetail from '../views/list/detail';
import ErrorPage from '../views/error/index';
import NoLoginTest from '../views/noLoginTest/index';
import Level from '../views/level/index';
import SubLevel1 from '../views/level/subLevel1/index';
import SubLevel2 from '../views/level/subLevel2/index';

// 嵌套路由菜单由于switch的匹配问题，建议再写一份.如果有好办法请告知我
const Routers = [
    {path: '/', name:'home', component: Home, auth: true},
    {path: '/home', name:'home', component: Home, auth: true},
    {path: '/login', name: 'login', component: Login, auth: false},
    {path: '/list', name:'list', component: ListIndex, auth: true},
    {path: '/detail:id', name:'detail', component: ListDetail, auth: true},
    {
        path: '/level',
        name:'level',
        component: Level,
        auth: true,
    },
    {
        path: '/level/sublevel1',
        name: 'sublevel1',
        component: SubLevel1,
        auth: true
    },
    {
        path: '/level/sublevel2',
        name: 'sublevel2',
        component: SubLevel2,
        auth: true
    },
    {path: '/error', name:'error', component: ErrorPage, auth: false},
    {path:'/nologin', name:'nologin', component: NoLoginTest, auth: false}
];
export default Routers;