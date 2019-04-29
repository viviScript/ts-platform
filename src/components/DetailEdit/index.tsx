import React from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

class DetailEdit extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical" hideRequiredMark>
        <Form.Item label="应用名称">
          {getFieldDecorator("yymcLike")(
            <Input placeholder="请输入应用名称" />
          )}
        </Form.Item>
        <Form.Item label="应用类型">
          {getFieldDecorator("yylx")(
            <Select
              showSearch
              placeholder="请选择应用类型"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="1">web应用</Option>
              <Option value="2">service应用</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="应用编码">
          {getFieldDecorator("yymcLike")(
            <Input placeholder="请输入应用编码" />
          )}
        </Form.Item>
        <Form.Item label="登录地址">
          {getFieldDecorator("yymcLike")(
            <Input placeholder="请输入登录地址" />
          )}
        </Form.Item>
        <Form.Item label="应用上下文">
          {getFieldDecorator("yymcLike")(
            <Input placeholder="请输入应用上下文" />
          )}
        </Form.Item>
        <Form.Item label="位置序号">
          {getFieldDecorator("yymcLike")(
            <Input placeholder="请输入应用名称" />
          )}
        </Form.Item>
        <Form.Item style={{ textAlign: 'right' }}>
          
          <Button type="info" htmlType="submit">
            取消
          </Button>
          <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const DetailEditForm = Form.create()(DetailEdit);
export default DetailEditForm;
