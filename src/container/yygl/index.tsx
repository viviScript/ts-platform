import React from "react";
import { Row, Col, Form, Input, Button, Select } from "antd";
import { FormWrapper } from "./style";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
const { Option } = Select;

class Yygl extends React.PureComponent<RouteComponentProps> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      console.log("Received values of form: ", values);
    });
  };
  render() {
    const {
      getFieldDecorator,
    } = this.props.form;
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSearch}>
          <Row>
            <Col span={6}>
              <Form.Item
                label="应用名称"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16, offset: 2 }}
              >
                {getFieldDecorator("yymc")(
                  <Input placeholder="请输入应用名称" />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="应用编号"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16, offset: 2 }}
              >
                {getFieldDecorator("yybh")(
                  <Input placeholder="请输入应用编号" />
                )}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label="应用类型"
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 16, offset: 2 }}
              >
                {getFieldDecorator("yylx")(
                  <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.props.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="tom">Tom</Option>
                  </Select>
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
                <Button type="primary">重置</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
const FormYygl = Form.create({})(Yygl);
const mapStateToProps = (state: any) => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(FormYygl)
);
