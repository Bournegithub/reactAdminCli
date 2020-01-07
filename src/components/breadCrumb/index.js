import React from 'react';
import Routers from '../../router/routerMap';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
const breadcrumbNameMap = {
    '/': 'home',
    '/home': 'home',
    '/level': 'level',
    '/list': 'list',
    '/detail:id': 'detail',
    '/level/sublevel1': 'sublevel1',
    '/level/sublevel2': 'sublevel2'
};
class ContentBreadCrumb extends React.Component {
    constructor(props){
        super(props);
        console.log('ContentBreadCrumb', props);
        console.log(Routers, 'ContentBreadCrumb');
        this.state = {
            breadCrumb: []
        }
    }

    render() {
        const pathSnippets = this.props.pathname.split('/').filter(i => i);
        const breadcrumbItems = pathSnippets.map((_, index) => {
            const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
            return (
                <Breadcrumb.Item key={url}>
                    <Link to={url}>{breadcrumbNameMap[url]}</Link>
                </Breadcrumb.Item>
            );
        });
        const breadArry = this.state.breadCrumb;
        return (
            <div style={{padding:'10px 0'}}>
                <Breadcrumb>
                    {breadcrumbItems}
                </Breadcrumb>
            </div>
        )
    }
}
export default ContentBreadCrumb;