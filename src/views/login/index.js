import React from 'react';
import { Row, Col } from 'antd';
import WrappedLoginForm from "../../components/login";
import {connect} from "react-redux";
import { userInfoChange } from '../../store/actions/userInfoAction';
import PropTypes from 'prop-types';
import { setStorage } from '../../utils/localStorage';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form:{
                username: '',
                password: '',
                remember: false
            },
        }
    }
    getLoginResult = async (result,msg) =>{
        // 处理登录后逻辑
        let user = msg.data[0];
        await this.props.userInfoChange({
            name: user.name,
            phone: user.phone,
            address: user.address,
            company: user.company,
            avatar: user.avatar
        });
        for (let key in user) {
            setStorage(key, user[key]);
        }
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="login">
                <Row>
                    <Col span={12} offset={6}>
                        <div className="loginBox" id="components-form-demo-normal-login">
                            <WrappedLoginForm { ...this.state.form} parent={ this } />
                            {/*<style jsx>{`*/}
                                {/*#components-form-demo-normal-login .login-form {*/}
                                    {/*max-width: 300px;*/}
                                {/*}*/}
                                {/*#components-form-demo-normal-login .login-form-forgot {*/}
                                    {/*float: right;*/}
                                {/*}*/}
                                {/*#components-form-demo-normal-login .login-form-button {*/}
                                     {/*width: 100%;*/}
                                {/*}*/}
                            {/*`}</style>*/}
                        </div>
                    </Col>
                </Row>
            </div>

        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        name: state.userInfo.name,
        phone: state.userInfo.phone,
        address: state.userInfo.address,
        company: state.userInfo.company,
        avatar: state.userInfo.avatar
    }
}
function mapActionToProps(dispatch) {
    return {
        userInfoChange : (value) => dispatch(userInfoChange(value))
    }
}
Login.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    userInfoChange: PropTypes.func.isRequired
}
export default connect(mapStateToProps,mapActionToProps)(Login)
// export default Login;