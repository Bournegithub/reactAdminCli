import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import menus from '../../router/routeMenu';
import {connect} from "react-redux";
import { menuInfoChange } from '../../store/actions/menuInfoAction';
import PropTypes from 'prop-types';
import { immutableRenderDecorator, shallowEqualImmutable } from 'react-immutable-render-mixin';

const { SubMenu } = Menu;

@immutableRenderDecorator
class ContentSiderBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openKeys: this.props.openMenu,
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqualImmutable(this.props, nextProps)
            || !shallowEqualImmutable(this.state, nextState);
    }
    getRootKeys = ()=> {
        let tempArr = [];
        menus.forEach((item, index) => {
            if(item.children){
                tempArr.push(item.path);
            }
        })
        // console.log('tempArr', tempArr);
        return tempArr;
    }
    rootSubmenuKeys = this.getRootKeys();
    onOpenChange = openKeys => {
        this.props.menuInfoChange({
            openMenu: openKeys,
        });
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    renderMenu = (menus) => {
        return menus.map((item, index) => {
            if(item.children) {
                return (
                    <SubMenu title={<span><Icon type={item.icon} /><span>{item.name}</span></span>} key={item.path} >
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.name} key={item.path}><Link to={item.path}><Icon type={item.icon}></Icon><span>{item.name}</span></Link></Menu.Item>
        })
    }
    render(){
        if(this.props.current.pathname === '/') {
            this.props.current.pathname = '/home';
        }
        return(
            <div className="sideMenu">
                <Menu theme="dark" defaultSelectedKeys={[this.props.current.pathname]} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange} mode="inline">
                    {this.renderMenu(menus)}
                </Menu>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        openMenu: state.menuInfo.openMenu,
    }
}
function mapActionToProps(dispatch) {
    return {
        menuInfoChange : (value) => dispatch(menuInfoChange(value))
    }
}
ContentSiderBar.propTypes = {
    openMenu: PropTypes.array.isRequired,
}
// export default ContentSiderBar;
export default connect(mapStateToProps,mapActionToProps)(ContentSiderBar)