import React from 'react';
import {connect} from 'react-redux';
import {actionCreators} from "./store";
import {withRouter, RouteComponentProps} from 'react-router-dom';
import {Row, Col, Menu, Icon, Button, Card, Table} from 'antd';
import SearchInput from '../components/searchInput';
import CardTitle from "../../components/CardTitle";

interface IProps {
    getYyFind: () => void;
    yyglList: any;
    tableLoading: boolean;
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
        console.log(e)
    };
    handleReset = (): void => {
    };

    componentDidMount(): void {
        this.props.getYyFind()
    }

    render() {
        const columns = [{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '12%',
        }, {
            title: 'Address',
            dataIndex: 'address',
            width: '30%',
            key: 'address',
        }];

        const data = [{
            key: 1,
            name: 'John Brown sr.',
            age: 60,
            address: 'New York No. 1 Lake Park',
            children: [{
                key: 11,
                name: 'John Brown',
                age: 42,
                address: 'New York No. 2 Lake Park',
            }, {
                key: 12,
                name: 'John Brown jr.',
                age: 30,
                address: 'New York No. 3 Lake Park',
                children: [{
                    key: 121,
                    name: 'Jimmy Brown',
                    age: 16,
                    address: 'New York No. 3 Lake Park',
                }],
            }, {
                key: 13,
                name: 'Jim Green sr.',
                age: 72,
                address: 'London No. 1 Lake Park',
                children: [{
                    key: 131,
                    name: 'Jim Green',
                    age: 42,
                    address: 'London No. 2 Lake Park',
                    children: [{
                        key: 1311,
                        name: 'Jim Green jr.',
                        age: 25,
                        address: 'London No. 3 Lake Park',
                    }, {
                        key: 1312,
                        name: 'Jimmy Green sr.',
                        age: 18,
                        address: 'London No. 4 Lake Park',
                    }],
                }],
            }],
        }, {
            key: 2,
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
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
        const {yyglList, tableLoading} = this.props;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4}>
                        <Menu
                            // style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                        >
                            {
                                yyglList.map((item: any) => {
                                    return <Menu.Item key={item.get('id')}>{item.get('yymc')}</Menu.Item>
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
                            <Table columns={columns} rowSelection={rowSelection} dataSource={data} />,
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        yyglList: state.get('ZdglReducer').get('yyglList'),
        tableLoading: state.get('ZdglReducer').get('tableLoading')
    }
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getYyFind: () => {
            dispatch(actionCreators.ac_getYyFind())
        }
    }
};
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Zdgl)
);