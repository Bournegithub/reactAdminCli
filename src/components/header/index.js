import React from 'react';
import {connect} from 'react-redux';
import { Avatar } from 'antd';
import { withRouter } from "react-router-dom";
import { cleanStorage } from '../../utils/localStorage';
import { getStorage } from '../../utils/localStorage';
class ContentHeader extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            userName: getStorage('name'),
            userAvatar: getStorage('avatar')
        }
        console.log('headerprops', props);
    }
    loginOut = () => {
        cleanStorage();
        this.props.history.push('/login');
    }
    render(){
        return(
            <div className="header">
                <div className="headerFn">
                    <span >{this.state.userName}</span>
                    {/*// redux获取*/}
                    {/*{this.props.userInfo ? <Avatar style={{margin: '0 10px 0 0'}} src={this.props.userInfo.avatar} /> : <Avatar style={{margin: '0 10px 0 0'}} icon="user" />}*/}
                    {/*// storage获取*/}
                    {this.state.userAvatar ? <Avatar style={{margin: '0 10px 0 0'}} src={this.state.userAvatar} /> : <Avatar style={{margin: '0 10px 0 0'}} icon="user" />}
                    <span className="loginOutHandle" onClick={this.loginOut}>退出</span>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { userInfo: state.userInfo}
}

export default withRouter(connect(mapStateToProps)(ContentHeader));
// export default ContentHeader;