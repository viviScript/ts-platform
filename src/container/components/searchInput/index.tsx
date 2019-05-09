import React from 'react';
import {Button, Col, Form, Input, Row} from "antd";

interface IProps {
    handleSearch: (e: any) => void;
    handleReset: () => void;
    form: any
}

class SearchInput extends React.PureComponent<IProps> {
    constructor(props: any) {
        super(props);
    }
    handleSearch = (e: any):void => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                // console.log("form表单数据: ", values);
                this.props.handleSearch(values);
            }
        });
    };
    handleReset = () => {
        this.props.form.resetFields();
        this.props.handleReset()
    };
    render() {
        const { form} = this.props;
        const {getFieldDecorator} = form;
        return (
            <div style={{padding: '20px 0'}}>
                <Form layout="inline" onSubmit={this.handleSearch}>
                    <Row>
                        <Col span={6}>
                            <Form.Item
                                label="字典项名"
                                labelCol={{span: 6}}
                                wrapperCol={{span: 16, offset: 2}}
                            >
                                {getFieldDecorator("mcLike")(
                                    <Input placeholder="请输入字典项名"/>
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="字典项值"
                                labelCol={{span: 6}}
                                wrapperCol={{span: 16, offset: 2}}
                            >
                                {getFieldDecorator("valLike")(
                                    <Input placeholder="请输入字典项值"/>
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label="字典编号"
                                labelCol={{span: 6}}
                                wrapperCol={{span: 16, offset: 2}}
                            >
                                {getFieldDecorator("bhLike")(
                                    <Input placeholder="请输入字典编号"/>
                                )}
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item>
                                <Button htmlType="submit" type="primary">
                                    查询
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Button onClick={this.handleReset} type="primary">
                                    重置
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}
const FormSearchInput = Form.create({})(SearchInput);
export default FormSearchInput;