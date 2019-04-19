import React, { Component } from 'react';
import './style/index.scss'
import {
    Form, Icon, Input, Button, Card
} from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { LoginWrapper } from './style/style';
import { ImmuTableProps } from '../../types';
type LoginProps =  {
    userName: string,
    userPassWord: string,
    loading: boolean,
    handleNameChange():void,
    handlePassWordChange():void,
    handleSubmit(e:any, props:any):void
}
class Login extends Component<RouteComponentProps & LoginProps>{
    render() {
        const { userName, userPassWord, handleNameChange, handlePassWordChange, loading, handleSubmit } = this.props;
        return (
            <LoginWrapper>
                <Card
                    title="用户登录"
                    style={{ width: 300 }}
                >
                    <Form onSubmit={(e) => {handleSubmit(e, this.props)}} className="login-form">
                        <Form.Item>
                            <Input onChange={handleNameChange} value={userName} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item>
                            <Input onChange={handlePassWordChange} value={userPassWord} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </LoginWrapper>
        )
    }
}
const mapStateToProps = (state:ImmuTableProps) => {
    return {
        userName: state.get('loginReducer').get('userName'),
        userPassWord: state.get('loginReducer').get('userPassWord'),
        loading: state.get('loginReducer').get('loading')
    }
};
const mapDispatchToProps = (dispatch:any):object => {
    return {
        handleNameChange (e:any):void {
            dispatch(actionCreators.ac_getUserNameChange(e.target.value));
        },
        handlePassWordChange (e:any):void {
            dispatch(actionCreators.ac_getUserPassWordChange(e.target.value));
        },
        handleSubmit (e:any, props:any):void {
            e.preventDefault();
            dispatch(actionCreators.ac_getLoginSubmit(props))
        }
    }
};
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));