import React, { Component } from 'react';
import './style/index.scss'
import {
    Form, Icon, Input, Button, Checkbox, Card, message
} from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store'
import {
    getLogin
} from '../../api/api';
import {
    USER_TOKEN
} from '../../config/common.const';
import {
    setSession
} from '../../util/index';
class CfLogin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.props);
        this.setState({
            loading: true
        });
        getLogin({
            username: this.props.userName,
            password: this.props.userPassWord
        }).then(res => {
            console.log(res, '登录');
            if (res.data.code === '200') {
                setSession(USER_TOKEN, res.data.data);
                message.success('恭喜您，登录成功！');
            }
            this.setState({
                loading: false
            });
        })
    };
    render() {
        const { userName, userPassWord, handleNameChange, handlePassWordChange } = this.props;
        return (
            <div className='login'>
                <Card
                    title="用户登录"
                    style={{ width: 300 }}
                >
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input onChange={handleNameChange} value={userName} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item>
                            <Input onChange={handlePassWordChange} value={userPassWord} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox>记住我</Checkbox>
                            <a className="login-form-forgot" href="">忘记密码！</a>
                            <Button loading={this.state.loading} type="primary" htmlType="submit" className="login-form-button">
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
        userPassWord: state.get('cfLoginReducer').get('userPassWord')
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleNameChange (e) {
            const action = actionCreators.getUserNameChange(e.target.value);
            dispatch(action);
        },
        handlePassWordChange (e) {
            const action = actionCreators.getUserPassWordChange(e.target.value);
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CfLogin);