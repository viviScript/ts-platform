import React from "react";
import { Form, Input, Select, Button, Spin } from "antd";

const { Option } = Select;
interface IProps {
    form: any,
    detailRow: any,
    detailSubmit: (value:any) => void;
    loading: boolean;
    detailClose: () => void;
}
class DetailEdit extends React.PureComponent<IProps, {}> {
   constructor(props: any) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (e: any) {
      e.preventDefault();
      const { detailSubmit, detailClose } = this.props;
      this.props.form.validateFields((err: any, values: any) => {
          if (!err) {
              console.log("form表单数据: ", values);
              detailSubmit(values);
              detailClose();
          }
      });
  }
  render() {
    console.log(this.props, '编辑render');
    const {form, detailRow, loading, detailClose} = this.props;
    const { getFieldDecorator } = form;
    const {name, yylx, yybm, fwlj, yysxw, pxbh, id} = detailRow;
    return (
        <div>
            <Spin spinning={loading}>
            <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark >
                <Form.Item label="应用名称">
                    {getFieldDecorator("yymc", {
                        initialValue: name
                    })(
                        <Input placeholder="请输入应用名称"/>
                    )}
                </Form.Item>
                <Form.Item label="应用类型">
                    {getFieldDecorator("yylx", {
                        initialValue: yylx
                    })(
                        <Select
                            showSearch
                            placeholder="请选择应用类型"
                            optionFilterProp="children"
                            filterOption={(input, option: any) =>
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
                    {getFieldDecorator("yybm", {
                        initialValue: yybm
                    })(
                        <Input placeholder="请输入应用编码"/>
                    )}
                </Form.Item>
                <Form.Item label="登录地址">
                    {getFieldDecorator("fwlj", {
                        initialValue: fwlj
                    })(
                        <Input placeholder="请输入登录地址" />
                    )}
                </Form.Item>
                <Form.Item label="应用上下文">
                    {getFieldDecorator("yysxw", {
                        initialValue: yysxw
                    })(
                        <Input placeholder="请输入应用上下文" />
                    )}
                </Form.Item>
                <Form.Item label="位置序号">
                    {getFieldDecorator("pxbh", {
                        initialValue: pxbh
                    })(
                        <Input placeholder="请输入位置序号" />
                    )}
                </Form.Item>
                {getFieldDecorator("id", {
                    initialValue: id
                })(
                    <Input placeholder="id" type='hidden'/>
                )}
                <Form.Item style={{ textAlign: 'right' }}>

                    <Button type="default" onClick={detailClose}>
                        取消
                    </Button>
                    <Button style={{ marginLeft: 8 }} type="primary" htmlType="submit">
                        保存
                    </Button>
                </Form.Item>
            </Form>
            </Spin>
        </div>
    );
  }
}
const DetailEditForm = Form.create()(DetailEdit);
export default DetailEditForm;
