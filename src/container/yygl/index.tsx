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
  Drawer
} from "antd";
// import { FormWrapper } from "./style";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import CardTitle from "../../components/CardTitle";
import DetailLook from "../../components/DetailLook";
import DetailEdit from "../../components/DetailEdit";
const { Option } = Select;

interface IUser {
  key: string;
  name: string;
  title: string;
};
interface IState {
  visibleLook: boolean;
  visibleEdit: boolean;
  tableRow: any;
};
interface IProps {
  form: any;
  getYyglSearch: (value: any) => void;
  list: any;
  tableLoading: boolean;
  setYyglUpdate: (value: any) => void;
};
class Yygl extends React.PureComponent<IProps & RouteComponentProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      visibleLook: false,
      visibleEdit: false,
      tableRow: {}
    };
    this.getYyglList = this.getYyglList.bind(this);
  }
  handleSearch = (e: any): void => {
    e.preventDefault();
    this.getYyglList();
  };
  handleReset = (): void => {
    this.props.form.resetFields();
    this.getYyglList();
  };
  getYyglList(): void {
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
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
      }
    });
  }
  showModal = (type: string, row: any) => {
    if (type === '查看') {
      this.setState({
        visibleLook: true
      });
    } else if (type === '编辑') {
      this.setState({
        visibleEdit: true
      });
    }
    this.setState({
      tableRow: row
    });
  };
  onClose = () => {
    this.setState({
      visibleLook: false,
      visibleEdit: false
    });
  };
  componentDidMount() {
    this.getYyglList();
  }
  render() {
    const { form, list, tableLoading, setYyglUpdate } = this.props;
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
        render: (record: any) => (
          <span>
            <Button
              onClick={() => {
                this.showModal('查看', record);
              }}
              size="small"
            >
              查看
            </Button>
            <Divider type="vertical" />
            <Button
              onClick={() => {
                this.showModal('编辑', record);
              }}
              size="small"
            >
              编辑
            </Button>
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
              loading={tableLoading}
              handleBtn={() => {
                this.getYyglList();
              }}
            />
          }
          extra={
            <Button icon="plus-circle" size="small">
              新增应用
            </Button>
          }
        >
          <Table<IUser>  loading={tableLoading} size="middle" rowKey="id" columns={columns} dataSource={list.toJS().list}/>
        </Card>
        <Drawer
          title="查看"
          placement="right"
          width="400"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visibleLook}
        >
          <DetailLook data={this.state.tableRow} />
        </Drawer>
        <Drawer
          title="编辑"
          placement="right"
          width="400"
          closable={false}
          onClose={this.onClose}
          destroyOnClose={true}
          visible={this.state.visibleEdit}
        >
          <DetailEdit data={this.state.tableRow} loading={tableLoading} onSubmit={setYyglUpdate} onClose={this.onClose}/>
        </Drawer>
      </div>
    );
  }
}
const FormYygl = Form.create({})(Yygl);
const mapStateToProps = (state: any) => {
  return {
    list: state.get("YyglReducer").get("list"),
    tableLoading: state.get("YyglReducer").get("tableLoading")
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    getYyglSearch(values: any) {
      dispatch(actionCreators.ac_getYyglList(values));
    },
    setYyglUpdate(values: any) {
      dispatch(actionCreators.ac_setYyglUpdate(values));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FormYygl)
);
