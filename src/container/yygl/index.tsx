import React from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Select,
  Card,
  Icon,
  Table,
  Divider,
  Modal
} from "antd";
import { FormWrapper, CardTitleWrapper } from "./style";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
const { Option } = Select;
type CardTitleProps = {
  name?: string;
  titleCard?: any;
};
function CardTitle(props: CardTitleProps) {
  return (
    <CardTitleWrapper>
      {props.titleCard || ""}
      <span className="title">{props.name || ""}</span>
      <Button size="small">刷新</Button>
    </CardTitleWrapper>
  );
}
interface IUser {
  key: string;
  name: string;
  title: string;
}

class Yygl extends React.PureComponent<RouteComponentProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      visible: false
    };
  }
  handleSearch = (e: any) => {
    e.preventDefault();
    this.getYyglList();
  };
  handleReset = () => {
    this.props.form.resetFields();
    this.getYyglList();
  };
  getYyglList() {
    this.props.form.validateFields((err: any, values: any) => {
      console.log("form表单数据: ", values);
      values.pageNum = 1;
      values.pageSize = 1;
      const { yymcLike, yybmLike, yylx } = values;
      let formData = {
        pageNum: 1,
        pageSize: 10,
        yymcLike: yymcLike || "",
        yybmLike: yybmLike || "",
        yylx: yylx || ""
      };
      this.props.getYyglSearch(formData);
    });
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = (e: any) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = (e: any) => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  componentDidMount() {
    this.getYyglList();
  }
  render() {
    const { form, list, tableLoading } = this.props;
    const { getFieldDecorator } = form;
    const columns = [
      {
        title: "应用名称",
        dataIndex: "name",
        key: "name",
        render: (text: string) => <a href="javascript:;">{text}</a>
      },
      {
        title: "应用类型",
        dataIndex: "yylx",
        key: "yylx",
        render: (text: string): any => {
          if (text == "1") {
            return <span>web应用</span>;
          } else if (text == "2") {
            return <span>service应用</span>;
          }
        }
      },
      {
        title: "应用编码",
        dataIndex: "yybm",
        key: "yybm"
      },
      {
        title: "位置序号",
        key: "pxbh",
        dataIndex: "pxbh"
      },
      {
        title: "Action",
        key: "action",
        render: (text: string, record: any) => (
          <span>
            <Button onClick={this.showModal} size="small">
              查看
            </Button>
            <Divider type="vertical" />
            <Button size="small">编辑</Button>
          </span>
        )
      }
    ];
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
                {getFieldDecorator("yymcLike")(
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
                {getFieldDecorator("yybmLike")(
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
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button htmlType="submit" loading={tableLoading} type="primary">
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
        <Card
          bordered={true}
          title={
            <CardTitle
              titleCard={<Icon type="appstore" theme="twoTone" />}
              name={"应用列表"}
            />
          }
          extra={
            <Button icon="plus-circle" size="small">
              新增应用
            </Button>
          }
        >
          <Table<IUser>
            loading={tableLoading}
            size="middle"
            rowKey="id"
            columns={columns}
            dataSource={list.toJS().list}
          />
        </Card>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}
const FormYygl = Form.create({})(Yygl);
const mapStateToProps = (state: any) => {
  return {
    list: state.get("YyglReducer").get("list"),
    tableLoading: state.get('YyglReducer').get('tableLoading')
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getYyglSearch(values: any) {
      dispatch(actionCreators.ac_getYyglList(values));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormYygl)
);
