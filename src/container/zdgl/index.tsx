import React from 'react';
import {connect} from 'react-redux';
import {actionCreators} from "./store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {Row, Col, Menu, Icon, Button, Card, Table, Tooltip} from 'antd';
import SearchInput from '../components/searchInput';
import CardTitle from "../../components/CardTitle";
import { BtnItem } from './style';
interface IProps {
    getYyFind: () => void;
    yyglList: any;
    tableLoading: boolean;
    defaultKeys: any;
    listTree: any;
    selectedKeysHandle: (values: string[]) => void;
    selectedTypeHandle: (value: string) => void;
    selectType: string;
    ac_getZdTreeByType: (value: any) => void;
}

interface IState {

}

class Zdgl extends React.PureComponent<IProps & RouteComponentProps, IState> {
    constructor(props: any) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSearch = (e: any): void => {
        console.log(e);
        const { selectType, defaultKeys, ac_getZdTreeByType } = this.props;
        let value = {
            id: defaultKeys.toJS()[0],
            type: selectType
        };
        ac_getZdTreeByType({...value, ...e});
    };
    handleReset = (): void => {
        const { selectType, defaultKeys, ac_getZdTreeByType } = this.props;
        let value = {
            id: defaultKeys.toJS()[0],
            type: selectType
        };
        ac_getZdTreeByType(value)
    };
    onSelectHandle = (items: any):void => {
        this.props.selectedKeysHandle(items.selectedKeys);
        this.props.selectedTypeHandle(items.item.props.keyType);
        this.props.ac_getZdTreeByType({
            id: items.selectedKeys[0],
            type: items.item.props.keyType
        })
    }
    componentDidMount(): void {
        this.props.getYyFind()
    }

    render() {

        const columns = [{
            title: '字典项目',
            dataIndex: 'mc',
            key: 'mc',
        }, {
            title: '字典项值',
            dataIndex: 'val',
            key: 'val',
        }, {
            title: '字典编号',
            dataIndex: 'bh',
            key: 'bh',
        }, {
            title: '字典类型',
            dataIndex: 'sfyhzd',
            key: 'sfyhzd',
        }, {
            title: '位置序号',
            dataIndex: 'pxbh',
            key: 'pxbh',
        }, {
            title: '使用标志',
            dataIndex: 'sybz',
            key: 'sybz',
        },{
            title: '操作',
            width: '140px',
            render: () => {
                return (
                    <div>
                        <Tooltip title="查看">
                            <BtnItem> <Icon type="question-circle" theme="twoTone" /></BtnItem>
                        </Tooltip>
                        <Tooltip title="编辑">
                            <BtnItem><Icon type="edit" theme="twoTone" /></BtnItem>
                        </Tooltip>
                        <Tooltip title="删除">
                            <BtnItem><Icon type="delete" theme="twoTone" /></BtnItem>
                        </Tooltip>
                        <Tooltip title="新增">
                            <BtnItem><Icon type="plus-circle" theme="twoTone" /></BtnItem>
                        </Tooltip>
                    </div>
                )
            }
        }];

        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        };
        const {yyglList, tableLoading, defaultKeys, listTree} = this.props;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <Menu
                            selectedKeys={defaultKeys.toJS()}
                            mode="inline"
                            onSelect={this.onSelectHandle}
                        >
                            {
                                yyglList.map((item: any) => {
                                    return <Menu.Item keyType={item.get('type')} key={item.get('id')}>{item.get('yymc')}</Menu.Item>
                                })
                            }
                        </Menu>
                    </Col>
                    <Col span={20}>
                        <SearchInput handleSearch={this.handleSearch} handleReset={this.handleReset}/>
                        <Card
                            bordered={true}
                            title={
                                <CardTitle
                                    titleCard={<Icon type="appstore" theme="twoTone"/>}
                                    name={"系统字典列表"}
                                    loading={tableLoading}
                                />
                            }
                            extra={
                                <div>
                                    <Button icon="cloud-download" size="small">
                                        导入
                                    </Button>
                                    <Button style={{marginLeft: '12px'}} icon="cloud" size="small">
                                        导出
                                    </Button>
                                    <Button style={{marginLeft: '12px'}} icon="plus-circle" size="small">
                                        新增一级目录
                                    </Button>
                                </div>

                            }
                        >
                            <Table loading={tableLoading} columns={columns} rowSelection={rowSelection} dataSource={listTree.toJS()} />,
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        yyglList: state.get('zdglReducer').get('yyglList'),
        tableLoading: state.get('zdglReducer').get('tableLoading'),
        defaultKeys: state.get('zdglReducer').get('defaultKeys'),
        listTree: state.get('zdglReducer').get('listTree'),
        selectType: state.get('zdglReducer').get('selectType')
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getYyFind: () => {
            dispatch(actionCreators.ac_getYyFind())
        },
        ac_getZdTreeByType: (values: any) => {
            dispatch(actionCreators.ac_getZdTreeByType(values))
        },
        selectedKeysHandle: (values: string[]) => {
            dispatch(actionCreators.ac_defaultSelectedKeys(values))
        },
        selectedTypeHandle: (values: string) => {
            dispatch(actionCreators.ac_selectType(values))
        }
    }
};
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Zdgl)
);