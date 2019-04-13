import React, { Component } from 'react';
import './style/index.scss'
import {
    Form, Icon, Input, Button, Checkbox, Card
} from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store'


class CfLogin extends Component{
    render() {
        const { userName, userPassWord, handleNameChange, handlePassWordChange, loading, handleSubmit } = this.props;
        return (
            <div className='login'>
                <Card
                    title="用户登录"
                    style={{ width: 300 }}
                >
                    <Form onSubmit={(e) => {handleSubmit(e, userName, userPassWord)}} className="login-form">
                        <Form.Item>
                            <Input onChange={handleNameChange} value={userName} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item>
                            <Input onChange={handlePassWordChange} value={userPassWord} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>记住我</Checkbox>
                            <a className="login-form-forgot" href="">忘记密码！</a>
                            <Button loading={loading} type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userName: state.get('cfLoginReducer').get('userName'),
        userPassWord: state.get('cfLoginReducer').get('userPassWord'),
        loading: state.get('cfLoginReducer').get('loading')
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleNameChange (e) {
            dispatch(actionCreators.getUserNameChange(e.target.value));
        },
        handlePassWordChange (e) {
            dispatch(actionCreators.getUserPassWordChange(e.target.value));
        },
        handleSubmit (e, userName, userPassWord) {
            e.preventDefault();
            dispatch(actionCreators.getLoginSubmit(userName, userPassWord))
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CfLogin);